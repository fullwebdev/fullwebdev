/**
 * @typedef {import("./hyper").ElOptions} ElOptions
 * @typedef {import("./hyper").TemplateInstance} TemplateInstance
 * @typedef {import("./hyper").ElDescriptor} ElDescriptor
 */

 /**
 * @param {string} tagName
 * @param {ElOptions} options
 * @returns {TemplateInstance}
 */
function createMinimalElement(tagName, { is, className, attributes = [] }) {
  const node = !is
    ? document.createElement(tagName)
    : document.createElement(tagName, { is });

  // forEach is faster than for..of & for loops on very small arrays
  // i.e. when length < 10
  attributes.forEach((attr) => {
    node.setAttribute(attr[0], attr[1]);
  });

  if (className) {
    node.className = className;
  }
  return node;
}

class Template {
  /**
   * @param {string} tagName
   * @param {ElOptions} options
   * @param {any[]} children
   */
  constructor(tagName, options, children) {
    this.root = createMinimalElement(tagName, options);
    this.childrenData = children;
    this._partPaths = new Map();
    this._step(this.root, this.childrenData);
  }

  /**
   * @param {TemplateInstance} parent
   * @param {(ElDescriptor | TextPart)[]} descriptors
   * @param {number[]} childPath
   */
  _step(parent, descriptors, childPath = []) {
    for (let i = 0; i < descriptors.length; i++) {
      const descOrPart = descriptors[i];
      let node;

      if (descOrPart instanceof TextPart) {
        node = document.createElement("span");
        // we do not check if a property already exist with this name for performance reasons
        // if there is one, it will just be overridden
        childPath.push(i);
        this._partPaths.set(descOrPart.key, childPath);
      } else {
        node = createMinimalElement(descOrPart[0], descOrPart[1]);
        if (descOrPart[2]) {
          childPath.push(i);
          this._step(node, descOrPart[2], childPath);
        }
      }
      parent.append(node);
      childPath = [];
    }
  }

  /**
   * @param {{ [key: string]: string; }} props
   */
  render(props) {
    const root = /** @type {TemplateInstance} */(this.root.cloneNode(true));
    root._partsCache = new Map();
    root.parts = {};

    for (let [key, path] of this._partPaths.entries()) {
      /**
       * @type {Element}
       */
      let partEl = root;
      for (let i = 0; i < path.length; i++) {
        partEl = partEl.children[path[i]];
      }
      const prop = props[key];
      if (!prop) {
        throw new Error(`missing prop ${key}`)
      }
      const node = document.createTextNode(prop);
      partEl.replaceWith(node);
      root._partsCache.set(key, node);

      Object.defineProperty(root.parts, key, {
        get: function () {
          // @ts-ignore
          const node = this._partsCache.get(key);
          return node && node.textContent;
        }.bind(root),
        set: function (data) {
          // @ts-ignore
          const node = this._partsCache.get(key);
          node.textContent = data;
        }.bind(root),
      });
    }

    return root;
  }
}

class TextPart {
  /**
   * @param {string} key
   */
  constructor(key) {
    this.key = key;
  }
}

/**
 * mark a Text node in a Template
 *
 * @param {string} key
 */
export function textPart(key) {
  return new TextPart(key);
}

/**
 * generate a pre-parsed template
 *
 * @param {string} tagName
 * @param {ElOptions} options
 * @param {(ElDescriptor | TextPart)[]} children
 */
export function template(tagName, options, children = []) {
  return new Template(tagName, options, children);
}

/**
 * simple helper to create HTMLElements
 *
 * @param {string} tagName
 * @param {ElOptions} options
 * @param {(Node | string)[]} children
 *
 * @returns {HTMLElement}
 */
export function el(tagName, options, children = []) {
  const element = createMinimalElement(tagName, options)
  element.append(...children);
  return element;
}

