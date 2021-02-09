import { clickEventHandler } from "./links.js";

function baseHRef() {
  if (document.getElementsByTagName("base").length === 0) return "";
  return new URL(document.baseURI).pathname.replace(/\/$/, "");
}

/**
 * @typedef {import('./navigation').NavigationListener} NavigationListener
 * @typedef {import('./navigation').NavigationOptions} NavigationOptions
 */

export class AbstractRouter extends EventTarget {
  constructor() {
    super();
    this._base = baseHRef();
  }

  get base() {
    return this._base;
  }

  get currentPath() {
    return window.location.pathname.replace(this.base, "") || "/";
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} options
   *
   * @returns {Promise<void>}
   */
  async _navigate(path, options = {}) {
    const newRoute = await this.renderOrRedirect(path, options);
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

    // TODO: params
    if (options.redirection) {
      window.history.replaceState(options.state, "", `${this.base}${path}`);
    } else if (!options.skipLocationChange) {
      window.history.pushState(options.state, "", `${this.base}${path}`);
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
   *
   * @returns {[path: string, options?: NavigationOptions] | null | Promise<[path: string, options?: NavigationOptions] | null>}
   */
  // eslint-disable-next-line class-methods-use-this
  renderOrRedirect(path, options) {
    return null;
  }
}
