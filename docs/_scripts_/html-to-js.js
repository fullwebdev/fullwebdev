const path = require("path");
const { spawnSync } = require("child_process");
const fs = require("fs-extra");
const { relativeToRepoRoot } = require("./repo-utils");

/**
 * @type {[string, string][]}
 *
 * TODO: extract from config
 */
const submodules = [
  ["packages/livre-fr", "https://github.com/noelmace/livre-web-apps"],
  ["packages/benchmark", "https://github.com/fullwebdev/benchmark"],
];

/**
 * @param {string} filePath
 *
 * from Vuepress
 * https://github.com/vuejs/vuepress/blob/369c315/packages/%40vuepress/plugin-last-updated/index.js#L22-L32
 */
function getGitLastUpdatedTimeStamp(filePath) {
  let lastUpdated;
  try {
    lastUpdated =
      parseInt(
        spawnSync(
          "git",
          ["log", "-1", "--format=%at", path.basename(filePath)],
          { cwd: path.dirname(filePath) }
        ).stdout.toString("utf-8")
      ) * 1000;
  } catch (e) {
    /* do not handle for now */
  }
  return lastUpdated;
}

/**
 * @param {string} filePath
 * @param {[string, string][]} submodules
 */
function githubURL(filePath, submodules = []) {
  const submodule = submodules.find(([dir]) => filePath.includes(dir));
  // FIXME: should not be specific to fullwebdev
  const repoUrl = submodule
    ? `${submodule[1]}`
    : `https://github.com/fullwebdev/fullwebdev`;
  return `${repoUrl}/edit/master/${relativeToRepoRoot(filePath)}`;
}

/**
 * @param {string} filePath
 */
function pageFooter(filePath, editLink = true) {
  const lastUpdateTimeStamp = getGitLastUpdatedTimeStamp(filePath);

  const langExecution = /\/(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)\//.exec(
    filePath
  );
  const lang = (langExecution && langExecution[1]) || "en";

  let lastUpdate;
  if (lastUpdateTimeStamp) {
    lastUpdate = new Date(lastUpdateTimeStamp).toLocaleString(lang);
  }

  return /* HTML */ `
    <footer class="page-edit">
      ${editLink
        ? `<div class="edit-link">
          <a href="${githubURL(
            filePath,
            submodules
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
  return `
import {html} from "lit-html";

export default () => html\`
  ${html.replace(/`/g, "\\`")}
  ${pageFooter(pathToSrcFile, editLink)}
\`;
`;
}

module.exports = { htmlToJs };
