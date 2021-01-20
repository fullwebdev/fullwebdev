// demo-component-lib/common-style.js

/**
 * @param {string} styles
 */
const constructStylesheet = (
  styles,
  stylesheet = new CSSStyleSheet()
) => {
  stylesheet.replaceSync(styles);
  return stylesheet;
};

export const commonStyle = constructStylesheet(`p {
  text-align: center;
  color: red;
}`);
