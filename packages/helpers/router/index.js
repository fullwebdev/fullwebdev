import { clickEventHandler } from "./links";

function baseHRef() {
  if (document.getElementsByTagName("base").length === 0) return "";
  return new URL(document.baseURI).pathname.replace(/\/$/, "");
}

/**
 * @typedef (import('./index.d.ts').NavigationListener) NavigationListener
 * @typedef (import('./index.d.ts').NavigationOptions) NavigationOptions
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
   * @param {NavigationListener} path
   * @param {NavigationOptions} options
   */
  async navigate(path, options = {}) {
    const newRoute = await this._navListener(path, options);
    if (newRoute) return this.navigate(...newRoute);

    // TODO: params
    if (options.redirection) {
      history.replaceState(options.state, "", `${this.base}${path}`);
    } else if (!options.skipLocationChange) {
      history.pushState(options.state, "", `${this.base}${path}`);
    }
  }

  async run(root = document.body) {
    root.addEventListener(
      "click",
      clickEventHandler(this.base)((path, event) =>
        this.navigate(path, { event })
      )
    );

    window.addEventListener("popstate", (event) => {
      this.navigate(this.currentPath, { skipLocationChange: true, event });
    });

    return this.navigate(this.currentPath, { skipLocationChange: true });
  }
}
