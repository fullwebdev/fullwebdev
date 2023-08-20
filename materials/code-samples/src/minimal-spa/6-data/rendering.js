/**
 * @typedef {import('../Post').Post} PostData
 */

function Post({ data: post }) {
  return /* HTML */ `
    <h1>Article</h1>
    <article id="post">
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    </article>
  `;
}

//#region postDataError
class PostDataError extends Error {
  constructor(message, id) {
    super(message);
    this.id = id;
  }
}
//#endregion postDataError

//#region error
function ErrorScreen() {
  const message =
    (window.history.state &&
      window.history.state.errorMessage) ||
    "Route introuvable";
  return `
    <h1>Erreur</h1>
    <p>${message}</p>
  `;
}
//#endregion error

//#region postError
function PostErrorScreen() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const postId =
    params.get("id") || "identifiant introuvable";
  const message = params.get("msg");
  return `
    <h1>Article introuvable</h1>
    <p>Id: ${postId}</p>
    <p>${message}</p>
  `;
}
//#endregion postError

export {
  PostErrorScreen,
  ErrorScreen,
  PostDataError,
  Post,
};
