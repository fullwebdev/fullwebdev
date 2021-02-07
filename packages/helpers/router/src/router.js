import { clickEventHandler } from "./links.js";

function baseHRef() {
  if (document.getElementsByTagName("base").length === 0) return "";
  return new URL(document.baseURI).pathname.replace(/\/$/, "");
}

/**
 * @typedef {import('./navigation').NavigationListener} NavigationListener
 * @typedef {import('./navigation').NavigationOptions} NavigationOptions
 */

export class Router {
  /**
   * @param {NavigationListener} navigationListener
   */
  constructor(navigationListener) {
    this.base = baseHRef();
    this._navListener = navigationListener;
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
  async navigate(path, options = {}) {
    const newRoute = await this._navListener(path, options);
    if (newRoute) return this.navigate(newRoute[0], newRoute[1]);

    // TODO: params
    if (options.redirection) {
      window.history.replaceState(options.state, "", `${this.base}${path}`);
    } else if (!options.skipLocationChange) {
      window.history.pushState(options.state, "", `${this.base}${path}`);
    }
  }

  async run(root = document.body, skipLocationChange = true) {
    root.addEventListener(
      "click",
      clickEventHandler(this.base)((path, event) =>
        this.navigate(path, { event })
      )
    );

    window.addEventListener("popstate", (event) => {
      this.navigate(this.currentPath, { skipLocationChange: true, event });
    });

    return this.navigate(this.currentPath, { skipLocationChange });
  }
}
