import { join, dirname, parse, isAbsolute, resolve } from "path";
import { existsSync, mkdirSync, promises as asyncFs } from "fs";
import { fileURLToPath } from "url";

/**
 * find the first parent directory containing a certain file or directory
 * @param {string[]} names name of the files or directory to find
 * @param {string} from path to the directory to start from
 * @returns {string | null} path to the directory (null if none was found)
 */
export function findUp(names, from) {
  const { root } = parse(from);

  let currentDir = from;
  while (currentDir && currentDir !== root) {
    for (const name of names) {
      const possiblePath = join(currentDir, name);
      if (existsSync(possiblePath)) {
        return possiblePath;
      }
    }

    currentDir = dirname(currentDir);
  }

  return null;
}

export const absoluteFrom =
  (/** @type {string} */ rootPath) => (/** @type {string} */ path) => {
    if (isAbsolute(path)) {
      return path;
    }
    return resolve(rootPath, path);
  };

/**
 * @param {{ url: string | import("url").URL; }} importMeta
 */
export function esmFileName(importMeta) {
  return fileURLToPath(importMeta.url);
}

/**
 * @param {{ url: string | import("url").URL; }} importMeta
 */
export function esmDirName(importMeta) {
  return dirname(esmFileName(importMeta));
}

/**
 * @param {import("fs").PathLike} path
 */
export function ensureDirSync(path, recursive = true) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive });
  }
}

/**
 * @param {import("fs").PathLike} path
 */
export async function ensureDir(path, recursive = true) {
  if (!existsSync(path)) {
    return asyncFs.mkdir(path, { recursive });
  }
}
