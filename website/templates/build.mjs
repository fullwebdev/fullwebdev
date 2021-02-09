
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import homepage from "./homepage/index.mjs";
import index from "./index/index.mjs";
import { createHTMLFile } from "./utils.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

for (const [file, data] of Object.entries(index.files)) {
 createHTMLFile(
  resolve(__dirname, "..", ...file.split("/")),
  index.template,
  data
 )
}

for (const [lang, data] of Object.entries(homepage.langs)) {
  createHTMLFile(
    resolve(
      __dirname,
      "..",
      "src",
      "fragments",
      "app",
      lang,
      "homepage.html"
    ),
    homepage.template,
    data
   )
}
