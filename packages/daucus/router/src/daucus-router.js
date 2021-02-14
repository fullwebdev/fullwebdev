import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "./route-finder.js";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./RoutesConfig').Route} Route
 * @typedef {import("@modern-helpers/router/src/navigation").NavigationOptions} NavigationOptions
 * @typedef {[string, NavigationOptions | undefined]} Navigation
 * @typedef {import('./route-match-event').RouteMatchEvent} RouteMatchEvent
 * @typedef {import('./route-match-event').RouteMatchEventDetail} RouteMatchEventDetail
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
    if (!routeMatch.route) {
      /** @type {Navigation} */
      const redirection = [this.defaultPath, options];
      return redirection;
    }
    this.dispatchEvent(
      new CustomEvent("route-match", {
        /** @type {RouteMatchEventDetail} */
        detail: {
          projectName: routeMatch.projectName,
          route: routeMatch.route,
          templateHRef: `${
            (this.base || "/") + this.baseDir + routeMatch.projectName
          }/${routeMatch.route.templateUrl}`,
        },
      })
    );
    return null;
  }
}
