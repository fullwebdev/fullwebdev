import { promises as asyncFs } from "fs";
import { dirname, resolve } from "path";
import { ensureDir } from "../fs/path.js";

export async function writeJSObject(rootDir, name, object) {
  const content = `export default ${JSON.stringify(object, null, 2)}`;
  await asyncFs.writeFile(resolve(rootDir, name), content, {
    encoding: "utf8",
  });
}

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
