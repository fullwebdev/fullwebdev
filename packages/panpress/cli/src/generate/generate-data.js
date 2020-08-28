const puppeteer = require("puppeteer");
const path = require("path");
const { readDirTree } = require("../utils/dir-tree");
const { dirToRoutes } = require("./dir-to-routes");
const { merge } = require("../utils/objects");
const builder = require("xmlbuilder");
const { getGitLastUpdatedTimeStamp } = require("../utils/last-update");
const { getSrcPath } = require("../utils/view-src");
const { getConfig } = require("../utils/config");
const { getLang, rmLang } = require("../utils/lang");

/**
 * @param {string} root
 */
module.exports.generateData = async function (root) {
  const sitemapObj = {
    urlset: {
      "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
      "@xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      url: [],
    },
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const getTitle = async (_, path) => {
    // TODO: fallBack if TITLE.md instead of index.js
    let title = "";
    if (path) {
      console.debug();
      console.debug(`path: ${path}`);
      const url = `http://localhost:8080${path}`;
      await page.goto(url, {
        waitUntil: "networkidle0",
      });
      await page.waitForSelector("h1", { timeout: 2000 });
      title = await page.$eval("h1", (el) => el.textContent);
      title = title
        .trim()
        .replace(/\s{2,}/g, " ")
        .trim();
      if (title === "404") throw new Error("404 View");
      console.debug(`route title: ${title}`);
    }
    return { title };
  };

  /**
   * @typedef {{'@rel': string; '@hreflang': string; '@href': string}} XHTMLLink
   */

  /**
   * @type {{[key: string]: XHTMLLink[]}}}
   */
  const xhtmlLinks = {};

  const urlBase = getConfig().environments["prod"].host;

  /**
   * @param {string} path
   * @param {string} realPath
   * @param {string} viewFile
   */
  const addSitemapUrl = (path, realPath, viewFile) => {
    const lang = getLang(path, "/");
    const genericPath = rmLang(path, "/");
    const loc = `${urlBase}${path}`;

    console.debug(`lang: ${lang}`);
    console.debug(`genericPath: ${genericPath}`);
    console.debug(`loc: ${loc}`);

    if (lang !== "en") {
      /**
       * @type {XHTMLLink}
       */
      const langLink = {
        "@rel": "alternate",
        "@hreflang": lang,
        "@href": loc,
      };

      const enUrlIndex = sitemapObj.urlset.url.findIndex((url) => {
        const urlPath = url.loc.replace(urlBase, "");
        const urlGenericPath = rmLang(urlPath, "/");
        return urlGenericPath === genericPath;
      });

      if (enUrlIndex > -1) {
        if (!sitemapObj.urlset.url[enUrlIndex]["xhtml:link"]) {
          sitemapObj.urlset.url[enUrlIndex]["xhtml:link"] = [];
        }
        sitemapObj.urlset.url[enUrlIndex]["xhtml:link"].push(langLink);
        console.debug(`alternate added to sitemaps`);
      } else {
        if (!xhtmlLinks[genericPath]) {
          xhtmlLinks[genericPath] = [];
        }
        xhtmlLinks[genericPath].push(langLink);
        console.debug(`alternate for sitmaps cached`);
      }
      return;
    }

    const url = { loc };
    const srcPath = getSrcPath(viewFile, root);
    let lastmod;
    if (srcPath) {
      lastmod = getGitLastUpdatedTimeStamp(srcPath);
    }
    if (lastmod) {
      const lastmodDate = new Date(lastmod).toISOString();
      console.debug(`lastmod: ${lastmodDate}`);
      url.lastmod = lastmodDate;
    }
    const langLinks = xhtmlLinks[genericPath];
    if (langLinks) {
      url["xhtml:link"] = xhtmlLinks[genericPath];
      console.debug(
        `added x${xhtmlLinks[genericPath].length} alternates to sitemaps`
      );
    }
    sitemapObj.urlset.url.push(url);
  };

  const dirPath = path.resolve(root, "app", "views");
  const dirTree = readDirTree(dirPath, ".js");

  /**
   * @type {Array<(path: string, realPath: string, file: string) => Promise<{ [key:string]: any }> | void>}
   */
  const callbacks = [getTitle];
  if (urlBase) {
    callbacks.push(addSitemapUrl);
  }

  const routes = await dirToRoutes(dirTree, ...callbacks);

  await browser.close();

  // TODO: generalize
  routes.fr = merge(routes.en, routes.fr, (en, fr, key) => {
    if (key === "title" && en.title && !fr.title) {
      return `(en) ${en.title}`;
    }
  });

  const sitemap = builder
    .create(sitemapObj, { encoding: "utf-8" })
    .end({ pretty: true });

  return { routes, sitemap };
};
