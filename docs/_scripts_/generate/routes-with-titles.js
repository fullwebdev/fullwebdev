const puppeteer = require("puppeteer");
const path = require("path");
const { readDirTree } = require("../utils/dir-tree");
const { dirToRoutes } = require("./dir-to-routes");

const dirPath = path.resolve(__dirname, "..", "..", "views");

async function routesWithTitles() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const getTitle = async (path) => {
    // TODO: fallBack if TITLE.md instead of index.js
    let title = "";
    if (path) {
      const url = `http://localhost:8080${path}`;
      await page.goto(url, {
        waitUntil: "networkidle0",
      });
      try {
        await page.waitForSelector("h1", { timeout: 2000 });
        title = await page.$eval("h1", (el) => el.textContent);
        title = title.replace(/\s{2,}/g, " ");
      } catch (e) {
        console.warn(`no title found for ${path}`);
        // console.warn(e);
      }
    }
    return { title };
  };

  const dirTree = readDirTree(dirPath, ".js");
  const menu = await dirToRoutes(dirTree, getTitle);
  await browser.close();

  return menu;
}

module.exports = { routesWithTitles };
