import { Home, Post, render } from "../rendering.js";
import { replacePath, updatePath } from "../router.js";
import { getPostData } from "../../1-fundamentals/fetch.js";

//#region routes
const routes = [
  { path: "/", renderer: Home },
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
];
//#endregion routes

//#region navigate
async function navigate(path, redirection = false) {
  const route = routes.find((r) => r.path === path);

  let data;
  if (route.data) {
    data = await route.data();
  }

  render(route.renderer(data));

  if (redirection) {
    replacePath(path);
  } else {
    updatePath(path);
  }
}
//#endregion navigate

export { navigate };
