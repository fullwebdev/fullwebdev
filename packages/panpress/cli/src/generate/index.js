const { writeRoutesFile, writeSitemapFile } = require("./write-files");
const path = require("path");
const fs = require("fs-extra");
const { snowpack } = require("../utils/snowpack");
const { generateData } = require("./generate-data");

async function generateAll(root, reload = false) {
  await writeRoutesFile({}, root);

  const snowp = snowpack(["dev", ...(reload ? ["--reload"] : [])], root);

  console.log("server started");
  console.log("generating routes.js file");

  await new Promise((resolve) => setTimeout(resolve, 8000));

  const { routes, sitemap } = await generateData(root);
  snowp.kill();

  await writeRoutesFile(routes, root);
  await writeSitemapFile(sitemap, root);
}

module.exports = { generateAll };
