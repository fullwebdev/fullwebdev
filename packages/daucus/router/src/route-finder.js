/**
 * @typedef {import('./RoutesConfig').RoutesConfig} RoutesConfig
 * @typedef {import('./RoutesConfig').I18NRoutesConfig} I18NRoutesConfig
 * @typedef {import('./RoutesConfig').Route} Route
 * @typedef {import('./find-route').RouteMatch} RouteMatch
 * @typedef {import('./find-route').FindRouteFn} FindRouteFn
 * @typedef {import('./find-route').FindI18NRouteFn} FindI18NRouteFn
 * @typedef {import('./RoutesConfig').ProjectRoutesConfig} ProjectRoutesConfig
 */

/**
 * @param {string} path
 */
function parsePath(path) {
  const paths = path ? path.split("/") : [];

  if (paths[0] === "") paths.shift();
  if (paths[paths.length - 1] === "") paths.pop();

  const projectName = paths.shift() || "";

  return { projectName, paths };
}

/**
 * @param {ProjectRoutesConfig} routes
 * @param {string[]} paths
 */
function findRoute(routes, paths) {
  let acc = { ...routes };
  for (const routeName of paths) {
    if (!acc.children || !acc.children[routeName]) return null;

    if (routeName) {
      acc = acc.children[routeName];
    }
  }
  return acc;
}

/**
 *
 * @param {RoutesConfig} routes
 *
 * @returns {FindRouteFn}
 */
export const routeFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  return (/** @type {string} */ path) => {
    const { projectName, paths } = parsePath(path);

    if (!projectsNames.includes(projectName)) return { projectName };

    const route = findRoute(routes[projectName], paths);

    return /** @type {RouteMatch} */ { projectName, route };
  };
};

// TODO: create an associated router & WC
/**
 *
 * @param {I18NRoutesConfig} routes
 *
 * @returns {FindI18NRouteFn}
 */
export const i18nRouteFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  return (/** @type {string} */ path, /** @type {string} */ lang) => {
    const { projectName, paths } = parsePath(path);

    if (!projectsNames.includes(projectName)) return { projectName, lang };

    /** @type {ProjectRoutesConfig} */
    let routesConfigForLang;
    let langUsed = lang;
    if (!lang || !routes[projectName][lang]) {
      routesConfigForLang = routes[projectName].__;
      langUsed = "__";
    } else {
      routesConfigForLang = routes[projectName][lang];
    }

    if (!routesConfigForLang) return { projectName, lang: langUsed };

    const route = findRoute(routesConfigForLang, paths);

    return { projectName, route, lang: langUsed };
  };
};
