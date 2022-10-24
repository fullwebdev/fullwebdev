import { clickEventHandler } from "./links.js";

/**
 * @typedef {import('./navigation').NavigationOptions} NavigationOptions
 */

/**
 * @internal
 */
function baseHRef() {
  const baseEls = document.getElementsByTagName("base");
  if (baseEls.length === 0) return "";
  const href = baseEls[0].getAttribute("href");
  if (!href) return "";
  return href.replace(/\/$/, "");
}

/**
 * @internal
 * @param {string} initialPath
 * @param {boolean} mergeWithLocationSearch
 */
function pathToURL(initialPath, mergeWithLocationSearch) {
  if (initialPath.startsWith("#")) {
    return {
      path: null,
      searchParams: new URLSearchParams(),
      hash: initialPath,
    };
  }
  const url = new URL(initialPath, window.location.origin);
  if (mergeWithLocationSearch && window.location.search) {
    url.search = new URLSearchParams({
      ...new URLSearchParams(window.location.search),
      ...url.searchParams,
    }).toString();
  }
  const { pathname, searchParams, hash } = url;

  return {
    path: pathname,
    searchParams,
    hash,
  };
}

/**
 * Minimalistic programmatic router for modern web apps.
 *
 * Extend this class and override the `renderOrRedirect` method to define a router.
 *
 * Fires `navigation-start`, `navigation-end` and `route-redirection` events.
 */
export class AbstractRouter extends EventTarget {
  constructor() {
    super();

    /** @private */
    this._base = baseHRef();
    /** @private */
    this._redirectionCount = 0;
  }

  /**
   * URL prefix preserved when generating and recognizing URLs.
   *
   * This value is inferred from the first HTML `<base>` element in the document or "/" if there is none.
   *
   * @type {string}
   */
  get base() {
    return this._base;
  }

  /**
   * Last path leading to successful navigation (from window.location)
   */
  get currentPath() {
    return window.location.pathname.replace(this.base, "") || "/";
  }

  /**
   * @private
   * @param {string} pathWithParams
   * @param {NavigationOptions} options
   *
   * @returns {Promise<void>}
   */
  async _navigate(pathWithParams, options = {}) {
    const { path, searchParams, hash } = pathToURL(
      pathWithParams,
      !!options.redirection
    );

    const newRoute = await this.renderOrRedirect(
      path,
      options,
      searchParams,
      hash.replace(/^#/, "")
    );
    if (newRoute && newRoute[0] !== path && newRoute[0] !== null) {
      /**
       * @type {import('./navigation').RedirectionEventDetail}
       */
      const detail = {
        oldValue: {
          path,
          options,
        },
        newValue: { path: newRoute[0], options: newRoute[1] || {} },
      };
      this.dispatchEvent(
        new CustomEvent("route-redirection", {
          detail,
        })
      );
      if (this._redirectionCount <= 3) {
        this._redirectionCount += 1;
        return this._navigate(newRoute[0], newRoute[1]);
      }
      return;
    }
    this._redirectionCount = 0;

    if (!newRoute || newRoute[0] !== null) {
      const newURL =
        this.base +
        path +
        (searchParams.entries.length > 0 ? searchParams.toString() : "") +
        (hash || "");

      if (options.redirection) {
        window.history.replaceState(options.state, "", newURL);
      } else if (!options.skipLocationChange) {
        window.history.pushState(options.state, "", newURL);
      }
    }

    /**
     * @type {import('./navigation').NavigationEventDetail}
     */
    const detail = {
      path,
      options,
    };
    this.dispatchEvent(
      new CustomEvent("navigation-end", {
        detail,
      })
    );
  }

  /**
   * Navigate to a view using a route path.
   *
   * @param {string} path path of a defined route
   * @param {NavigationOptions} options
   *
   * @returns {Promise<void>}
   */
  async navigate(path, options = {}) {
    /**
     * @type {import('./navigation').NavigationEventDetail}
     */
    const detail = {
      path,
      options,
    };
    this.dispatchEvent(
      new CustomEvent("navigation-start", {
        detail,
      })
    );
    return this._navigate(path, options);
  }

  /**
   * Initialize the router and bind it to the DOM to handle popstate and click events
   *
   * @param {HTMLElement} root root element where events will be listened
   * @param {boolean} navigate run a navigation using the current path
   */
  async run(root = document.body, navigate = true) {
    root.addEventListener(
      "click",
      clickEventHandler(this.base)((path, event) =>
        this.navigate(path, { event })
      )
    );

    window.addEventListener("popstate", (event) => {
      this.navigate(this.currentPath, { skipLocationChange: true, event });
    });

    if (navigate) {
      return this.navigate(this.currentPath, { skipLocationChange: true });
    }
  }

  /**
   * Match and render a defined route, or return a new path to redirect to.
   *
   * SHOULD BE OVERRIDEN in your own Router class!
   *
   * @param {string | null} path navigation path
   * @param {NavigationOptions} options navigation options
   * @param {URLSearchParams | null} [params] get parameters
   * @param {string} [hash] fragment identifier (without '#')
   *
   * @returns {[path: string, options?: NavigationOptions] | null | Promise<[path: string, options?: NavigationOptions] | null>} path and navigation options to use for redirection
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  renderOrRedirect(path, options, params, hash) {
    return null;
  }
}
