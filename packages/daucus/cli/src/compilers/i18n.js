import { promises as asyncFs } from "fs";
import * as path from "path";

export const ISO639_1_REGEXP =
  /^(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)$/i;

/**
 * @typedef {import('@daucus/core').LanguageCode} LanguageCode
 */

/**
 * Get the languages supported by a Daucus project
 * based on directories names
 *
 * @param {import("fs").PathLike} root - path to the project's root directory
 *
 * @returns {Promise<LanguageCode[]>}
 */
export async function i18nSubdirs(root) {
  const dirs = await asyncFs.readdir(root, { withFileTypes: true });
  if (dirs.length < 1) return [];
  /** @type {LanguageCode[]} */
  const langCodes = [];
  for (const dir of dirs) {
    if (dir.isDirectory()) {
      if (!dir.name.match(ISO639_1_REGEXP)) {
        return [];
      }
      // @ts-ignore string is a LanguageCode if it match the regexp
      langCodes.push(dir.name);
    }
  }
  return langCodes;
}

/**
 * @param {string} filePath
 * @param {string} root
 *
 * @returns {LanguageCode | ""}
 */
export function getLangFromPath(filePath, root) {
  const relativeFilePath = path.relative(root, filePath);
  const rootDirName = /** @type {LanguageCode} */ (
    relativeFilePath.split(path.sep)[0]
  );
  if (!rootDirName || !rootDirName.match(ISO639_1_REGEXP)) {
    return "";
  }
  return rootDirName;
}
