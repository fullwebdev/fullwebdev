import { promises as asyncFs } from "fs";
import { dirname, resolve } from "path";
import { ensureDir } from "./path.js";

/**
 * @param {string} rootDir
 * @param {string} name
 * @param {import('@daucus/core').RoutesConfig} object
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
 * @param {string} name
 * @param {string} projectName
 * @param {import('@daucus/core').ProjectRoutesConfig | import('@daucus/core').I18NProjectRoutesConfig} projectRoutesConfig
 * @param {string} objectName
 * @param {string} type
 */
 export async function updateFileJSObject(rootDir, name, projectName, projectRoutesConfig, objectName, type) {
  const object = (await import(resolve(rootDir, name))).default;
  object[projectName] = projectRoutesConfig;
  return writeJSObject(rootDir, name, object, objectName, type);
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
