import { html } from "lit-html";

/**
 * @param {{ branch: string; path: string; title: string; }} data
 */
export default (data) => html`<iframe
  src="https://codesandbox.io/embed/github/fullwebdev/fullwebdev/tree/${data.branch}/${data.path}?fontsize=14&module=%2FREADME.md&theme=light"
  style="width:100%; height:80vh; border:1px solid #eaecef; border-radius: 4px; overflow:hidden;"
  title="${data.title}"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
