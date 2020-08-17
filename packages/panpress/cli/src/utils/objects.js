const isObject = (value) => {
  const type = typeof value;
  return (
    value != null &&
    (type == "object" || type == "function") &&
    !Array.isArray(value)
  );
};

const defaultTransformer = (target, source, key) => undefined;

/**
 * @param {{ [x: string]: any; }} target
 * @param {{ [x: string]: any; }} source
 */
const merge = (target, source, transformer = defaultTransformer) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    const keys = new Set(Object.keys(target).concat(Object.keys(source)));
    for (const key of keys) {
      if (isObject(source[key])) {
        if (!(key in target)) {
          const data = transformer(target, source, key) ?? source[key];
          Object.assign(output, { [key]: data });
        } else if (key in source) {
          output[key] = merge(target[key], source[key], transformer);
        } else {
          const data = transformer(target, source, key) ?? target[key];
          Object.assign(output, { [key]: data });
        }
      } else if (isObject(target[key])) {
        output[key] = merge(target[key], {}, transformer);
      } else {
        const data =
          transformer(target, source, key) ?? source[key] ?? target[key];
        Object.assign(output, { [key]: data });
      }
    }
  }
  return output;
};

module.exports = { merge };
