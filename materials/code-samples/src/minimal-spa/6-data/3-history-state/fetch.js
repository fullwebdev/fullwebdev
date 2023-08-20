/* eslint-disable no-unsafe-finally */
/**
 * @param {string} id
 * @returns {Promise<PostData>}
 */

import { PostDataError } from "../rendering.js";

async function getPostData(id) {
  //#region checkInt
  const numId = parseInt(id, 10);
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
      let message;
      if (!response) {
        message = "erreur réseaux";
      } else if (response.status === 404) {
        message = "article inexistant";
      } else {
        message = "erreur serveur";
      }

      throw new PostDataError(message, id);
    }
  }

  return response.json();
}

export { getPostData };
