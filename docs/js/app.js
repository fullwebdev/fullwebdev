import { render } from "lit-html";
import appShellTemplate from "./components/app-shell.js";
import { sidebarState } from "./sidebar.js";
import { langBase, getLang } from "./lang.js";
import { routes } from "./routes.js";
import * as Router from "@modern-helpers/lazy-router";

/**
 * @type {import('@modern-helpers/lazy-router').Routes}
 */
const progRoutes = [
  {
    // /<lang>/inventory/:npm-package-name
    path: /^\/(?:en|fr)\/(?:\d+-)?inventory\/((?:(?:@|%40)[\w-~][\w-.~]*(?:\/|%2F))?[\w-~][\w-.~]+)$/,
    component: "/js/routes/inventory-item.js",
  },
];

let Prism;
let notFound;

Router.setUp(progRoutes, render, {
  templateParams: () => ({ lang: getLang() }),
  routeNotFound: (path) => {
    const pathHasLang = langBase.test(path);
    const lang = getLang();

    if (!pathHasLang) {
      path = "/" + lang + path;
    }

    let routeInfos = routes[lang]
      ? path
          .split("/")
          .filter((e) => e)
          .reduce((prev, cur) => {
            return prev[cur] || (prev.children && prev.children[cur]);
          }, routes)
      : null;

    let importPath;
    if (routeInfos) {
      importPath = routeInfos.file;
    } else {
      let viewRoutePath = path;
      if (path.endsWith("/")) {
        viewRoutePath += "index.js";
      } else {
        viewRoutePath = path.concat(".js");
      }

      importPath = `${Router.baseUrl}/views${viewRoutePath}`;
    }

    return {
      importPath,
      newPath: path,
    };
  },
  importFailed: async (url, path) => {
    const urlMatch = new RegExp(`${Router.baseUrl}/views/(.*)`).exec(url);
    if (!urlMatch || getLang() === "en") {
      return { page: null };
    }
    const viewRoutePath = urlMatch[1].replace(langBase, "/en/");
    // TODO: msg page not translated
    let page = null,
      newPath;
    try {
      page = await import(`${Router.baseUrl}/views${viewRoutePath}`);
      newPath = path.replace(langBase, "/en/");
    } catch {}
    return { page, newPath };
  },
  templateCallFailed: async () => {
    if (!notFound) {
      notFound = (await import("./routes/404.js")).default;
    }
    return notFound({ lang: getLang() });
  },
  afterNavigation: async (path, redirection, update, routeContainer) => {
    const genericPath = path.replace(langBase, "/");
    sidebarState.updateThemeClass(genericPath);
    render(
      appShellTemplate({ currentPath: path, lang: getLang() }),
      document.getElementById("app-shell")
    );

    const codes = routeContainer.querySelectorAll(
      `pre code[class*="language-"]`
    );
    if (codes.length > 0) {
      if (!Prism) {
        Prism = await import("prismjs");
      }
      for (let i = 0; i < codes.length; i++) {
        Prism.highlightElement(codes[i]);
      }
    }
  },
});

Router.navigate(Router.getPath());
