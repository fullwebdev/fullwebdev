/**
 * @param {string} tagName
 * @param {import("./hyper").ElOptions} options
 * @param {(Node | string)[]} children
 */
export function el(tagName, { is, className, attributes = [] }, children = []) {
  let element;
  element = !is
    ? document.createElement(tagName)
    : document.createElement(tagName, { is });
  // forEach is faster than for..of & for loops on very small arrays
  // i.e. when length < 10
  attributes.forEach((attr) => {
    element.setAttribute(attr[0], attr[1]);
  });
  if (className) {
    element.className = className;
  }
  element.append(...children);
  return element;
}

/**
 * @param {string} tagName
 * @param {import("./hyper").ElOptions} options
 * @returns {import("./hyper").FwdElement}
 */
function createMinimalElement(tagName, { is, className, attributes = [] }) {
  const node = !is
    ? document.createElement(tagName)
    : document.createElement(tagName, { is });

  attributes.forEach((attr) => {
    node.setAttribute(attr[0], attr[1]);
  });
  if (className) {
    node.className = className;
  }
  return node;
}

/**
 * @param {import("./hyper").FwdElement} parent
 * @param {(import('./hyper').ElDescriptor)[]} descriptors
 */
function addTemplateChildrens(parent, descriptors, store, childPath = []) {
  for (let i = 0; i < descriptors.length; i++) {
    const desc = descriptors[i];
    let node;

    if (desc.partKey && !desc[0]) {
      node = document.createElement("span");
      // we do not check if a property already exist with this name for performance reasons
      // if there is one, it will just be overridden

      childPath.push(i);
      store._childParts.set(desc.partKey, childPath);

      Object.defineProperty(store.parts, desc.partKey, {
        get: () => {
          let el = store.root;
          const path = store._childParts.get(desc.partKey);
          for (let i = 0; i < path.length; i++) {
            el = el.children[path[i]];
          }
          el.textContent;
        },
        set: (data) => {
          const path = store._childParts.get(desc.partKey);
          let el = store.root;
          for (let i = 0; i < path.length; i++) {
            el = el.children[path[i]];
          }
          el.textContent = data;
        },
      });
    } else {
      node = createMinimalElement(desc[0], desc[1]);
      if (desc[2]) {
        childPath.push(i);
        addTemplateChildrens(node, desc[2], store, childPath);
      }
    }
    parent.append(node);
    childPath = [];
  }
}

/**
 * @param {string} tagName
 * @param {import("./hyper").ElOptions} options
 * @param {(import("./hyper").ElDescriptor)[]} children
 */
export function template(tagName, options, children = []) {
  let root = createMinimalElement(tagName, options);
  root._childParts = new Map();
  root.parts = {};

  let store = {
    _childParts: new Map(),
    parts: {},
    _root: root,
    getRootElement() {
      return this._root;
    },
  };

  addTemplateChildrens(root, children, store);

  return (props) => {
    let copy = root.cloneNode(true);
    store.root = copy;
    for (let key in store) {
      copy[key] = store[key];
    }
    for (let key in props) {
      copy.parts[key] = props[key];
    }
    return copy;
  };
}

/**
 * @param {string} key
 */
export function textPart(key) {
  return {
    partKey: key,
  };
}
