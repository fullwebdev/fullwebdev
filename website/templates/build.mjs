import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import about from "./about/index.mjs";
import homepage from "./homepage/index.mjs";
import notFound from "./not-found/index.mjs";
import index from "./index/index.mjs";
import {
  createHTMLFile,
  ensureParentDirSync,
  ensureDirSync,
} from "./utils.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

for (const [file, data] of Object.entries(index.files)) {
  const outFilePath = resolve(__dirname, "..", ...file.split("/"));
  ensureParentDirSync(outFilePath);

  createHTMLFile(outFilePath, index.template, data);
}

const templates = { homepage, "not-found": notFound, about };

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
