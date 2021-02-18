import { DaucusRouter } from "./daucus-router.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 */

export class DaucusRouterWC extends HTMLElement {
  /**
   * @type {string}
   */
  get defaultPath() {
    return this.getAttribute("default-path") || "/docs/";
  }

  set defaultPath(path) {
    this.setAttribute("default-path", path);
  }

  /**
   * @type {string}
   */
  get outletTagName() {
    return this.getAttribute("outlet-tag") || "daucus-router-outlet";
  }

  set outletTagName(tagName) {
    this.setAttribute("outlet-tag", tagName);
  }

  /**
   * @type {RoutesConfig | undefined}
   */
  get routes() {
    return this._routes;
  }

  set routes(routes) {
    this._routes = routes;
  }

  /**
   * @type {string}
   */
  get baseDir() {
    return this.getAttribute("base-dir") || "templates/";
  }

  set baseDir(path) {
    this.setAttribute("base-dir", path);
  }

  connectedCallback() {
    this.upgradeProperty("routes");
    this.upgradeProperty("defaultPath");

    if (!this._routes)
      throw new Error("no routes available in the DaucusRouter component");
    if (this._router) throw new Error("can't define router more than once");

    this._router = new DaucusRouter(
      this._routes,
      this.defaultPath,
      this.baseDir
    );

    const routerEventTypes = [
      "navigation-start",
      "navigation-end",
      "route-redirection",
      "route-match",
      "project-change",
    ];
    for (const type of routerEventTypes) {
      this._router.addEventListener(type, (e) =>
        // @ts-ignore detail not defined in Event
        this.dispatchEvent(new CustomEvent(type, { detail: e.detail }))
      );
    }

    this._router.run(this);
  }

  /**
   *
   * @param {string} prop
   */
  upgradeProperty(prop) {
    // eslint-disable-next-line no-prototype-builtins
    if (this.hasOwnProperty(prop)) {
      // @ts-ignore no need to add [key: string]
      const value = this[prop];
      // @ts-ignore no need to add [key: string]
      delete this[prop];
      // @ts-ignore no need to add [key: string]
      this[prop] = value;
    }
  }
}
