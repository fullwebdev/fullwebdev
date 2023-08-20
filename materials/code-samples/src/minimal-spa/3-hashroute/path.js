/**
 * TODO
 *
 * @param {string} path
 */
//#region updatePath
function updatePath(path) {
  window.location.hash = path;
}
//#endregion updatePath

/**
 * TODO
 *
 * @param {string} path
 */
//#region replacePath
function replacePath(path) {
  const { href } = window.location;
  const locationWithoutHash = href.split("#")[0];
  window.location.replace(`${locationWithoutHash}#${path}`);
}
//#endregion replacePath

export { updatePath, replacePath };
