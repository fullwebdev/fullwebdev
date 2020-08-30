import { html } from "lit-html";
import { getProject } from "../states/project";

// FIXME: change url

/**
 * @param {{ path: string; lang: string; }} data
 */
export default (data) => {
  const project = getProject();
  // href: https://github.com/fullwebdev/panpress-starter/edit/master/docs/pages/
  return html`<footer class="page-edit">
    <div class="edit-link">
      <a
        href="${project.repository +
        "/edit/" +
        project.branch +
        project.path +
        "/pages/" +
        data.path}"
        target="_blank"
        rel="noopener noreferrer"
        >${data.lang === "fr"
          ? "Éditer cette page sur GitHub"
          : "Edit this page on GitHub"}</a
      >
    </div>
  </footer>`;
};
