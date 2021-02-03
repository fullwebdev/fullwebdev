import { createDaucusRouter } from "./create-router.js";
import { DaucusRouterOutlet } from "./DaucusRouterOutlet.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 */
export class DaucusRouter extends HTMLElement {
  constructor() {
    super();
    this._connected = false;
  }

  /**
   * @type {DaucusRouterOutlet | null}
   */
  get outlet() {
    return /** @type {DaucusRouterOutlet | null} */ this.querySelector(
      this.outletTagName
    );
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
    this._createRouter();
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

  _createRouter() {
    if (this._routes && !this._router && this._connected) {
      this._router = createDaucusRouter(
        this._routes,
        this.defaultPath,
        (projectName, route) => {
          if (!this.outlet) {
            console.warn(
              `${route.path} can't be rendered without a daucus-router-outlet element`
            );
            return;
          }
          this.outlet.href =
            (this._router.base || "/") +
            this.baseDir +
            projectName +
            "/" +
            route.templateUrl;
        }
      );
      this._router.run(this);
    }
  }

  connectedCallback() {
    this.upgradeProperty("routes");
    this.upgradeProperty("defaultPath");
    this._connected = true;
    this._createRouter();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  /**
   *
   * @param {string} prop
   */
  upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      // @ts-ignore
      let value = this[prop];
      // @ts-ignore
      delete this[prop];
      // @ts-ignore
      this[prop] = value;
    }
  }
}
