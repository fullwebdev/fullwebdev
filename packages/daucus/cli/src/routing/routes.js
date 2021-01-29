import HTML from "node-html-parser";
import { posixVPath, PathMustBeRelativeException } from "./vpath.js";

/** @typedef {import('../../types/Route').Route} Route */

/**
 *
 * @param {string} html
 * @param {string} filePath
 * @param {string} sep path.sep
 *
 * @returns {[string, Route]}
 */
export function createRouteFor(html, filePath) {
  let fileUrl = posixVPath.normalize(filePath);
  if (fileUrl[0] === "/") {
    throw new PathMustBeRelativeException(filePath);
  }

  let { dir, ext, name: id } = posixVPath.parse(fileUrl);
  let key = posixVPath.removePrefixes(id);

  let path;
  if (["README", "index"].includes(key)) {
    key = null;
    path = dir;
    id = "";
  } else {
    path = (dir ? `${dir}/` : "") + key;
  }

  const route = {
    id /* "1a-bar" */,
    path: posixVPath.removePrefixes(path) /* fr/foo/bar */,
    title: HTML.parse(html)?.querySelector("h1")?.rawText || "",
  };

  if (ext === ".html") {
    /* views/fr/05-foo/1a-bar.html */
    route.templateUrl = fileUrl;
    route.title = HTML.parse(html)?.querySelector("h1")?.rawText || "";
    // TODO: route.script (mdjs)
  }
  // TODO: elsif .js -> component.url ; component.title ; (component.selector (WC) || component.fn (lit-html))

  return [key /* bar */, route];
}
