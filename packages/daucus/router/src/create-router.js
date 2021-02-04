import { Router } from "@modern-helpers/router";

/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {[string, any] | [string]} RouteMatch
 * @typedef {import('./RoutesConfig').Route} Route
 */

/**
 *
 * @param {RoutesConfig} routes
 *
 * @returns {(path: string) => RouteMatch}
 */
export const routeFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  return (/** @type {string} */ path) => {
    const paths = path ? path.split("/") : [];

    if (paths[0] === "") paths.shift();
    if (paths[paths.length - 1] === "") paths.pop();

    const projectName = paths.shift() || "";

    // TODO: handle additionnal routes
    if (!projectsNames.includes(projectName)) return [projectName];

    let acc = { ...routes[projectName] };
    for (const routeName of paths) {
      if (!acc.children || !acc.children[routeName]) return [projectName];

      if (routeName) {
        acc = acc.children[routeName];
      }
    }

    return /** @type {RouteMatch} */ [projectName, acc];
  };
};

/**
 *
 * @param {RoutesConfig} routes
 * @param {string} defaultPath
 * @param {(name:string, options: Partial<Route>) => any} routeRenderer
 */
export function createDaucusRouter(routes, defaultPath, routeRenderer) {
  const findRoute = routeFinder(routes);
  const defaultRouteMatch = findRoute(defaultPath);

  if (!defaultRouteMatch)
    throw new Error(`can't find any route for default path ${defaultPath}`);

  return new Router(async (path, options) => {
    const routeMatch =
      path === defaultPath ? defaultRouteMatch : findRoute(path);
    if (!routeMatch[1]) return [defaultPath, options];
    await routeRenderer(routeMatch[0], routeMatch[1]);
  });
}
