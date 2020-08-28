import { html } from "lit-html";

// FIXME: change url

/**
 * @param {{ path: string; lang: string; }} data
 */
export default (data) => html`<footer class="page-edit">
  <div class="edit-link">
    <a
      href="https://github.com/fullwebdev/panpress-starter/edit/master/docs/pages/${data.path}"
      target="_blank"
      rel="noopener noreferrer"
      >${data.lang === "fr"
        ? "Éditer cette page sur GitHub"
        : "Edit this page on GitHub"}</a
    >
  </div>
</footer>`;
