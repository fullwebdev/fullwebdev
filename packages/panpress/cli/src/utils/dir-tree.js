const fs = require("fs");
const path = require("path");

/**
 * @typedef {import('./tree-node').DirTree} DirTree
 */

/**
 * @param {string} root
 * @param {string} ext
 *
 * @returns {DirTree}
 */
function readDirTree(root, ext) {
  const recurse = (base) => {
    /**
     * @type {Partial<DirTree>}
     */
    const fileArray = {};

    const files = fs.readdirSync(base);

    for (const file of files) {
      const filePath = `${base}${path.sep}${file}`;
      const fileInfo = {};

      var stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        Object.assign(fileInfo, recurse(filePath));
      }

      if (stat.isFile() && file.substr(-ext.length) === ext) {
        fileInfo.name = file;
      }

      fileArray[file] = fileInfo;
    }

    return fileArray;
  };

  const rslt = /** @type {DirTree} */ (recurse(root));
  return rslt;
}

module.exports = { readDirTree };
