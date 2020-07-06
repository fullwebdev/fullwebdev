/**
 * @param {string} tagName
 * @param {import("./el-options").ElOptions} options
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
