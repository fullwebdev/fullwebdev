import {
  ErrorScreen,
  PostErrorScreen,
  Post,
} from "../rendering.js";
import { Home } from "../../5-routes/rendering.js";
import { getPostData } from "./fetch.js";

/**
 * @typedef {import('./Route').Route} Route
 */

/**
 * @type Route[]
 */
export const routes = [
  {
    path: "/post/error",
    renderer: PostErrorScreen,
  },
  {
    path: new RegExp("^/post/(\\w+)/?$"),
    renderer: Post,
    data: (id) => getPostData(id),
  },
  { path: "/", renderer: Home },
  //#region error
  {
    path: "/404",
    renderer: ErrorScreen,
  },
  //#endregion error
  {
    path: /.*/,
    redirect: "/",
  },
];
