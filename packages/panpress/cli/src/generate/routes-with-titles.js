const puppeteer = require("puppeteer");
const path = require("path");
const { readDirTree } = require("../utils/dir-tree");
const { dirToRoutes } = require("./dir-to-routes");

async function routesWithTitles(root) {
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
        title = title
          .trim()
          .replace(/\s{2,}/g, " ")
          .trim();
        if (title === "404") throw new Error("404 View");
        console.debug(`[routes - title] ${path} = ${title}`);
      } catch (e) {
        console.warn(`[routes - title] no title found for ${path}`);
        console.log(e);
        return null;
      }
    }
    return { title };
  };

  const dirPath = path.resolve(root, "app", "views");
  const dirTree = readDirTree(dirPath, ".js");
  const menu = await dirToRoutes(dirTree, getTitle);
  await browser.close();

  return menu;
}

module.exports = { routesWithTitles };
