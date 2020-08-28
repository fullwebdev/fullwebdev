const fs = require("fs");

/**
 * @typedef {import('./config-file').Config} Config
 */

/**
 * @type {Config}
 */
let config;

function getConfig() {
  if (!config) {
    throw new Error("can't access configuration");
  }
  return config;
}

function readConfig(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error(`${filePath} does not exist`);
  }
  /**
   * @type {Partial<Config>}
   */
  let configJson = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));

  for (const entry of configJson.additionnalPages) {
    if (
      !entry ||
      !entry.src ||
      !fs.existsSync(entry.src) ||
      !entry.dest ||
      (entry.extract && typeof entry.extract !== "boolean") ||
      (entry.base &&
        (typeof entry.base !== "string" || !fs.existsSync(entry.base)))
    ) {
      throw new Error(`invalid additionnalPages option in ${filePath}`);
    }
  }

  if (!configJson.repository || typeof configJson.repository.url !== "string") {
    throw new Error(`missing repository.url option in ${filePath}`);
  }

  if (
    !configJson.environments ||
    !configJson.environments.prod ||
    !configJson.environments.prod.host
  ) {
    configJson.environments = { prod: { host: null } };
  }

  if (!configJson.repository.root) {
    configJson.repository.root = process.cwd();
  }

  if (!configJson.repository.branch) {
    configJson.repository.branch = "master";
  }

  if (!configJson.repository.submodules) {
    configJson.repository.submodules = {};
  }

  config = /** @type {Config} */ (configJson);
  console.debug(`config set to:`);
  console.debug(JSON.stringify(config, null, 2));
}

module.exports = { getConfig, readConfig };
