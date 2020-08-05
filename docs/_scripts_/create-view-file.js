const { writeFile } = require("fs").promises;
const fs = require("fs-extra");
const path = require("path");
const { htmlToJs } = require("./html-to-js");

/**
 * @param {string} pathToSrcFile
 * @param {string} pathToRootDir
 * @param {string} pathToOutDir
 * @param {string} lang
 * @param {string} js
 */
async function writeToView(
  pathToSrcFile,
  pathToRootDir,
  pathToOutDir,
  lang,
  js
) {
  // FIXME: windows compatibility
  const relativeRoot = path.relative(pathToRootDir, pathToSrcFile);

  const splitedOutputDir = pathToOutDir.split(path.sep);
  const langDirPos = splitedOutputDir.findIndex((dir) => dir === "LANG");
  splitedOutputDir[langDirPos] = lang;

  pathToOutDir = splitedOutputDir.join(path.sep);

  const destFilePath = path
    .join(pathToOutDir, relativeRoot)
    .replace(/README\.md/, "index.md")
    .split(".")
    .slice(0, -1)
    .join(".")
    .concat(".js");
  await fs.createFile(destFilePath);
  console.log(`[build] ${destFilePath} built`);
  await writeFile(destFilePath, js, {
    encoding: "utf8",
  });
}

module.exports = { writeToView };
