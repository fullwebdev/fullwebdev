const { routesWithTitles } = require("./routes-with-titles");
const fs = require("fs-extra");
const path = require("path");
const { merge } = require("../utils/objects");
const { writeFile } = require("fs").promises;

async function writeRoutes() {
  const generatedRoutes = await routesWithTitles();

  // TODO: generalize
  generatedRoutes.fr = merge(
    generatedRoutes.en,
    generatedRoutes.fr,
    (en, fr, key) => {
      if (key === "title" && en.title && !fr.title) {
        return `(en) ${en.title}`;
      }
    }
  );

  const routes = JSON.stringify(generatedRoutes, null, 2);
  const jsContent = `
    export const routes = ${routes};
  `;
  const dest = path.join(__dirname, "..", "..", "js", "routes.js");
  await fs.createFile(dest);
  console.log(`[build] ${dest} built`);
  await writeFile(dest, jsContent, {
    encoding: "utf8",
  });
}

module.exports = { writeRoutes }
