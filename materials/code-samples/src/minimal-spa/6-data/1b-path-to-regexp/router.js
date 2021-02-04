import { pathToRegexp } from "./path-to-regexp.js";
import { render } from "../../5-routes/rendering.js";
import { baseUrl } from "../../4-history-api/base-url.js";
import { routes as routesConfig } from "./routes.js";

function matchRoute(path, routes) {
  for (const route of routes) {
    if (path === route.path) {
      return { route };
    }
    const regexp = pathToRegexp(route.path);
    const parsed = regexp.exec(path);
    if (parsed) {
      return {
        route,
        params: parsed.slice(1),
      };
    }
  }
}

// TODO: dependency injection ? (duplication with previous step)
export async function navigate(path, redirection = false) {
  const { route, params } = matchRoute(path, routesConfig);

  if (route.redirect) {
    navigate(route.redirect, true);
    return;
  }

  let data;
  if (route.data) {
    data = await route.data(...params);
  }

  if (redirection) {
    window.history.replaceState({}, "", baseUrl + path);
  } else {
    window.history.pushState({}, "", baseUrl + path);
  }

  render(route.renderer({ data, params }));
}
