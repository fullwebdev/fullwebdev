import { Post } from "../rendering.js";
import { getPostData } from "../../1-fundamentals/fetch.js";
import { Home } from "../../5-routes/rendering.js";

/**
 * @typedef {import('./Route').Route} Route
 */

/**
 * @type Route[]
 */
export const routes = [
  //#region post
  {
    // path: "/post/:id",
    //#region postPath
    path: new RegExp("^/post/(\\w+)/?$"),
    //#endregion postPath
    renderer: Post,
    data: (id) => getPostData(id),
  },
  //#endregion post
  { path: "/", renderer: Home },
  //#region default
  {
    // path: "*"
    path: /.*/,
    redirect: "/",
  },
  //#endregion default
];
