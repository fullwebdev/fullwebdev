const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Separator splitter.
 *
 * @internal
 */
const separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @internal
 * @param {String} string
 * @return {String}
 */
function unseparate(string) {
  return string.replace(separatorSplitter, (_, next) =>
    next ? ` ${next}` : ""
  );
}

/**
 * Camelcase splitter.
 *
 * @internal
 */
const camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 *
 * @internal
 */
function uncamelize(string) {
  return string.replace(
    camelSplitter,
    (_, previous, uppers) =>
      `${previous} ${uppers.toLowerCase().split("").join(" ")}`
  );
}

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 *
 * inspired by the "to-no-case" package by Ian Storm Taylor
 *
 * @see https://github.com/ianstormtaylor/to-no-case/blob/master/index.js
 *
 */
export function noCase(string) {
  if (hasSpace.test(string)) {
    return string.toLowerCase();
  }
  if (hasSeparator.test(string)) {
    return (unseparate(string) || string).toLowerCase();
  }
  if (hasCamel.test(string)) {
    return uncamelize(string).toLowerCase();
  }
  return string.toLowerCase();
}

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 *
 * inspired by the "to-space-case" package by Ian Storm Taylor
 *
 * @see https://github.com/ianstormtaylor/to-space-case/blob/master/index.js
 */
export function spaceCase(string) {
  return noCase(string)
    .replace(/[\W_]+(.|$)/g, (_, match) => (match ? ` ${match}` : ""))
    .trim();
}
