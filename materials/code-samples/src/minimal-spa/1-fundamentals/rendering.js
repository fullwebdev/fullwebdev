/**
 * @typedef {import('../Post').Post} Post
 */

/**
 * Create and render HTML from a post descrption in a #post element
 * minimal one-time rendering
 *
 * @param {Post} post post description (from the REST API)
 */
//#region render
function renderPost(post) {
  const postHtml = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;
  const postEl = document.getElementById("post");
  postEl.innerHTML = postHtml;
}
//#endregion render

export { renderPost };
