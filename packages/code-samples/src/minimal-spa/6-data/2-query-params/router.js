import { PostDataError } from "../rendering.js";
import { render } from "../../5-routes/rendering.js";
import { baseUrl } from "../../4-history-api/base-url.js";
import { routes } from "./routes.js";
import { matchRoute } from "../1-route-params/router.js";

//#region navigate
//#region navigateSignature
//#region data
async function navigate(
  path,
  redirection = false,
  getParams = null
) {
  //#endregion navigateSignature

  const { route, params } = matchRoute(path, routes);

  if (route.redirect) {
    navigate(route.redirect, true);
    return;
  }

  let data;
  if (route.data) {
    try {
      data = await route.data(...params);
    } catch (e) {
      if (e instanceof PostDataError) {
        navigate("/post/error", true, {
          id: e.id,
          msg: e.message,
        });
      }
      return;
    }
  }
  //#endregion data

  //#region initialGetParams
  let initialGetParams = null;
  if (redirection && window.location.search) {
    initialGetParams = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );
  }
  //#endregion initialGetParams

  //#region mergeParams
  let queryString = "";
  if (initialGetParams || getParams) {
    const query = {
      ...initialGetParams,
      ...getParams,
    };
    queryString = "?" + new URLSearchParams(query);
  }

  //#endregion mergeParams

  //#region concatPath
  const pathWithQueryString = baseUrl + path + queryString;

  if (redirection) {
    history.replaceState({}, "", pathWithQueryString);
  } else {
    history.pushState({}, "", pathWithQueryString);
  }
  //#endregion concatPath

  render(route.renderer({ data, params }));
}
//#endregion navigate

export { navigate };
