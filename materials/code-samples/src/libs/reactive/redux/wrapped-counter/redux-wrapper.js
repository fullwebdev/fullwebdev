import { store } from "./store.js";

const DictArrayUtil = {
  fromString(str) {
    if (!str) {
      return [];
    }
    return str
      .split("; ")
      .map((action) => action.split(": "));
  },
  asString(dict) {
    if (!dict) {
      return "";
    }
    return dict
      .map(
        ([eventName, action]) => `${eventName}:${action}`
      )
      .join(" ");
  },
};

//#region component
class ReduxWrapper extends HTMLElement {
  //#region bindParam
  set bind(value) {
    this.setAttribute(
      "bind",
      DictArrayUtil.asString(value)
    );
  }

  get bind() {
    return DictArrayUtil.fromString(
      this.getAttribute("bind")
    );
  }
  //#endregion bindParam

  //#region actionsParam
  set actions(value) {
    this.setAttribute(
      "actions",
      DictArrayUtil.asString(value)
    );
  }

  get actions() {
    return DictArrayUtil.fromString(
      this.getAttribute("actions")
    );
  }
  //#endregion actionsParam

  connectedCallback() {
    this._upgradeProperty("bind");

    //#region subscribe
    const selectedStateValues = new Map();

    const render = (state) => {
      this.bind.forEach(([prop, key]) => {
        const previousValue = selectedStateValues.get(key);
        const currentValue = state[key];
        selectedStateValues.set(key, currentValue);
        if (previousValue !== currentValue) {
          this.firstElementChild[prop] = currentValue;
        }
      });
    };

    render(store.getState());

    this._unsubscribe = store.subscribe(() => {
      render(store.getState());
    });
    //#endregion subscribe

    this._upgradeProperty("actions");

    //#region dispatch
    this.actions.forEach(([eventName, type]) => {
      this.firstElementChild.addEventListener(
        eventName,
        (e) => {
          const action = { type };
          if (e.detail) {
            action.payload = e.detail;
          }
          store.dispatch(action);
        }
      );
    });
    //#endregion dispatch
  }

  //#region unsubscribe
  disconnectedCallback() {
    this._unsubscribe();
  }
  //#endregion unsubscribe

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}
//#endregion component

//#region create
customElements.define("redux-wrapper", ReduxWrapper);
//#endregion create
