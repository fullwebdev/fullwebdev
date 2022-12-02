import functions from "firebase-functions";
// eslint-disable-next-line import/no-unresolved
import logger from "firebase-functions/logger";

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { routes, dirs } from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INDEX_TEMPLATE = fs
  .readFileSync(path.resolve(__dirname, "index.html"))
  .toString();

const escapeHTML = (unsafe) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function metasForRoute(route) {
  let metas = "";
  for (const [key, value] of Object.entries(route)) {
    metas += `<meta ${
      key.startsWith("og:") ? "property" : "name"
    }="${key}" content="${escapeHTML(value)}" />`;
  }
  return metas;
}

const BOT_AGENTS = [
  "googlebot",
  "yahoou",
  "bingbot",
  "baiduspider",
  "yandex",
  "yeti",
  "yodaobot",
  "gigabot",
  "ia_archiver",
  "facebookexternalhit",
  "twitterbot",
  "developers.google.com",
];

function isBot(userAgent) {
  for (const bot of BOT_AGENTS) {
    if (userAgent.toLowerCase().includes(bot)) {
      return true;
    }
  }
  return false;
}

const DEFAULT_METAS = {
  fr: {
    "og:title": "fullweb.dev",
    "og:description": "Redécouvrir le développement Web",
    "og:image": "https://fullweb.dev/images/social/social_fr.png",
  },
  en: {
    "og:title": "fullweb.dev",
    "og:description": "Relearn Web Development",
    "og:image": "https://fullweb.dev/images/social/social_en.png",
  },
};

export const httpRequestHandler = functions.https.onRequest(
  (request, result) => {
    let reqPath = request.path;
    let lang = "fr";
    const langPathMatch = /^\/(en|fr)(\/.*)/.exec(reqPath);
    if (langPathMatch) {
      [, lang, reqPath] = langPathMatch;
    }
    let route = routes[reqPath];

    if (!route) {
      const found = dirs.find(
        ([key, dirRoute]) => reqPath.startsWith(key) && dirRoute
      ) || ["", {}];
      [, route] = found;
      if (route[lang]) {
        if (route.default) {
          route = {
            ...route.default,
            ...route[lang],
          };
        } else {
          route = route[lang];
        }
      }
      route = {
        ...DEFAULT_METAS[lang],
        ...route,
      };
    }

    let indexHTML = INDEX_TEMPLATE;

    if (isBot(request.headers["user-agent"]) && route) {
      const newMetas = metasForRoute(route);
      indexHTML = indexHTML.replace(
        /<!-- meta-tags:start -->[\s\S]*<!-- meta-tags:end -->/,
        newMetas
      );
      // eslint-disable-next-line no-console
      logger.info(`rewrite ${reqPath} metas`, newMetas);
    }

    // caching
    // res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    result.status(200).send(indexHTML);
  }
);
