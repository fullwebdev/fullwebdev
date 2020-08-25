const { writeRoutes, writeRoutesFile } = require("./write-routes");
const path = require("path");
const fs = require("fs-extra");
const { snowpack } = require("../utils/snowpack");

async function generateAll(root) {
  await writeRoutesFile({}, root);

  const snowp = snowpack(["dev"], root);

  console.log("server started");
  console.log("generating routes.js file");

  await new Promise((resolve) => setTimeout(resolve, 8000));

  await writeRoutes(root);
  snowp.kill();
}

module.exports = { generateAll };
