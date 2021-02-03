/**
 * simple helper to create HTMLElements
 *
 * @param {string} tagName
 * @param {import("./options").ElOptions} options
 * @param {(Node | string)[]} children
 *
 * @returns {HTMLElement}
 */
export function el(tagName, { is, className, attributes = [] }, children = []) {
  const node = !is
    ? document.createElement(tagName)
    : document.createElement(tagName, { is });

  // forEach is faster than for..of & for loops on very small arrays
  // i.e. when length < 10
  attributes.forEach(([key, value]) => {
    if (value === false || value === null || value === undefined) {
      node.removeAttribute(key);
    } else if (value === true) {
      node.setAttribute(key, "");
    } else {
      node.setAttribute(key, value);
    }
  });

  if (className) {
    node.className = className;
  }

  node.append(...children);
  return node;
}
