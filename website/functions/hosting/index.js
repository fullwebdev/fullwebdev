// eslint-disable-next-line import/no-unresolved
const functions = require("firebase-functions");
const fs = require("fs");
const path = require("path");
const { routes } = require("./routes");

const INDEX_TEMPLATE = fs
  .readFileSync(path.resolve(__dirname, "index.html"))
  .toString();

function metasForRoute(route) {
  let metas = "";
  for (const [key, value] of Object.entries(route)) {
    metas += `<meta ${
      key.startsWith("og:") ? "property" : "name"
    }="${key}" content="${value}" />`;
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

exports.httpRequestHandler = functions.https.onRequest((request, result) => {
  const route = routes[request.path];

  let indexHTML = INDEX_TEMPLATE;

  if (isBot(request.headers["user-agent"]) && route) {
    indexHTML = indexHTML.replace(
      /<!-- meta-tags:start -->[\s\S]*<!-- meta-tags:end -->/,
      metasForRoute(route)
    );
  }

  // caching
  // res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  result.status(200).send(indexHTML);
});
