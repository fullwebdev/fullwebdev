import Mustache from "mustache";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const indexTemplate = fs.readFileSync(resolve(__dirname, "index.mustache"), {
  encoding: "utf-8",
});

const homepageTemplate = fs.readFileSync(resolve(__dirname, "homepage.mustache"), {
  encoding: "utf-8",
});



for (const [key, view] of Object.entries(views)) {
  const html = Mustache.render(indexTemplate, view);
  const pathToFile = resolve(__dirname, "..", "public", "localized-files", key);
  if (!fs.existsSync(pathToFile)) {
    fs.mkdirSync(pathToFile, { recursive: true });
  }
  fs.writeFileSync(resolve(pathToFile, "index.html"), html, {
    encoding: "utf-8",
  });
}

const html = Mustache.render(indexTemplate, { meta: baseMeta, nav: nav.en, root: true });
fs.writeFileSync(resolve(__dirname, "..", "public", "index.html"), html, {
  encoding: "utf-8",
});
