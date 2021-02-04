import { baseUrl } from "./base-url.js";

/**
 * TODO
 *
 * @param {string} path
 */
//#region updatePath
function updatePath(path) {
  window.history.pushState({}, "", `${baseUrl}${path}`);
}
//#endregion updatePath

/**
 * TODO
 *
 * @param {string} path
 *
 * @returns {any}
 */
//#region replacePath
function replacePath(path) {
  window.history.replaceState({}, "", `${baseUrl}${path}`);
}
//#endregion replacePath

export { updatePath, replacePath };
