import { baseUrl } from "../4-history-api/base-url.js";

/**
 * Retourne true si l'interface HTML5 History est supportée.
 * Issu du Modernizr, History et Vue Router.
 *
 * https://github.com/ReactTraining/history/blob/master/LICENSE
 * https://github.com/ReactTraining/history/blob/8bbace1aabbce9fc718a24a2d08c6ac41e9e30b6/modules/DOMUtils.js#L11-L30
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * https://github.com/vuejs/vue-router/blob/dev/LICENSE
 * https://github.com/vuejs/vue-router/blob/c0d3376f4e3527bd761bd325873366ed74f5736b/src/util/push-state.js#L8-L23
 */
//#region support
const supportHistory = (() => {
  const ua = window.navigator.userAgent;

  if (
    (ua.indexOf("Android 2.") !== -1 ||
      ua.indexOf("Android 4.0") !== -1) &&
    ua.indexOf("Mobile Safari") !== -1 &&
    ua.indexOf("Chrome") === -1 &&
    ua.indexOf("Windows Phone") === -1
  ) {
    return false;
  }

  return window.history && "pushState" in window.history;
})();
//#endregion support

//#region updatePath
function updatePath(path) {
  if (supportHistory) {
    window.history.pushState({}, "", `${baseUrl}${path}`);
  } else {
    window.location.hash = path;
  }
}
//#endregion updatePath

//#region replacePath
function replacePath(path) {
  if (supportHistory) {
    window.history.replaceState(
      {},
      "",
      `${baseUrl}${path}`
    );
  } else {
    const { href } = window.location;
    const locationWithoutHash = href.split("#")[0];
    window.location.replace(
      `${locationWithoutHash}#${path}`
    );
  }
}
//#endregion replacePath

//#region getPath
function getPath() {
  return (
    window.location.pathname.replace(baseUrl, "") || "/"
  );
}
//#endregion getPath

export { updatePath, replacePath, supportHistory, getPath };
