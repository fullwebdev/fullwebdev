/**
 * Validate against Name Production
 * (see https://www.w3.org/TR/xml/#NT-Name)
 *
 * ValidCustomElementName:
 * (see https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
 *
 * "They can always be created with createElement() and
 * createElementNS(), which have restrictions that go beyond
 * the parser's."
 *
 * createElement:
 * (see https://dom.spec.whatwg.org/#dom-document-createelement)
 *
 * "If localName does not match the Name production, then
 * throw an "InvalidCharacterError" DOMException."
 *
 * Discussion in https://stackoverflow.com/questions/60608372/how-to-create-a-custom-element-that-contains-special-characters-in-its-name
 *
 * @param {string} str
 */
export const isValidElementName = (str) => {
  const nameStartChar =
    ":|[A-Z]|_|[a-z]|[\u{C0}-\u{D6}]| [\u{D8}-\u{F6}]|[\u{F8}-\u{2FF}]|[\u{370}-\u{37D}]|[\u{37F}-\u{1FFF}]|[\u{200C}-\u{200D}]|[\u{2070}-\u{218F}]|[\u{2C00}-\u{2FEF}]|[\u{3001}-\u{D7FF}]|[\u{F900}-\u{FDCF}]|[\u{FDF0}-\u{FFFD}]|[\u{10000}-\u{EFFFF}]";
  const nameChar = `${nameStartChar}|-|.|[0-9]|\u{B7}|[\u{0300}-\u{036F}]|[\u{203F}-\u{2040}]`;
  const name = `(${nameStartChar})(${nameChar})*`;

  return new RegExp(`^${name}$`, "u").test(str);
};
