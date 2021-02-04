import { resolve, dirname, extname, basename } from "path";
import { promises as asyncFs } from "fs";
import { findUp } from "../fs/path.js";
import { CONFIG_FILE_NAME } from "./defaultConfig.js";
import * as daucusConfig from "./daucus-config.js";

/** @typedef {import('./DaucusConfig').DaucusConfig} DaucusConfig */
/** @typedef {import('./WorkSpace').WorkSpace} IWorkSpace */

/**
 *
 * @param {string} path
 */
async function loadConfigFile(path) {
  const fileStat = await asyncFs.stat(path);
  if (!fileStat.isFile()) {
    console.warn(`no configuration file found at ${path}`);
    return {};
  }

  const fileExt = extname(path);

  if (fileExt === ".json") {
    try {
      const content = await asyncFs.readFile(path, { encoding: "utf-8" });
      return JSON.parse(content);
    } catch (e) {
      console.warn(`${path} wad ignored has it isn't a valid json file`);
    }
  } else if (fileExt.match(/\.[mc]?js/)) {
    try {
      const configModule = await import(path);
      return configModule.default || {};
    } catch (e) {
      console.warn(`ignoring ${path} has it isn't a valid configuration file`);
    }
  } else {
    console.warn(
      `ignoring ${path} has ${fileExt} isn't associated to json or javascript`
    );
  }

  return {};
}

/**
 * @implements IWorkSpace
 */
export class WorkSpace {
  // TODO: move file loading to an async wrapper

  /**
   * create a
   * @param {string | Partial<DaucusConfig>} [pathOrConfig] configuration object, or the path to a configuration file (absolute or relative CWD)
   * @param {string} [root] workspace's root directory
   */
  constructor(pathOrConfig = {}, root = "") {
    let configFileLoading;
    let config = {};

    if (typeof pathOrConfig === "string") {
      const configFilePath = resolve(pathOrConfig);
      this.root = root ? resolve(root) : dirname(configFilePath);
      configFileLoading = loadConfigFile(configFilePath);
    } else {
      config = pathOrConfig;
      this.root = resolve(root);
    }

    this._configPromise = (
      configFileLoading || Promise.resolve(config)
    ).then((loadedConfig) =>
      daucusConfig.makeAllPathsAbsolute(
        daucusConfig.create(loadedConfig),
        this.root
      )
    );
  }

  getConfig() {
    return this._configPromise;
  }
}

/**
 * find the workspace associated witj closest parent directory
 * containing a daucus config file or being a git repo
 *
 * @param {string} [from] starting point (CWD by default)
 */
export function findWorkspace(from = "") {
  const startingDir = resolve(from);

  const fileFound = findUp(
    [
      ...daucusConfig.CONFIG_FILE_EXTENSIONS.map(
        (ext) => CONFIG_FILE_NAME + ext
      ),
      ".git",
    ],
    startingDir
  );

  if (fileFound === null) {
    throw new Error("can't find any daucus config file or git reprository");
  }

  const config = basename(fileFound) === ".git" ? {} : fileFound;

  return new WorkSpace(config, dirname(fileFound));
}
