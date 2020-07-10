/**
 * @param {string} tagName
 * @param {import("./hyper").ElOptions} options
 * @param {(Node | string)[]} children
 */
export function el(tagName, { is, className, attributes = [] }, children = []) {
  /**
   * @type {import('./hyper').FwdElement}
   */
  let element = !is
    ? document.createElement(tagName)
    : document.createElement(tagName, { is });

  element._childParts = new Map();
  element.parts = {};

  // forEach is faster than for..of & for loops on very small arrays
  // i.e. when length < 10
  attributes.forEach((attr) => {
    element.setAttribute(attr[0], attr[1]);
  });

  if (className) {
    element.className = className;
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    element.append(child);
    if (child instanceof TextPart) {
      // we do not check if a property already exist with this name for performance reasons
      // if there is one, it will just be overridden

      // TODO: observe (proxy)
      element._childParts.set(child.partKey, child);

      Object.defineProperty(element.parts, child.partKey, {
        get: () => {
          element._childParts.get(child.partKey).textContent;
        },
        set: (data) => {
          element._childParts.get(child.partKey).textContent = data;
        }
      })
    }
  }
  return element;
}

// FIXME: not compatible with IE
class TextPart extends Text {
  /**
   * @param {string} key
   */
  constructor(key) {
    super();
    this.partKey = key;
  }
}

/**
 * @param {string} key
 */
export function textPart(key) {
  return new TextPart(key);
}
