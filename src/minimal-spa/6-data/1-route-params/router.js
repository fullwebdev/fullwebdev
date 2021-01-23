import { routes } from "./routes.js";
import { render } from "../../5-routes/rendering.js";
import { baseUrl } from "../../4-history-api/base-url.js";

/**
 * (orphan) simple introduction du matchRoute
 *
 * TODO: test
 *
 * @param {string} path
 */
function simpleMatchRoute(path, routes) {
  //#region simpleMatch
  const route = routes.find(route =>
    route.path instanceof RegExp
      ? route.path.test(path)
      : route.path === path
  );
  //#endregion simpleMatch
  return route;
}

//#region match
function matchRoute(path, routes) {
  for (const route of routes) {
    if (route.path instanceof RegExp) {
      const parsed = route.path.exec(path);
      if (parsed) {
        return {
          route,
          params: parsed.slice(1)
        };
      }
    } else if (path === route.path) {
      return { route };
    }
  }
}
//#endregion match

//#region navigate
async function navigate(path, redirection = false) {
  //#region callMatch
  const { route, params } = matchRoute(path, routes);
  //#endregion callMatch

  //#region redirect
  if (route.redirect) {
    navigate(route.redirect, true);
    return;
  }
  //#endregion redirect

  //#region data
  let data;
  if (route.data) {
    data = await route.data(...params);
  }
  //#endregion data

  if (redirection) {
    history.replaceState({}, "", baseUrl + path);
  } else {
    history.pushState({}, "", baseUrl + path);
  }

  render(route.renderer({ data, params }));
}
//#endregion navigate

export { matchRoute, navigate };
