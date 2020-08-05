const path = require("path");

const monorepoRoot = path.resolve(__dirname, "..", "..");

function relativeToRepoRoot(filepath) {
  return path.relative(monorepoRoot, filepath);
}

function fromRepoRoot(...args) {
  return path.resolve(monorepoRoot, ...args);
}

module.exports = { relativeToRepoRoot, fromRepoRoot };
