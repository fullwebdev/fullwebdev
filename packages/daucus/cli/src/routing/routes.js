import HTMLparser from "node-html-parser";
import { posixVPath, PathMustBeRelativeException } from "../fs/vpath.js";
import { spaceCase } from "../utils/case.js";

/**
 * @type {(import('node-html-parser').parse)}
 */
// @ts-ignore TODO: open an issue for node-html-parser
const parseHTML = HTMLparser.parse;

/** @typedef {import('@daucus/core').Route} Route */

/**
 *
 * @param {string} html template source code
 * @param {string} filePath path to the HTML template file
 * @param {boolean} usePathAsTitle generate title from filename instead of first h1
 *
 * @returns {[string | null, Route]}
 */
export function createRouteFor(html, filePath, usePathAsTitle = false) {
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

  let pathTitle = "";

  let path;
  if (["README", "index"].includes(key)) {
    key = null;
    [position, pathTitle] = posixVPath.splitPrefix(
      posixVPath.basename(dir)
    ) || ["", ""];
    path = dir;
    id = "";
  } else {
    path = (dir ? `${dir}/` : "") + key;
    pathTitle = key;
  }

  /** @type {Route} */
  const route = {
    id /* "1a-bar" */,
    position /* "1a" */,
    path: posixVPath.removePrefixes(path) /* fr/foo/bar */,
    templateUrl: "",
    title: "",
  };

  if (ext === ".html") {
    /* views/fr/05-foo/1a-bar.html */
    route.templateUrl = fileUrl;
    route.title =
      usePathAsTitle && pathTitle
        ? spaceCase(pathTitle)
        : parseHTML(html)?.querySelector("h1")?.rawText || "";
    // TODO: route.script (mdjs)
  }
  // TODO: elsif .js -> component.url ; component.title ; (component.selector (WC) || component.fn (lit-html))

  return [key /* bar */, route];
}
