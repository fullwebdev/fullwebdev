/**
 * Emulate "normal" link behaviors on click.
 *
 * Inspired by the router helper from {@link https://github.com/Polymer/pwa-helpers/blob/v0.9.1/src/router.ts|polymer pwa-helper v0.9.1 - router.ts}
 *
 * @param baseUrl Prefix to ignore in location pathname when generating a path from an anchor href
 *
 */
export const clickEventHandler = (/** @type {string} */ baseUrl) => (
  /** @type {import('./navigation').PathUpdated} */ pathUpdatedCallback
) => (/** @type {MouseEvent} */ e) => {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey
  ) {
    return;
  }

  // support Shadow DOM
  let anchor = /** @type {HTMLAnchorElement | null} */ (e.composedPath()[0]);

  if (!anchor) return;

  if (anchor.tagName !== "A") {
    anchor = anchor.closest("a");
    if (!anchor) return;
  }

  if (
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel") === "external" ||
    anchor.getAttribute("target") === "_blank"
  ) {
    return;
  }

  const fullHref = anchor.href;

  if (!fullHref || fullHref.includes("mailto:")) {
    return;
  }

  if (!fullHref.startsWith(window.location.origin)) {
    return;
  }

  e.preventDefault();

  const hrefAttr = anchor.getAttribute("href");
  if (!hrefAttr) {
    return;
  }

  if (`${baseUrl}${fullHref}` !== window.location.href) {
    let path = "";
    const url = new URL(fullHref);

    if (hrefAttr.startsWith("./")) {
      const previousPath = window.location.pathname
        .replace(new RegExp(`^${baseUrl}(.*)`), "$1")
        .replace(/(.*)\/$/, "$1");
      path = previousPath + hrefAttr.slice(1);
    } else {
      path = url.pathname;
    }

    pathUpdatedCallback(path + url.search + url.hash, e);
  }
};
