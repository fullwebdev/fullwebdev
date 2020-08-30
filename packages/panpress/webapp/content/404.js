import { html } from "lit-html";

export default ({ lang }) => html`<div class="theme-default-content">
  <h1>404</h1>
  <blockquote>
    ${lang === "fr"
      ? "Ah, ce lien ne fonctionne pas apparemment."
      : "Oh dear, this link isn’t working."}
  </blockquote>
  <a href="/" class="router-link-active">
    ${lang === "fr" ? "Revenir à l'accueil." : "Take me home."}
  </a>
</div>`;
