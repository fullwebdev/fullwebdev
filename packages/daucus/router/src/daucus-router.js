import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "./route-finder.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./RoutesConfig').Route} Route
 * @typedef {import("@modern-helpers/router/src/navigation").NavigationOptions} NavigationOptions
 * @typedef {[string, NavigationOptions | undefined]} Navigation
 * @typedef {import('./DaucusRouterOutlet').DaucusRouterOutlet} DaucusRouterOutlet
 */

export class DaucusRouter extends AbstractRouter {
  /**
   * @param {RoutesConfig} routes
   * @param {string} defaultPath
   * @param {string} baseDir
   * @param {DaucusRouterOutlet} routerOutlet
   */
  constructor(routes, defaultPath, baseDir, routerOutlet) {
    super();
    this._findDaucusRoute = routeFinder(routes).bind(this);
    const defaultDaucusRouteMatch = this._findDaucusRoute(defaultPath);

    if (!defaultDaucusRouteMatch) {
      throw new Error(`can't find any route for default path ${defaultPath}`);
    }

    this.defaultPath = defaultPath;
    this._defaultDaucusRouteMatch = defaultDaucusRouteMatch;
    this.routerOutlet = routerOutlet;
    this.baseDir = baseDir;
  }

  /**
   * @param {string} path
   * @param {import("@modern-helpers/router/src/navigation").NavigationOptions} [options]
   */
  // eslint-disable-next-line class-methods-use-this
  async renderOrRedirect(path, options) {
    const routeMatch =
      path === this.defaultPath
        ? this._defaultDaucusRouteMatch
        : this._findDaucusRoute(path);
    if (!routeMatch[1]) {
      /** @type {Navigation} */
      const redirection = [this.defaultPath, options];
      return redirection;
    }
    this._renderRoute(routeMatch[0], routeMatch[1]);
    return null;
  }

  /**
   * @param {string} projectName
   * @param {Route} route
   */
  _renderRoute(projectName, route) {
    this.routerOutlet.href = `${
      (this.base || "/") + this.baseDir + projectName
    }/${route.templateUrl}`;
  }
}
