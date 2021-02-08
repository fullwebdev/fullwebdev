import { DaucusRouter } from "./daucus-router.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./DaucusRouterOutlet').DaucusRouterOutlet} DaucusRouterOutlet
 */

export class DaucusRouterWC extends HTMLElement {
  constructor() {
    super();
    this._connected = false;
  }

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

    /** @type {DaucusRouterOutlet | null} */
    const outlet = this.querySelector(this.outletTagName);

    if (!outlet) throw new Error("no routler outlet found");

    this._router = new DaucusRouter(
      this._routes,
      this.defaultPath,
      this.baseDir,
      outlet
    );

    this._router.run(this);
  }

  disconnectedCallback() {
    this._connected = false;
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
