import { existsSync, mkdirSync, readFileSync, promises as asyncFS } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";

export function readTemplate(importMeta) {
  return readFileSync(
    resolve(dirname(fileURLToPath(importMeta.url)), "template.html"),
    {
      encoding: "utf-8",
    }
  );
}

export function readSource(importMeta, name) {
  return readFileSync(resolve(dirname(fileURLToPath(importMeta.url)), name), {
    encoding: "utf-8",
  });
}

export function ensureDirSync(path) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

export function ensureParentDirSync(path) {
  ensureDirSync(dirname(path));
}

/**
 *
 * @param {string} path
 * @param {string} template
 * @param {string} data
 */
export function createHTMLFile(path, template, data) {
  const html = Mustache.render(template, data);
  return asyncFS.writeFile(path, html, { encoding: "utf-8" });
}
