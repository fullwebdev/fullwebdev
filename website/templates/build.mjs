import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import homepage from "./homepage/index.mjs";
import notFound from "./not-found/index.mjs";
import index from "./index/index.mjs";
import {
  createHTMLFile,
  ensureParentDirSync,
  ensureDirSync,
} from "./utils.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

for (const template of [index]) {
  for (const [file, data] of Object.entries(template.files)) {
    const outFilePath = resolve(__dirname, "..", ...file.split("/"));
    ensureParentDirSync(outFilePath);

    createHTMLFile(outFilePath, template.template, data);
  }
}

const templates = { homepage, "not-found": notFound };

const appFragmentsDir = resolve(__dirname, "..", "src", "fragments", "app");

const validLanguages = ["en", "fr"];

validLanguages.forEach((lang) => ensureDirSync(resolve(appFragmentsDir, lang)));

Promise.all(
  Object.entries(templates).map(async ([name, { template, langs }]) => {
    const rslt = await Promise.all(
      Object.entries(langs).map(async ([lang, data]) => {
        await createHTMLFile(
          resolve(appFragmentsDir, lang, `${name}.html`),
          template,
          data
        );
        return `${lang} ✅`;
      })
    );
    return `${name}: ${rslt.join(" - ")}`;
  })
  // eslint-disable-next-line no-console
).then((logs) => logs.forEach((m) => console.log(m)));
