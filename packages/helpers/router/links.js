/**
 * emulate "normal" link behaviors on click
 *
 * inspired by the router helper from Polymer/pwa-helper
 * @see https://github.com/Polymer/pwa-helpers/blob/v0.9.1/src/router.ts
 *
 * @param {import('./index.d.ts').PathUpdated} pathUpdatedCallback
 */
export const clickEventHandler = (pathUpdatedCallback) => {
  return (e) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    const anchor = /** @type {HTMLLinkElement} */ (e.target);

    if (
      !anchor ||
      anchor.tagName !== "A" ||
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
      // FIXME: bad url when opening in a new window
      const path = hrefAttr.startsWith("./")
        ? window.location.pathname + hrefAttr.slice(2)
        : new URL(fullHref).pathname;

      pathUpdatedCallback(path, e);
    }
  };
};
