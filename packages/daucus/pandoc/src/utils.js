import { dirname } from "path";
import { fileURLToPath } from "url";

/**
 * @param {ImportMeta} importMeta
 */
export function esmFileName(importMeta) {
  return fileURLToPath(importMeta.url);
}

/**
 * @param {ImportMeta} importMeta
 */
export function esmDirName(importMeta) {
  return dirname(esmFileName(importMeta));
}
