const path = require("path");
const { getConfig } = require("../utils/config");

function relativeToRepoRoot(filepath) {
  return path.relative(getConfig().repository.root, filepath);
}

function fromRepoRoot(...args) {
  return path.resolve(getConfig().repository.root, ...args);
}

module.exports = { relativeToRepoRoot, fromRepoRoot };
