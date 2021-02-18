import { promises as asyncFs } from "fs";
import { dirname, resolve } from "path";
import { ensureDir } from "./path.js";

/**
 * @param {string} rootDir
 * @param {string} name
 * @param {import("../routing/Route").RoutesConfig} object
 * @param {string} objectName
 * @param {string} type
 */
export async function writeJSObject(rootDir, name, object, objectName, type) {
  const content = `
/**
 * @type {${type}}
 */
const ${objectName} = ${JSON.stringify(object, null, 2)}

export default ${objectName};
`;
  await asyncFs.writeFile(resolve(rootDir, name), content, {
    encoding: "utf8",
  });
}

/**
 * @param {string} rootDir
 * @param {string} relativeDir
 * @param {string} content
 */
export async function writeCompiledFile(rootDir, relativeDir, content) {
  if (!content) {
    console.warn(`ignoring empty file ${relativeDir}`);
    return;
  }
  const destFilePath = resolve(rootDir, relativeDir);
  await ensureDir(dirname(destFilePath));
  return asyncFs.writeFile(destFilePath, content, {
    encoding: "utf8",
  });
}
