import HTMLparser from "node-html-parser";
import { posixVPath, PathMustBeRelativeException } from "../fs/vpath.js";

/**
 * @type {(import('node-html-parser').parse)}
 */
// @ts-ignore TODO: open an issue for node-html-parser
const parseHTML = HTMLparser.parse;

/** @typedef {import('./Route').Route} Route */

/**
 *
 * @param {string} html
 * @param {string} filePath
 * @param {any} [metadata]
 *
 * @returns {[string | null, Route]}
 */
export function createRouteFor(html, filePath, metadata) {
  const fileUrl = posixVPath.normalize(filePath);
  if (fileUrl[0] === "/") {
    throw new PathMustBeRelativeException(filePath);
  }

  // eslint-disable-next-line prefer-const
  let { dir, ext, name: id } = posixVPath.parse(fileUrl);
  const splittedPrefix = posixVPath.splitPrefix(id) || ["", id];
  let position = splittedPrefix[0];
  /** @type {string | null} */
  let key = splittedPrefix[1];

  // TODO: position of a chapter where it has no index
  // (and therefor no Route entry)

  let path;
  if (["README", "index"].includes(key)) {
    key = null;
    [position] = posixVPath.splitPrefix(posixVPath.basename(dir)) || [""];
    path = dir;
    id = "";
  } else {
    path = (dir ? `${dir}/` : "") + key;
  }

  /** @type {Route} */
  const route = {
    id /* "1a-bar" */,
    position /* "1a" */,
    path: posixVPath.removePrefixes(path) /* fr/foo/bar */,
    templateUrl: "",
    title: "",
  };

  if (metadata) {
    route.data = metadata;
  }

  if (ext === ".html") {
    /* views/fr/05-foo/1a-bar.html */
    route.templateUrl = fileUrl;
    route.title = parseHTML(html)?.querySelector("h1")?.rawText || "";
    // TODO: route.script (mdjs)
  }
  // TODO: elsif .js -> component.url ; component.title ; (component.selector (WC) || component.fn (lit-html))

  return [key /* bar */, route];
}
