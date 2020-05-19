/**
 * @typedef {import('../Post').Post} Post
 */

/**
 * Fetch post description from the REST API
 *
 * @param {number} id
 * @returns {Promise<Post>}
 */
//#region getPostData
async function getPostData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}
//#endregion getPostData

export { getPostData };
