/* eslint-disable */
/**
 * Derived from path-to-regexp v1.7.0
 * by Blake Embrey (hello@blakeembrey.com) under MIT License
 *
 * https://github.com/pillarjs/path-to-regexp/blob/v1.7.0/LICENSE
 * https://github.com/pillarjs/path-to-regexp/blob/v1.7.0/index.js
 */

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp(
  [
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @return {!Array}
 */
function parse(str) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = "";
  const defaultDelimiter = "/";
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = "";
    }

    const partial =
      prefix != null && next != null && next !== prefix;
    const repeat = modifier === "+" || modifier === "*";
    const optional = modifier === "?" || modifier === "*";
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;

    tokens.push({
      name: name || (key += 1),
      prefix: prefix || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern
        ? escapeGroup(pattern)
        : asterisk
        ? ".*"
        : `[^${escapeString(delimiter)}]+?`,
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @return {!RegExp}
 */
function tokensToRegExp(tokens) {
  let route = "";

  // Iterate over the tokens and create our regexp string.
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      const prefix = escapeString(token.prefix);
      let capture = `(?:${token.pattern})`;

      if (token.repeat) {
        capture += `(?:${prefix}${capture})*`;
      }

      if (token.optional) {
        if (!token.partial) {
          capture = `(?:${prefix}(${capture}))?`;
        } else {
          capture = `${prefix}(${capture})?`;
        }
      } else {
        capture = `${prefix}(${capture})`;
      }

      route += capture;
    }
  }

  const delimiter = escapeString("/");
  const endsWithDelimiter =
    route.slice(-delimiter.length) === delimiter;

  route = `${
    endsWithDelimiter
      ? route.slice(0, -delimiter.length)
      : route
  }(?:${delimiter}(?=$))?`;

  route += "$";

  return new RegExp(`^${route}`);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @return {!RegExp}
 */
export function pathToRegexp(path) {
  return tokensToRegExp(parse(path));
}
