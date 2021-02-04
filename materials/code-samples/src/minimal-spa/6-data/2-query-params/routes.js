import { PostErrorScreen, Post } from "../rendering.js";
import { Home } from "../../5-routes/rendering.js";
import { getPostData } from "./fetch.js";

/**
 * @typedef {import('./Route').Route} Route
 */

/**
 * @type Route[]
 */
export const routes = [
  //#region postError
  {
    path: "/post/error",
    renderer: PostErrorScreen,
  },
  //#endregion postError
  {
    path: new RegExp("^/post/(\\w+)/?$"),
    renderer: Post,
    data: (id) => getPostData(id),
  },
  { path: "/", renderer: Home },
  {
    path: /.*/,
    redirect: "/",
  },
];
