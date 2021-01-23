import { getPostData } from "../../1-fundamentals/fetch.js";
import { renderPost } from "../../1-fundamentals/rendering.js";
import { updatePath } from "../path.js";

/**
 * @typedef {import('../../Post').Post} Post
 */

/**
 * minimal navigation
 * wrap data fetch, rendering and url manipulation
 *
 * @param {number} id
 * @returns {Promise<void>}
 *
 * TODO: replacePath example
 */
//#region show
async function showPost(id) {
  const post = await getPostData(id);
  renderPost(post);
  updatePath(`/post/${id}`);
}
//#endregion show

// @ts-ignore
window.showPost = showPost;
