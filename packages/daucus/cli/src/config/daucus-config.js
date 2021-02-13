import { defaultConfig } from "./defaultConfig.js";
import { absoluteFrom } from "../fs/path.js";

/** @typedef {import('./DaucusConfig').DaucusConfig} DaucusConfig */

export const CONFIG_FILE_EXTENSIONS = [".json", ".js", ".mjs", ".cjs"];

/**
 * add default values to partial config
 * @private
 * @param {Partial<DaucusConfig>} configJson
 * @returns {DaucusConfig}
 */
function setDefaults(configJson) {
  return {
    ...defaultConfig,
    ...configJson,
  };
}

/**
 * create a valid configuration object
 * @param {Partial<DaucusConfig>} params
 */
export function create(params = {}) {
  return setDefaults(params);
}

/**
 * convert all paths in config to absolute paths
 * @param {DaucusConfig} config
 * @param {string} [from]
 */
export function makeAllPathsAbsolute(config, from = process.cwd()) {
  // TODO: something smarter to avoid forgetting anything
  // maybe move to workspace

  const absolute = absoluteFrom(from);
  const rslt = {};
  if (config.output) {
    rslt.output = absolute(config.output);
  }
  if (config.defaultCompiler) {
    rslt.defaultCompiler = config.defaultCompiler;
  }
  if (config.htmlMinifierOptions) {
    rslt.htmlMinifierOptions = config.htmlMinifierOptions;
  }
  if (config.i18n !== undefined) {
    rslt.i18n = config.i18n;
  }

  if (config.projects) {
    rslt.projects = Object.fromEntries(
      Object.entries(config.projects).map(([name, project]) => [
        name,
        {
          ...project,
          root: absolute(project.root),
        },
      ])
    );
  }
  return rslt;
}
