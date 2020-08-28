const { resolve } = require("path");
const fs = require("fs-extra");
const { cpuUsage } = require("process");

/**
 * @param {string} viewPath
 * @param {string} root
 */
module.exports.getSrcPath = (viewPath, root) => {
  const relativeViewDir = viewPath.split("/").filter((d) => d);
  const viewPathRoot = relativeViewDir.splice(0, 1)[0];
  if (viewPathRoot !== "views") {
    return;
  }
  const filename = relativeViewDir.pop();
  const splittedFileName = filename.split(".");
  const extension = splittedFileName.pop();
  let filenameWithoutExtension = splittedFileName.join(".");
  if (extension !== "js") {
    return;
  }

  // TODO: additionnalPages

  const jsPagePath = resolve(root, "pages", ...relativeViewDir, filename);
  if (fs.existsSync(jsPagePath)) {
    return jsPagePath;
  } else {
    if (filenameWithoutExtension === "index") {
      filenameWithoutExtension = "README";
    }
    const mdPagePath = resolve(
      root,
      "pages",
      ...relativeViewDir,
      filenameWithoutExtension.concat(".md")
    );
    if (fs.existsSync(mdPagePath)) {
      return mdPagePath;
    }
  }
};
