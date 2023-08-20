/**
 * Simple helper to create HTMLElements.
 *
 * @param {string} tagName The name of an element.
 * @param {import("./options").ElOptions} options Creation options for the element, with attributes and className.
 * @param {(Node | string)[]} children Nodes to append as child of the new Element, while replacing strings in nodes with equivalent Text nodes.
 *
 * @returns {HTMLElement}
 */
export function el(tagName, options = {}, children = []) {
  const { is, className, attributes = [] } = options;
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
