import { render } from "lit-html";

const langBase = /\/(en|fr)\//;

let lang = "en";
if (/^fr\b/.test(navigator.language)) {
  lang = "fr";
}

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

function getPath() {
  return window.location.pathname.replace(baseUrl, "") || "/";
}

const routeContainer = document.getElementById("router-outlet");

// TODO: 404 page
const notFound = () => "404 - page not found";

/**
 * @param {string} path
 */
export async function navigate(path, redirection = false, update = true) {
  let importPath = path;
  if (path.endsWith("/")) {
    importPath += "index.js";
  } else {
    importPath = path.concat(".js");
  }

  if (!langBase.test(path)) {
    path = "/" + lang + path;
    importPath = "/" + lang + importPath;
  }

  let page;
  try {
    page = (await import(`${baseUrl}/pages${importPath}`)).default;
  } catch (err) {
    if (lang !== "en") {
      importPath = importPath.replace(langBase, "/en/");
      try {
        page = (await import(`${baseUrl}/pages${importPath}`)).default;
        path = path.replace(langBase, "/en/");
      } catch (err) {
        page = notFound;
      }
    } else {
      page = notFound;
    }
  }

  render(page(lang), routeContainer);

  if (redirection) {
    replacePath(path);
  } else if (update) {
    updatePath(path);
  }
}

document.body.addEventListener("click", (e) => {
  //#region exclusions
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey
  )
    return;
  //#endregion exclusions

  const anchor = e.target;

  if (
    !anchor ||
    anchor.tagName !== "A" ||
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel") === "external"
  )
    return;

  let href = anchor.href;

  if (!href || href.includes("mailto:")) return;

  if (!href.startsWith(window.location.origin)) return;

  e.preventDefault();
  if (`${baseUrl}${href}` !== window.location.href) {
    navigate(new URL(href).pathname);
  }
});

window.onpopstate = (event) => {
  navigate(getPath());
};

navigate(getPath());
