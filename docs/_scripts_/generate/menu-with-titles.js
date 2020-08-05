const puppeteer = require("puppeteer");
const globby = require("globby");
const path = require("path");
const { readDirTree } = require("../utils/dir-tree");
const { getMenu } = require("./menu");

const dirPath = path.resolve(__dirname, "..", "..", "views");

async function generateMenuData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const getTitle = async (path) => {
    // TODO: fallBack if TITLE.md instead of index.js
    let title = "";
    console.log(path);
    if (path) {
      await page.goto(`http://localhost:8080/${path}`, {
        waitUntil: "networkidle0",
      });
      try {
        await page.waitForSelector("h1", { timeout: 2000 });
        title = await page.$eval("h1", (el) => el.textContent);
        title = title.replace(/\s{2,}/g, " ");
      } catch (e) {
        console.warn(e);
      }
    }
    return { title };
  };

  const dirTree = readDirTree(dirPath, ".js");
  console.log(JSON.stringify(dirTree, null, 2));
  const menu = await getMenu(dirTree, ["en"], true, getTitle);
  await browser.close();

  return menu;
}

module.exports = { generateMenuData };
