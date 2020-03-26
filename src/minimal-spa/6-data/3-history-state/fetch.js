/**
 * @param {string} id
 * @returns {Promise<PostData>}
 */

import { PostDataError } from "../rendering.js";

async function getPostData(id) {
  //#region checkInt
  const numId = parseInt(id);
  if (Number.isNaN(numId)) {
    throw new Error(`chemin invalide`);
  }
  //#endregion checkInt

  let response;
  try {
    response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  } finally {
    if (!response || !response.ok) {
      const message = !response
        ? "erreur réseaux"
        : response.status === 404
        ? "article inexistant"
        : "erreur serveur";
      throw new PostDataError(message, id);
    }
  }

  return response.json();
}

export { getPostData };
