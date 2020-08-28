const { relativeToRepoRoot } = require("./repo-utils");
const { getLang } = require("../utils/lang");
const { getConfig } = require("../utils/config");
const { getGitLastUpdatedTimeStamp } = require("../utils/last-update");

/**
 * @param {string} filePath
 */
function githubURL(filePath) {
  const submodule = Object.values(
    getConfig().repository.submodules
  ).find((value) => filePath.includes(value.path));
  const repoUrl = submodule ? `${submodule[1]}` : getConfig().repository.url;
  return `${repoUrl}/edit/${getConfig().repository.branch}/${relativeToRepoRoot(
    filePath
  )}`;
}

/**
 * @param {string} filePath
 */
function pageFooter(filePath, editLink = true) {
  const lastUpdateTimeStamp = getGitLastUpdatedTimeStamp(filePath);

  const lang = getLang(filePath);

  let lastUpdate;
  if (lastUpdateTimeStamp) {
    lastUpdate = new Date(lastUpdateTimeStamp).toLocaleString(lang);
  }

  return /* HTML */ `
    <footer class="page-edit">
      ${editLink
        ? `<div class="edit-link">
          <a href="${githubURL(
            filePath
          )}" target="_blank" rel="noopener noreferrer"
            >${
              lang === "fr"
                ? "Éditer cette page sur GitHub"
                : "Edit this page on GitHub"
            }</a
          >
        </div>`
        : ""}
      ${lastUpdate
        ? `<div class="last-updated"><span class="prefix">${
            lang === "fr" ? "Dernière mise-à-jour" : "Last Updated"
          }:</span> <span class="time">${lastUpdate}</span></div>`
        : ""}
    </footer>
  `;
}

/**
 * @param {string} html
 * @param {string} pathToSrcFile
 */
function htmlToJs(html, pathToSrcFile, editLink = true) {
  const cleanHtml = html
    .split("`")
    .map((text, i) => (i % 2 === 0 ? text : text.replace(/\$/g, "\\$")))
    .join("\\`");
  return `
import {html} from "lit-html";

export default () => html\`
  ${cleanHtml}

  ${pageFooter(pathToSrcFile, editLink)}
\`;
`;
}

module.exports = { htmlToJs };
