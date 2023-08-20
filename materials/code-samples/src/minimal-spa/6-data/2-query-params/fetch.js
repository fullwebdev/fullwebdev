/* eslint-disable no-unsafe-finally */
import { PostDataError } from "../rendering.js";

//#region postData
async function getPostData(id) {
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
//#endregion postData

export { getPostData };
