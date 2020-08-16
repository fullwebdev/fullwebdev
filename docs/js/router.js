import { render } from "lit-html";
import appShellTemplate from "./components/app-shell.js";
import { sidebarState } from "./sidebar.js";
import Prism from "prismjs";
import { langBase, getLang } from "./lang.js";

import notFound from "./routes/404.js";

const supportHistory = (() => {
  const ua = window.navigator.userAgent;

  if (
    (ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) &&
    ua.indexOf("Mobile Safari") !== -1 &&
    ua.indexOf("Chrome") === -1 &&
    ua.indexOf("Windows Phone") === -1
  ) {
    return false;
  }

  return window.history && "pushState" in window.history;
})();

const baseUrl = (() => {
  if (document.getElementsByTagName("base").length === 0) {
    return "";
  }
  const path = new URL(document.baseURI).pathname;

  return path.replace(/\/$/, "");
})();

function updatePath(path) {
  if (supportHistory) {
    history.pushState({}, "", `${baseUrl}${path}`);
  } else {
    window.location.hash = path;
  }
}

function replacePath(path) {
  if (supportHistory) {
    history.replaceState({}, "", `${baseUrl}${path}`);
  } else {
    const href = window.location.href;
    const locationWithoutHash = href.split("#")[0];
    window.location.replace(`${locationWithoutHash}#${path}`);
  }
}

export function getPath() {
  return window.location.pathname.replace(baseUrl, "") || "/";
}

export function getGenericPath() {
  return (
    window.location.pathname.replace(baseUrl, "").replace(langBase, "/") || "/"
  );
}

const routeContainer = document.getElementById("router-outlet");

/**
 * @type {[RegExp, string][]}
 */
const progRoutes = [
  [
    // /<lang>/05-inventory/:npm-package-name
    /^\/(?:en|fr)\/(?:\d+-)?inventory\/((?:(?:@|%40)[\w-~][\w-.~]*(?:\/|%2F))?[\w-~][\w-.~]+)$/,
    "/js/routes/inventory-item.js",
  ],
];

let firstNavigation = true;

/**
 * @param {string} path
 */
export async function navigate(
  path = getGenericPath(),
  redirection = false,
  update = true
) {
  /**
   * @type {string[]}
   */
  let routeMatch;
  const route = progRoutes.find(([regex]) => (routeMatch = regex.exec(path)));

  /**
   * @type {string}
   */
  let importPath;
  /**
   * @type {string}
   */
  let viewRoutePath;

  if (route) {
    importPath = route[1];
  } else {
    viewRoutePath = path;
    if (path.endsWith("/")) {
      viewRoutePath += "index.js";
    } else {
      viewRoutePath = path.concat(".js");
    }

    if (!langBase.test(path)) {
      const lang = getLang();
      path = "/" + lang + path;
      viewRoutePath = "/" + lang + viewRoutePath;
    }

    importPath = `${baseUrl}/views${viewRoutePath}`;
  }

  let template;

  try {
    let page;
    try {
      page = await import(importPath);
    } catch (err) {
      if (!viewRoutePath || getLang() === "en") {
        throw new Error();
      }
      viewRoutePath = viewRoutePath.replace(langBase, "/en/");
      // TODO: msg page not translated
      page = await import(`${baseUrl}/views${viewRoutePath}`);
      path = path.replace(langBase, "/en/");
    }
    let data;
    if (page.fetchData) {
      render(
        page.default({ data, routeParams: routeMatch, lang: getLang() }),
        routeContainer
      );
      try {
        data = await page.fetchData(routeMatch);
      } catch (err) {
        data = { error: err.toString() };
      }
    }
    template = page.default({ data, routeParams: routeMatch, lang: getLang() });
  } catch (err) {
    template = notFound({ lang: getLang() });
  }

  render(template, routeContainer);
  if (!firstNavigation) {
    const heading = routeContainer.querySelector("h1");
    heading.tabIndex = -1;
    heading.focus();
    window.scrollTo(0, 0);
    document.title = `fullweb.dev - ${heading.textContent.trim()}`;
  } else {
    firstNavigation = false;
  }

  if (redirection) {
    replacePath(path);
  } else if (update) {
    updatePath(path);
  }

  const genericPath = path.replace(langBase, "/");
  sidebarState.updateThemeClass(genericPath);
  render(
    appShellTemplate({ currentPath: path, lang: getLang() }),
    document.getElementById("app-shell")
  );

  const codes = routeContainer.querySelectorAll(`pre code[class*="language-"]`);
  for (let i = 0; i < codes.length; i++) {
    Prism.highlightElement(codes[i]);
  }
}

document.body.addEventListener("click", (e) => {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey
  ) {
    return;
  }

  const anchor = /** @type {HTMLLinkElement} */ (e.target);

  if (
    !anchor ||
    anchor.tagName !== "A" ||
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel") === "external" ||
    anchor.getAttribute("target") === "_blank"
  ) {
    return;
  }

  const fullHref = anchor.href;

  if (!fullHref || fullHref.includes("mailto:")) {
    return;
  }

  if (!fullHref.startsWith(window.location.origin)) {
    return;
  }

  e.preventDefault();

  const hrefAttr = anchor.getAttribute("href");
  if (!hrefAttr) {
    return;
  }

  if (`${baseUrl}${fullHref}` !== window.location.href) {
    const path = hrefAttr.startsWith("./")
      ? window.location.pathname + hrefAttr.slice(2)
      : new URL(fullHref).pathname;
    navigate(path);
  }
});

window.onpopstate = () => {
  navigate(getPath(), false, false);
};

navigate(getPath());
