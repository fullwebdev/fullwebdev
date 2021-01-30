import { dirname } from "path";
import { fileURLToPath } from "url";

export function esmFileName(importMeta) {
  return fileURLToPath(importMeta.url);
}

export function esmDirName(importMeta) {
  return dirname(esmFileName(importMeta));
}
