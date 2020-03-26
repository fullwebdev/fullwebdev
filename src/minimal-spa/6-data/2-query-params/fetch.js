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
//#endregion postData

export { getPostData };
