import { getPostData } from "./fetch.js";
import { renderPost } from "./rendering.js";

/**
 * minimal navigation
 * wrap data fetch and rendering
 *
 * @param {number} id
 * @returns {Promise<void>}
 */
//#region show
async function showPost(id) {
  const post = await getPostData(id);
  renderPost(post);
}
//#endregion show

window.showPost = showPost;
