import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";

export function readTemplate(importMeta) {
  return readFileSync(
    resolve(dirname(fileURLToPath(importMeta.url)), "template.mustache"),
    {
      encoding: "utf-8",
    }
  );
}

export function ensureParentDirSync(path) {
  if (!existsSync(dirname(path))) {
    mkdirSync(dirname(path), { recursive: true });
  }
}

export function createHTMLFile(path, template, data) {
  ensureParentDirSync(path);
  const html = Mustache.render(template, data);
  writeFileSync(path, html, { encoding: "utf-8" });
}
