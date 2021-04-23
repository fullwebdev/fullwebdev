import { DaucusRouter } from "./daucus-router.js";

/**
 * @typedef {import('@daucus/core').SimpleRoutesConfig} SimpleRoutesConfig
 */

/**
 * Routing wrapper element for Daucus Routes
 *
 * Wrap the programmatic DaucusRouter for declarative usage.
 *
 * @see https://www.npmjs.com/package/@modern-helpers/router
 *
 * @element daucus-router
 *
 * @fires navigation-start New navigation begins
 * @fires navigation-end A navigation ended without error
 * @fires route-redirection A navigation led to a redirection to another route
 * @fires route-match A corresponding route was found for a navigation
 * @fires project-change A navigation led to a route from another Daucus Project
 */
export class DaucusRouterWC extends HTMLElement {
  /**
   * Path of the default route
   *
   * @type {string}
   * @attr default-path
   * @default /docs/
   */
  get defaultPath() {
    return this.getAttribute("default-path") || "/docs/";
  }

  set defaultPath(path) {
    this.setAttribute("default-path", path);
  }

  set routes(routes) {
    /** @private */
    this._routes = routes;
  }

  /**
   * Daucus Routes
   *
   * @type {SimpleRoutesConfig | undefined}
   */
  get routes() {
    return this._routes;
  }

  /**
   * Directory where templates are published, relative to the baseHRef (should end with a '/')
   *
   * @type {string}
   * @attr base-dir
   * @default templates/
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

    if (!this._routes) {
      throw new Error("no routes available in the DaucusRouter component");
    }
    if (this._router) {
      throw new Error("can't define router more than once");
    }

    /** @private */
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
   * @private
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
