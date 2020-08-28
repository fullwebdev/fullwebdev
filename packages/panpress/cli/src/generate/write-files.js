const fs = require("fs-extra");
const path = require("path");
const { writeFile } = require("fs").promises;

module.exports.writeRoutesFile = async function (data, root) {
  const routes = JSON.stringify(data, null, 2);
  const jsContent = `
    export const routes = ${routes};
  `;
  const dest = path.resolve(root, "app", "js", "routes.js");
  await fs.createFile(dest);
  console.log(`[build] ${dest} built`);
  await writeFile(dest, jsContent, {
    encoding: "utf8",
  });
};

module.exports.writeSitemapFile = async function (data, root) {
  const dest = path.resolve(root, "app", "sitemap.xml");
  await writeFile(dest, data, {
    encoding: "utf8",
  });
};
