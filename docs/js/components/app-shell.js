import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat.js";
import { classMap } from "lit-html/directives/class-map.js";
import { sidebarState } from "../sidebar.js";
import { routes } from "../routes.js";
import { setLang, langBase } from "../lang.js";

// FIXME: typing

/**
 * @typedef {{title: string, path: string, name: string, children?: NavItem[]}} NavItem
 * @typedef {{ lang: 'en' | 'fr', currentPath?: string, separator?: boolean }} RouteInfo
 * @typedef {NavItem & RouteInfo} RoutedNavItem
 * @typedef {{name?: string, path: string, title:string, file?: string, children?: {[key:string]: Route} }} Route
 * @typedef {{name?: string, path: string, title:string, file?: string, children?: Route[] }} MenuItem
 */

const reduceRoute = (path) => {
  return path.reduce((prev, cur) => {
    return prev[cur] || (prev.children && prev.children[cur]);
  }, routes);
};

/**
 * @param {string} path
 *
 * @returns {Route[]}
 */
const getRoutes = (path, lang = "en") => {
  let nbrOfLangs = 0;
  try {
    nbrOfLangs = Object.values(routes).length;
  } catch {
    // nothing
  }

  if (!nbrOfLangs) {
    return [];
  }

  const pathElmts = path.split("/").slice(1, -1);

  /**
   * @type {{ [key:string]: Route }}
   */
  let route = reduceRoute(pathElmts);

  // TODO: generalize
  const shouldFollow = pathElmts.length > 2 && route.children;

  if (!shouldFollow) {
    route = reduceRoute([lang]);
  }

  let menu = Object.values(route.children || route);
  if (shouldFollow) {
    // TODO: generalize
    const firstChild = menu.shift();
    firstChild.separator = true;
    menu = [
      routes[pathElmts[0]].children["introduction"],
      reduceRoute(pathElmts.slice(0, -1)),
      firstChild,
      ...menu,
    ];
  }

  return menu;
};

/**
 * @param {RoutedNavItem} data
 */
const navLink = (data) => {
  const isCurrentPage =
    data.currentPath && data.currentPath.replace(langBase, "/") === data.path;

  const classes = {
    "router-link-active": isCurrentPage,
  };

  return html`<div class="nav-item">
    <a
      href=${data.path}
      class="nav-link ${classMap(classes)}"
      aria-current=${isCurrentPage ? "page" : "false"}
    >
      ${data.title || data.name}
    </a>
  </div>`;
};

/**
 * @param {{ open: boolean, title: string; path: string; children?: NavItem[]; lang: "en" | "fr"; currentPath?: string; separator: boolean; name: string }} data
 */
const sidebarGroup = (data) => {
  const classes = { separator: data.separator };

  return html`<li>
    <details class="sidebar-group collapsable depth-0 ${classMap(classes)}">
      <summary class="sidebar-heading">${data.title || data.name}</summary>
      <ul class="sidebar-links sidebar-group-items">
        ${data.children
          ? repeat(
              Object.values(data.children),
              (item) => item.path,
              (item) =>
                html`<li>
                  ${sidebarLink({
                    ...item,
                    currentPath: data.currentPath,
                    lang: data.lang,
                  })}
                </li>`
            )
          : ""}
      </ul>
    </details>
  </li>`;
};

/**
 * @param {RoutedNavItem} data
 */
const sidebarItem = (data) => {
  if (!data.path) {
    return sidebarGroup(data);
  } else if (
    data.children &&
    data.currentPath &&
    data.currentPath.includes(data.path) &&
    Object.values(data.children).find((child) => child.path)
  ) {
    return html`<li>
      ${sidebarLink(data)}
      <ul class="sidebar-sub-headers">
        ${repeat(
          Object.values(data.children),
          (item) => item.path,
          (item) =>
            html`<li class="sidebar-sub-header">
              ${sidebarLink({
                ...item,
                currentPath: data.currentPath,
                lang: data.lang,
              })}
            </li>`
        )}
      </ul>
    </li>`;
  } else {
    return html`<li>${sidebarLink(data)}</li>`;
  }
};

/**
 * @param {RoutedNavItem} data
 */
const sidebarLink = (data) => {
  const classes = {
    active: data.currentPath === data.path,
    separator: data.separator,
  };

  return html`
    <a
      href=${data.path}
      class="sidebar-link ${classMap(classes)}"
      aria-current=${data.currentPath === data.path ? "page" : "false"}
    >
      ${data.title || data.name}
    </a>
  `;
};

const sidebarButton = html`<div
  class="sidebar-button"
  @click=${() => sidebarState.toggleSidebar()}
>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      class=""
    />
  </svg>
</div>`;

/**
 * @type {{en: NavItem[], fr: NavItem[]}}
 */
const navbar = {
  en: [
    {
      title: "Home",
      path: "/",
    },
  ],
  fr: [
    {
      title: "Accueil",
      path: "/",
    },
  ],
};

let router;

const selectLang = async (newLang) => {
  setLang(newLang);
  if (!router) {
    router = await import("../router.js");
  }
  router.navigate();
};

const langSelector = ({ currentLang }) => {
  const linkClasses = (lang) => ({
    "router-link-exact-active": lang === currentLang,
    "router-link-active": lang === currentLang,
  });
  const ariaCurrent = (lang) => (lang === currentLang) + "";

  return html`<div
    class="lang-selector"
    aria-label="Sélectionner la langue à utiliser"
  >
    <div class="nav-item">
      <a
        href
        @click=${() => selectLang("en")}
        class="nav-link ${classMap(linkClasses("en"))}"
        aria-current=${ariaCurrent("en")}
      >
        English
      </a>
    </div>
    <div class="nav-item">
      <a
        href
        @click=${() => selectLang("fr")}
        class="nav-link ${classMap(linkClasses("fr"))}"
        aria-current=${ariaCurrent("fr")}
      >
        Français
      </a>
    </div>
  </div>`;
};

const githubLink = (lang) => html` <a
  href="https://github.com/fullwebdev/fullwebdev"
  target="_blank"
  rel="noopener noreferrer"
  class="repo-link"
  aria-label=${lang === "fr"
    ? "Aller sur notre dépôt Github"
    : "Go to our Github repository"}
>
  GitHub
</a>`;

/**
 * @param {RouteInfo} data
 */
export default (data) => html` <header class="navbar">
    ${sidebarButton}
    <a class="nav-link site-name" href="/">
      FullWeb.dev
    </a>
    <div class="links" style="max-width: 1553px;">
      <nav class="nav-links can-hide">
        ${repeat(
          navbar[data.lang],
          (item) => item.path,
          (item) => navLink({ ...item, ...data })
        )}
        ${langSelector({ currentLang: data.lang })} ${githubLink(data.lang)}
      </nav>
    </div>
  </header>
  <aside class="sidebar">
    <nav class="nav-links">
      ${repeat(
        navbar[data.lang],
        (item) => item.path,
        (item) => navLink({ ...item, ...data })
      )}
      ${langSelector({ currentLang: data.lang })} ${githubLink(data.lang)}
    </nav>
    <ul class="sidebar-links">
      ${repeat(
        getRoutes(data.currentPath || "/en/", data.lang),
        (item) => item.path,
        (item) => sidebarItem({ ...item, ...data })
      )}
    </ul>
  </aside>`;
