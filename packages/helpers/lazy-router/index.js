export const baseUrl = (() => {
  if (document.getElementsByTagName("base").length === 0) {
    return "";
  }
  const path = new URL(document.baseURI).pathname;

  return path.replace(/\/$/, "");
})();

/**
 * get current path without baseUrl
 *
 * @returns {string}
 */
export function getPath() {
  return window.location.pathname.replace(baseUrl, "") || "/";
}

export class NavigationError extends Error {
  /**
   * @param {string} message
   * @param {string} path
   * @param {boolean} redirection
   * @param {boolean} update
   */
  constructor(message, path, redirection, update) {
    super(message);
    this.path = path;
    this.redirection = redirection;
    this.update = update;
  }
}

/**
 * emulate "normal" link behaviors on click
 *
 * inspired by the router helper from Polymer/pwa-helper
 * @see https://github.com/Polymer/pwa-helpers/blob/v0.9.1/src/router.ts
 *
 * @param {import('./main').PathUpdated} pathUpdatedCallback
 */
const clickEventHandler = (pathUpdatedCallback) => {
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
      const path = hrefAttr.startsWith("./")
        ? window.location.pathname + hrefAttr.slice(2)
        : new URL(fullHref).pathname;
      pathUpdatedCallback(path, e);
    }
  };
};

/**
 * @type {import('./main').navigateFn}
 */
let navigateFn;

/**
 * @type {import('./main').navigateFn}
 */
export let navigate = async (...args) => {
  if (!navigateFn) {
    throw new NavigationError("the router wasn't set up correctly", ...args);
  }
  return navigateFn(...args);
};

/**
 * @typedef {import('./main').RouterConfig} RouterConfig
 *
 * @param {Partial<RouterConfig>} config
 * @param {Partial<import('./main').SetUpCallbacks>} callbacks
 * @param {import('./main').Routes} routes
 * @param {import('./main').Renderer} render
 */
export function setUp(routes, render, callbacks = {}, config = {}) {
  /**
   * @type {RouterConfig}
   */
  const mergedConfig = {
    hashMode: false,
    containderId: "router-outlet",
    emulateLinkHref: true,
    ...config,
  };

  const supportHistory = (() => {
    if (mergedConfig.hashMode === true) {
      return false;
    }

    const ua = window.navigator.userAgent;

    if (
      (ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) &&
      ua.indexOf("Mobile Safari") !== -1 &&
      ua.indexOf("Chrome") === -1 &&
      ua.indexOf("Windows Phone") === -1
    ) {
      return false;
    }

    return window.history && "pushState" in window.history;
  })();

  /**
   * @type {(path: string) => void}
   */
  const updatePath = supportHistory
    ? (path) => {
        history.pushState({}, "", `${baseUrl}${path}`);
      }
    : (path) => {
        window.location.hash = path;
      };

  /**
   * @type {(path: string) => void}
   */
  const replacePath = supportHistory
    ? (path) => {
        history.replaceState({}, "", `${baseUrl}${path}`);
      }
    : (path) => {
        const href = window.location.href;
        const locationWithoutHash = href.split("#")[0];
        window.location.replace(`${locationWithoutHash}#${path}`);
      };

  const routeContainer = document.getElementById(mergedConfig.containderId);

  let firstNavigation = true;

  const appTitle = document.title;

  navigateFn = async (path, redirection = false, update = true) => {
    /**
     * @type {RegExpExecArray}
     */
    let routeMatch;
    const progRoute = routes.find(
      ({ path: regexp }) => (routeMatch = regexp.exec(path))
    );

    /**
     * @type {string}
     */
    let importPath;

    if (progRoute && progRoute.component) {
      importPath = progRoute.component;
    } else if (callbacks.routeNotFound) {
      const newRoute = callbacks.routeNotFound(path, redirection, update);
      importPath = newRoute.importPath;
      if (newRoute.newPath) {
        path = newRoute.newPath;
      }
    }

    // if (!importPath) {
    //   throw new NavigationError("can't find any page to import", path, redirection, update);
    // }

    let template;

    /**
     * @type {import('./main').Page}
     */
    let page;
    try {
      page = await import(importPath);
    } catch {}

    if (!page && callbacks.importFailed) {
      let cbRslt;
      try {
        cbRslt = await callbacks.importFailed(
          importPath,
          path,
          redirection,
          update
        );
      } catch {}
      if (cbRslt) {
        page = cbRslt.page;
        path = cbRslt.newPath;
      }
    }

    let templateParams = {};
    if (callbacks.templateParams) {
      templateParams = callbacks.templateParams(path, redirection, update);
    }
    try {
      let data = null;
      if ("fetchData" in page) {
        render(
          page.default({ data, routeParams: routeMatch, ...templateParams }),
          routeContainer
        );
        try {
          data = await page.fetchData(routeMatch);
        } catch (err) {
          data = { error: err.toString() };
        }
      }
      template = page.default({
        data,
        routeParams: routeMatch,
        ...templateParams,
      });
    } catch (err) {
      if (callbacks.templateCallFailed) {
        template = await callbacks.templateCallFailed(
          path,
          redirection,
          update
        );
      } else {
        throw new NavigationError(
          "no route could be found for this path",
          path,
          redirection,
          update
        );
      }
    }

    render(template, routeContainer);

    if (!firstNavigation) {
      const heading = routeContainer.querySelector("h1");
      heading.tabIndex = -1;
      heading.focus();
      window.scrollTo(0, 0);
      document.title = `${appTitle} - ${heading.textContent.trim()}`;
    } else {
      firstNavigation = false;
    }

    if (redirection) {
      replacePath(path);
    } else if (update) {
      updatePath(path);
    }

    if (callbacks.afterNavigation) {
      await callbacks.afterNavigation(
        path,
        redirection,
        update,
        routeContainer
      );
    }
  };

  if (mergedConfig.emulateLinkHref) {
    document.body.addEventListener(
      "click",
      clickEventHandler((path, event) => {
        if (callbacks.pathUpdated) {
          callbacks.pathUpdated(path, event);
        }
        navigateFn(path);
      })
    );
  }
}
