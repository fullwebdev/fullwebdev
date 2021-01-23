/**
 * Update path in URL
 *
 * this is only an example in order to understand
 * why you SHOULD NOT use this
 *
 * @param {string} path new absolute path
 */
//#region update-url
function updateUrl(path) {
  window.location.assign(window.location.origin + path);
}
//#endregion update-url

export { updateUrl };
