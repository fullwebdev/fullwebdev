import { getPostData } from "../1-fundamentals/fetch.js";
import { renderPost } from "../1-fundamentals/rendering.js";
import { updateUrl } from "./url.js";

/**
 * minimal navigation
 * wrap data fetch, rendering and location change
 *
 * @param {number} id
 * @returns {Promise<void>}
 */
//#region show
async function showPost(id) {
  const post = await getPostData(id);
  renderPost(post);
  updateUrl(`/post/${id}`);
}
//#endregion show

// @ts-ignore no need to add a custom Window type for this simple demo
window.showPost = showPost;
