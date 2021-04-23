/* eslint-disable max-classes-per-file */
import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "./route-finder.js";

/**
 * @typedef {import('@daucus/core').SimpleRoutesConfig} SimpleRoutesConfig
 * @typedef {import('@daucus/core').Route} Route
 * @typedef {import("@modern-helpers/router/src/navigation").NavigationOptions} NavigationOptions
 * @typedef {[string, NavigationOptions | undefined]} Navigation
 * @typedef {import('./find-route').PositiveRouteMatch} PositiveRouteMatch
 */

export class ProjectChangeEvent extends CustomEvent {
  /**
   * @param {string} projectName
   */
  constructor(projectName) {
    super("project-change", {
      detail: { projectName },
    });
  }
}

export class RouteMatchEvent extends CustomEvent {
  /**
   * @param {PositiveRouteMatch} routeMatch
   * @param {string} base
   */
  constructor(routeMatch, base) {
    super("route-match", {
      detail: {
        projectName: routeMatch.projectName,
        route: routeMatch.route,
        templateHRef: `${base + routeMatch.projectName}/${
          routeMatch.route.templateUrl
        }`,
      },
    });
  }
}
export class DaucusRouter extends AbstractRouter {
  /**
   * @param {RoutesConfig} routes
   * @param {string} defaultPath
   * @param {string} baseDir
   */
  constructor(routes, defaultPath, baseDir) {
    super();
    /** @private */
    this._findDaucusRoute = routeFinder(routes).bind(this);
    /** @private */
    const defaultDaucusRouteMatch = this._findDaucusRoute(defaultPath);

    if (!defaultDaucusRouteMatch) {
      throw new Error(`can't find any route for default path ${defaultPath}`);
    }

    this.defaultPath = defaultPath;
    /** @private */
    this._defaultDaucusRouteMatch = defaultDaucusRouteMatch;
    this.baseDir = baseDir;
    this.currentProject = "";
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
    if (routeMatch.projectName !== this.currentProject) {
      this.currentProject = routeMatch.projectName;
      this.dispatchEvent(new ProjectChangeEvent(this.currentProject));
    }
    this.dispatchEvent(
      // @ts-ignore routeMatch.route is truthy
      new RouteMatchEvent(routeMatch, (this.base || "/") + this.baseDir)
    );
    return null;
  }
}
