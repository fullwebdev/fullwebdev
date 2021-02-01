import { createDaucusRouter } from "./create-router.js";

export class DaucusRouter extends HTMLElement {
  constructor() {
    super();
    this._connected = false;
  }

  set routes(routes) {
    this._routes = routes;
  }

  get outlet() {
    return this.getElementsByTagName(this.outletTagName)[0];
  }

  get routes() {
    return this._routes;
  }

  get defaultPath() {
    if (!this.hasAttribute("default-path")) return "/docs/";
    return this.getAttribute("default-path");
  }

  set defaultPath(path) {
    return this.setAttribute("default-path", path);
  }

  get outletTagName() {
    if (!this.hasAttribute("outlet-tag")) return "daucus-router-outlet";
    return this.getAttribute("outlet-tag");
  }

  set outletTagName(tagName) {
    this.setAttribute(tagName);
  }

  set routes(routes) {
    this._routes = routes;
    this._createRouter();
  }

  get baseDir() {
    if (!this.hasAttribute("base-dir")) return "templates/";
    return this.getAttribute("base-dir");
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

  upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}
