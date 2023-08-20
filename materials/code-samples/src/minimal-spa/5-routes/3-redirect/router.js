import {
  Home,
  ErrorScreen,
  Post,
  render,
} from "../rendering.js";
import { updatePath, replacePath } from "../router.js";
import { getPostData } from "../../1-fundamentals/fetch.js";

//#region errorRoute
const errorRoute = (message) => ({
  path: "/404",
  renderer: ErrorScreen,
  data: () => message,
});
//#endregion errorRoute

//#region routes
const defaultRoute = { path: "/", renderer: Home };

const routes = [
  defaultRoute,
  //#region postRoutes
  {
    path: "/post/1",
    renderer: Post,
    data: () => getPostData(1),
  },
  {
    path: "/post/2",
    renderer: Post,
    data: () => getPostData(2),
  },
  //#endregion postRoutes
];
//#endregion routes

//#region navigate
async function navigate(path, redirection = false) {
  let route = routes.find((r) => r.path === path);
  let shouldRedirect = redirection;

  if (route === undefined) {
    if (path.startsWith("/post/")) {
      route = errorRoute("Cet article n'existe pas");
    } else {
      route = defaultRoute;
    }
    shouldRedirect = true;
  }

  let data;
  if (route.data) {
    data = await route.data();
  }

  render(route.renderer(data));

  if (shouldRedirect) {
    replacePath(route.path);
  } else {
    updatePath(route.path);
  }
}
//#endregion navigate

export { navigate, routes };
