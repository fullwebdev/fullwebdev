/**
 * @typedef {import('@daucus/core').SimpleRoutesConfig} SimpleRoutesConfig
 * @typedef {import('@daucus/core').I18NRoutesConfig} I18NRoutesConfig
 * @typedef {import('@daucus/core').Route} Route
 * @typedef {import('@daucus/core').LanguageCodeOrDefault} LanguageCodeOrDefault
 * @typedef {import('./find-route').RouteMatch} RouteMatch
 * @typedef {import('./find-route').FindRouteFn} FindRouteFn
 * @typedef {import('./find-route').FindI18NRouteFn} FindI18NRouteFn
 * @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig
 */

/** @type {RouteMatch} */
export const NO_ROUTE_FOUND = { projectName: "", route: null };

/** @type {import('./find-route').I18NRouteMatch} */
export const NO_I18N_ROUTE_FOUND = { projectName: "", route: null, lang: "" };

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
 * Generate a function to find routes
 *
 * @param {SimpleRoutesConfig} routes
 *
 * @returns {FindRouteFn}
 */
export const routeFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  return (/** @type {string | null} */ path) => {
    if (path === null) return NO_ROUTE_FOUND;

    const { projectName, paths } = parsePath(path);

    if (!projectsNames.includes(projectName)) return { projectName };

    const route = findRoute(routes[projectName], paths);

    return /** @type {RouteMatch} */ { projectName, route };
  };
};

// TODO: create an associated router & WC
/**
 * Generate a function to find internationalized routes
 *
 * @param {I18NRoutesConfig} routes
 *
 * @returns {FindI18NRouteFn}
 */
export const i18nRouteFinder = (routes) => {
  const projectsNames = Object.keys(routes);

  return (
    /** @type {string | null} */ path,
    /** @type {LanguageCodeOrDefault} */ lang
  ) => {
    if (path === null) return NO_I18N_ROUTE_FOUND;

    const { projectName, paths } = parsePath(path);

    if (!projectsNames.includes(projectName)) return { projectName, lang };

    /** @type {ProjectRoutesConfig | undefined} */
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
