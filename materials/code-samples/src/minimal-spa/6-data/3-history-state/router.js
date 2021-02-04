import { PostDataError } from "../rendering.js";
import { routes } from "./routes.js";
import { render } from "../../5-routes/rendering.js";
import { baseUrl } from "../../4-history-api/base-url.js";
import { matchRoute } from "../1-route-params/router.js";

//#region navigate
//#region navigateSignature
export async function navigate(
  path,
  state = {},
  redirection = false,
  getParams = null
) {
  //#endregion navigateSignature
  const { route, params } = matchRoute(path, routes);

  if (route.redirect) {
    navigate(route.redirect, state, true);
    return;
  }

  //#region data
  let data;
  if (route.data) {
    try {
      data = await route.data(...params);
    } catch (e) {
      if (e instanceof PostDataError) {
        navigate("/post/error", {}, true, {
          id: e.id,
          msg: e.message,
        });
      } else {
        navigate("/404", { errorMessage: e.message }, true);
      }
      return;
    }
  }
  //#endregion data

  let initialGetParams = null;
  if (redirection && window.location.search) {
    initialGetParams = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );
  }

  let queryString = "";
  if (initialGetParams || getParams) {
    const query = {
      ...initialGetParams,
      ...getParams,
    };
    queryString = `?${new URLSearchParams(query)}`;
  }

  const pathWithQueryString = baseUrl + path + queryString;

  //#region pushState
  if (redirection) {
    window.history.replaceState(
      state,
      "",
      pathWithQueryString
    );
  } else {
    window.history.pushState(
      state,
      "",
      pathWithQueryString
    );
  }
  //#endregion pushState

  render(route.renderer({ data, params }));
}
//#endregion navigate
