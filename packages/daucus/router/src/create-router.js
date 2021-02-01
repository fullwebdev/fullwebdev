import { Router } from "@modern-helpers/router";

export const routeFinder = (routes) => {
  const projectsNames = Object.keys(routes);
  return (path) => {
    const paths = path ? path.split("/") : [];

    if (paths[0] === "") paths.shift();
    if (paths[paths.length - 1] === "") paths.pop();

    const projectName = paths.shift();

    // TODO: handle additionnal routes
    if (!projectsNames.includes(projectName)) return [projectName];

    let acc = { ...routes[projectName] };
    for (let path of paths) {
      if (!acc.children || !acc.children[path]) return [projectName];

      if (path) {
        acc = acc.children[path];
      }
    }
    return [projectName, acc];
  };
};

/**
 *
 * @param {*} routes
 * @param {string} defaultPath
 * @param {*} routeRenderer
 */
export function createDaucusRouter(routes, defaultPath, routeRenderer) {
  const findRoute = routeFinder(routes);
  const defaultRouteMatch = findRoute(defaultPath);

  if (!defaultRouteMatch)
    throw new Error(`can't find any route for default path ${defaultPath}`);

  return new Router(async (path, options) => {
    let routeMatch = path === defaultPath ? defaultRouteMatch : findRoute(path);
    if (!routeMatch[1]) return [defaultPath, options];
    await routeRenderer(...routeMatch);
  });
}
