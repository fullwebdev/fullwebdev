//#region post
function Post(post) {
  return /* HTML */ `
    <h1>Article</h1>
    <article id="post">
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    </article>
  `;
}
//#endregion post

//#region home
function Home() {
  return `
    <h1>Demo</h1>
    <article>
      <h1>par défaut</h1>
      <p>Ceci est un contenu affiché par défaut.</p>
    </article>
  `;
}
//#endregion home

//#region error
function ErrorScreen(message) {
  return /* HTML */ `
    <h1>Erreur</h1>
    <p>${message}</p>
  `;
}
//#endregion error

//#region render
function render(html) {
  const postEl = document.getElementById("content");
  postEl.innerHTML = html;
}
//#endregion render

export { Post, Home, ErrorScreen, render };
