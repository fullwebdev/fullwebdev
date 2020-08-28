const { spawnSync } = require("child_process");
const path = require("path");

/**
 * @param {string} filePath
 *
 * from Vuepress
 * https://github.com/vuejs/vuepress/blob/369c315/packages/%40vuepress/plugin-last-updated/index.js#L22-L32
 */
module.exports.getGitLastUpdatedTimeStamp = function (filePath) {
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
};
