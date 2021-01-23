//#region base
function getBaseUrl() {
  if (document.getElementsByTagName("base").length === 0) {
    return "";
  }
  const path = new URL(document.baseURI).pathname;
  return path.replace(/\/$/, "");
}
//#endregion base

//#region export
export const baseUrl = getBaseUrl();
//#endregion export
