import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "./route-finder.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./RoutesConfig').Route} Route
 * @typedef {import("@modern-helpers/router/src/navigation").NavigationOptions} NavigationOptions
 * @typedef {[string, NavigationOptions | undefined]} Navigation
 * @typedef {CustomEvent<RouteMatchEventDetail>} RouteMatchEvent
 * @typedef {{ projectName: string, route: Route, templateHRef: string}} RouteMatchEventDetail
 */

export class DaucusRouter extends AbstractRouter {
  /**
   * @param {RoutesConfig} routes
   * @param {string} defaultPath
   * @param {string} baseDir
   */
  constructor(routes, defaultPath, baseDir) {
    super();
    this._findDaucusRoute = routeFinder(routes).bind(this);
    const defaultDaucusRouteMatch = this._findDaucusRoute(defaultPath);

    if (!defaultDaucusRouteMatch) {
      throw new Error(`can't find any route for default path ${defaultPath}`);
    }

    this.defaultPath = defaultPath;
    this._defaultDaucusRouteMatch = defaultDaucusRouteMatch;
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
    this.dispatchEvent(
      new CustomEvent("route-match", {
        /** @type {RouteMatchEventDetail} */
        detail: {
          projectName: routeMatch[0],
          route: routeMatch[1],
          templateHRef: `${(this.base || "/") + this.baseDir + routeMatch[0]}/${
            routeMatch[1].templateUrl
          }`,
        },
      })
    );
    return null;
  }
}
