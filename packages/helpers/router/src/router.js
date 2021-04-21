import { clickEventHandler } from "./links.js";

function baseHRef() {
  const baseEls = document.getElementsByTagName("base");
  if (baseEls.length === 0) return "";
  const href = baseEls[0].getAttribute("href");
  if (!href) return "";
  return href.replace(/\/$/, "");
}

/**
 * @param {string} pathWithParams
 * @param {boolean} mergeWithLocationSearch
 */
function processGetParams(pathWithParams, mergeWithLocationSearch) {
  let initialGetParams = null;
  if (mergeWithLocationSearch && window.location.search) {
    initialGetParams = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );
  }

  const splittedPath = pathWithParams.split("?");
  if (splittedPath.length > 2)
    throw new Error(`${pathWithParams} isn't a valid path`);
  const [path, pathParamsString] = splittedPath;
  const pathParams = pathParamsString
    ? Object.fromEntries(new URLSearchParams(pathParamsString))
    : null;

  return {
    path,
    params:
      initialGetParams || pathParams
        ? {
            ...initialGetParams,
            // @ts-ignore URLSearchParams are iterable
            ...Object.fromEntries(new URLSearchParams(pathParams)),
          }
        : null,
  };
}

/**
 * @typedef {import('./navigation').NavigationListener} NavigationListener
 * @typedef {import('./navigation').NavigationOptions} NavigationOptions
 */

export class AbstractRouter extends EventTarget {
  constructor() {
    super();

    /** @private */
    this._base = baseHRef();
  }

  get base() {
    return this._base;
  }

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
    const { path, params } = processGetParams(
      pathWithParams,
      !!options.redirection
    );

    const newRoute = await this.renderOrRedirect(path, options, params);
    if (newRoute && newRoute[0] !== path) {
      this.dispatchEvent(
        new CustomEvent("route-redirection", {
          detail: {
            oldValue: {
              path,
              options,
            },
            newValue: { path: newRoute[0], options: newRoute[1] },
          },
        })
      );
      return this._navigate(newRoute[0], newRoute[1]);
    }

    const newURL = `${this.base}${path}${
      params ? `?${new URLSearchParams(params)}` : ""
    }`;

    // TODO: params
    if (options.redirection) {
      window.history.replaceState(options.state, "", newURL);
    } else if (!options.skipLocationChange) {
      window.history.pushState(options.state, "", newURL);
    }

    this.dispatchEvent(
      new CustomEvent("navigation-end", {
        detail: {
          path,
          options,
        },
      })
    );
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} options
   *
   * @returns {Promise<void>}
   */
  async navigate(path, options = {}) {
    // TODO: vérifier si j'ai pas mis "details" ailleurs par inatention
    this.dispatchEvent(
      new CustomEvent("navigation-start", {
        detail: {
          path,
          options,
        },
      })
    );
    return this._navigate(path, options);
  }

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
   * @param {string} path
   * @param {NavigationOptions} options
   * @param {Record<string, any> | null} [params]
   *
   * @returns {[path: string, options?: NavigationOptions] | null | Promise<[path: string, options?: NavigationOptions] | null>}
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  renderOrRedirect(path, options, params) {
    return null;
  }
}
