import { baseUrl } from "./base-url";

/**
 * TODO
 *
 * @param {string} path
 */
//#region updatePath
function updatePath(path) {
  history.pushState({}, "", `${baseUrl}${path}`);
}
//#endregion updatePath

/**
 * TODO
 *
 * @param {string} path
 */
//#region replacePath
function replacePath(path) {
  history.replaceState({}, "", `${baseUrl}${path}`);
}
//#endregion replacePath

export { updatePath, replacePath };
