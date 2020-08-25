import { render } from "lit-html";
import appShellTemplate from "./components/app-shell.js";
import { sidebarState } from "./sidebar.js";
import Prism from "prismjs";
import { langBase, getLang } from "./lang.js";
import { routes } from "./routes.js";
import * as Router from "@modern-helpers/lazy-router";
import notFound from "./routes/404.js";

/**
 * @type {import('@modern-helpers/lazy-router').Routes}
 */
const progRoutes = [];

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

    if (routeInfos) {
      return routeInfos.file;
    } else {
      let viewRoutePath = path;
      if (path.endsWith("/")) {
        viewRoutePath += "index.js";
      } else {
        viewRoutePath = path.concat(".js");
      }

      return `${Router.baseUrl}/views${viewRoutePath}`;
    }
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
  templateCallFailed: () => notFound({ lang: getLang() }),
  afterNavigation: (path, redirection, update, routeContainer) => {
    if (window._paq) {
      // window._paq.push(["setReferrerUrl", previousUrl]);
      window._paq.push(["setCustomUrl", path]);
      window._paq.push(["setDocumentTitle", document.title]);
      // window._paq.push(["setGenerationTimeMs", startTime - performance.now()]);
      window._paq.push(["MediaAnalytics::scanForMedia", routeContainer]);
      window._paq.push(["FormAnalytics::scanForForms", routeContainer]);
      window._paq.push(["trackPageView"]);
    } else {
      console.warn("matomo is unavailable");
    }

    const genericPath = path.replace(langBase, "/");
    sidebarState.updateThemeClass(genericPath);
    render(
      appShellTemplate({ currentPath: path, lang: getLang() }),
      document.getElementById("app-shell")
    );

    const codes = routeContainer.querySelectorAll(
      `pre code[class*="language-"]`
    );
    for (let i = 0; i < codes.length; i++) {
      Prism.highlightElement(codes[i]);
    }
  },
});

Router.navigate(Router.getPath());
