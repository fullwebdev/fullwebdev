import { Home, Post, render } from "../rendering.js";
import { replacePath, updatePath } from "../router.js";
import { getPostData } from "../../1-fundamentals/fetch.js";

//#region routes
async function Routes() {
  return [
    { path: "/", template: Home() },
    {
      path: "/post/1",
      template: Post(await getPostData(1)),
    },
    {
      path: "/post/2",
      template: Post(await getPostData(2)),
    },
  ];
}
//#endregion routes

export async function navigate(path, redirection = false) {
  const route = (await Routes()).find(
    (r) => r.path === path
  );

  render(route.template);

  if (redirection) {
    replacePath(path);
  } else {
    updatePath(path);
  }
}
