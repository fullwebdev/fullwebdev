/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function () {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    let request;
    const p = new Promise((resolve, reject) => {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    const p = promisifyRequestCall(obj, method, args);
    return p.then((value) => {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach((prop) => {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get() {
          return this[targetProp][prop];
        },
      });
    });
  }

  function proxyRequestMethods(
    ProxyClass,
    targetProp,
    Constructor,
    properties
  ) {
    properties.forEach((prop) => {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach((prop) => {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(
    ProxyClass,
    targetProp,
    Constructor,
    properties
  ) {
    properties.forEach((prop) => {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, "_index", ["name", "keyPath", "multiEntry", "unique"]);

  proxyRequestMethods(Index, "_index", IDBIndex, [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count",
  ]);

  proxyCursorRequestMethods(Index, "_index", IDBIndex, [
    "openCursor",
    "openKeyCursor",
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, "_cursor", [
    "direction",
    "key",
    "primaryKey",
    "value",
  ]);

  proxyRequestMethods(Cursor, "_cursor", IDBCursor, ["update", "delete"]);

  // proxy 'next' methods
  ["advance", "continue", "continuePrimaryKey"].forEach((methodName) => {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function () {
      const cursor = this;
      const args = arguments;
      return Promise.resolve().then(() => {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then((value) => {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function () {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function () {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, "_store", [
    "name",
    "keyPath",
    "indexNames",
    "autoIncrement",
  ]);

  proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, [
    "put",
    "add",
    "delete",
    "clear",
    "get",
    "getAll",
    "getAllKeys",
    "count",
  ]);

  proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, [
    "openCursor",
    "openKeyCursor",
  ]);

  proxyMethods(ObjectStore, "_store", IDBObjectStore, ["deleteIndex"]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise((resolve, reject) => {
      idbTransaction.oncomplete = function () {
        resolve();
      };
      idbTransaction.onerror = function () {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function () {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, "_tx", ["objectStoreNames", "mode"]);

  proxyMethods(Transaction, "_tx", IDBTransaction, ["abort"]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function () {
    return new ObjectStore(
      this._db.createObjectStore.apply(this._db, arguments)
    );
  };

  proxyProperties(UpgradeDB, "_db", ["name", "version", "objectStoreNames"]);

  proxyMethods(UpgradeDB, "_db", IDBDatabase, ["deleteObjectStore", "close"]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function () {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, "_db", ["name", "version", "objectStoreNames"]);

  proxyMethods(DB, "_db", IDBDatabase, ["close"]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ["openCursor", "openKeyCursor"].forEach((funcName) => {
    [ObjectStore, Index].forEach((Constructor) => {
      Constructor.prototype[funcName.replace("open", "iterate")] = function () {
        const args = toArray(arguments);
        const callback = args[args.length - 1];
        const request = (this._store || this._index)[funcName].apply(
          this._store,
          args.slice(0, -1)
        );
        request.onsuccess = function () {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach((Constructor) => {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function (query, count) {
      const instance = this;
      const items = [];

      return new Promise((resolve) => {
        instance.iterateCursor(query, (cursor) => {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  const exp = {
    open(name, version, upgradeCallback) {
      const p = promisifyRequestCall(indexedDB, "open", [name, version]);
      const { request } = p;

      request.onupgradeneeded = function (event) {
        if (upgradeCallback) {
          upgradeCallback(
            new UpgradeDB(request.result, event.oldVersion, request.transaction)
          );
        }
      };

      return p.then((db) => new DB(db));
    },
    delete(name) {
      return promisifyRequestCall(indexedDB, "deleteDatabase", [name]);
    },
  };

  if (typeof module !== "undefined") {
    module.exports = exp;
  } else {
    self.idb = exp;
  }
})();
