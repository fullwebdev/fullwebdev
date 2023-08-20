import { router } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";
import { Home, Post, NotFound } from "./views/index.js";
import { getPostData } from "../1-fundamentals/fetch.js";
import { baseUrl } from "../4-history-api/base-url.js";
import { getPath } from "../5-routes/router.js";

//#region router
const routes = {
  home: Home,
  post: Post,
  notFound: NotFound,
};

const routerView = router(".router-view", routes);
//#endregion router

//#region navigate
const navigate = (route, data) => async (e) => {
  e.preventDefault();
  let path = route;
  let newRoute = route;
  let params = data;
  if (route === "post") {
    try {
      params = await getPostData(data);
      path = `${route}/${data}`;
    } catch {
      newRoute = "notFound";
    }
  } else if (!Object.keys(routes).includes(route)) {
    newRoute = "notFound";
  }

  routerView.update(newRoute, params);
  window.history.pushState({}, "", `${baseUrl}/${path}`);
};
//#endregion navigate

//#region popstate
window.onpopstate = () => {
  const [, path, data] = getPath().split("/");
  navigate(path, data);
};
//#endregion popstate

export { routerView, navigate };
