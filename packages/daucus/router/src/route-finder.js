/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./RoutesConfig').Route} Route
 * @typedef {[string, Route] | [string]} RouteMatch
 */

/**
 *
 * @param {RoutesConfig} routes
 *
 * @returns {(path: string) => RouteMatch}
 */
export const routeFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  // TODO: better typing (Partial<Route> vs Route)
  // @ts-ignore if position is undefined ()
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
