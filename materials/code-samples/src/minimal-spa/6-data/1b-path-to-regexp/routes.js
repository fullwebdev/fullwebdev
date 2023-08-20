import { Post } from "../rendering.js";
import { Home } from "../../5-routes/rendering.js";
import { getPostData } from "../../1-fundamentals/fetch.js";

/**
 * @typedef {import('./Route').Route} Route
 */

/**
 * @type Route[]
 */
export const routes = [
  {
    path: "/post/:id",
    renderer: Post,
    data: (id) => getPostData(id),
  },
  { path: "/", renderer: Home },
  {
    path: "*",
    redirect: "/",
  },
];
