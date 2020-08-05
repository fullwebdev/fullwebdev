const globby = require("globby");
const fs = require("fs-extra");
const path = require("path");
const chokidar = require("chokidar");

async function copyFile(root, filePath, out) {
  const fullPath = path.resolve(root, filePath);
  const destFile = path.join(out, path.relative(root, fullPath));
  await fs.copy(fullPath, destFile);
  console.log(`[copy] ${destFile} created`);
}

/**
 * @param {string} root
 * @param {string | readonly string[]} glob
 * @param {string} out
 */
async function copy(root, glob, out, watch = false) {
  //TODO: watch

  if (watch) {
    console.log(`[copy] watching ${glob}`);
    const watcher = chokidar.watch(glob, { cwd: root });
    const log = console.log.bind(console);
    watcher
      .on("ready", () => log("[copy] Initial scan complete. Ready for changes"))
      .on("add", async (filePath) => {
        log(`[copy] File ${filePath} has been added`);
        await copyFile(root, filePath, out);
      })
      .on("change", async (filePath) => {
        log(`[copy] File ${filePath} has been changed`);
        await copyFile(root, filePath, out);
      })
      .on("unlink", (filePath) => {
        // TODO
      })
      .on("error", (error) => log(`Watcher error: ${error}`));
  } else {
    const paths = await globby(glob, { absolute: true, cwd: root });
    return Promise.all(
      paths.map(async (filePath) => {
        const stat = await fs.lstat(filePath);
        if (stat.isFile() && path.extname(filePath) === ".js") {
          await copyFile(root, filePath, out);
        } else {
          console.warn(`[copy] wrong file: ${filePath}`);
        }
      })
    );
  }
}

module.exports = { copy };
