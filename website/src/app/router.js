import { DaucusRouter } from "@daucus/router";
import daucusRoutes from "../fragments/routes.js";
import "@daucus/html-loader/html-loader";

/** @typedef {import('@daucus/html-loader').HTMLLoaderElement} HTMLLoaderElement */
/** @typedef {import('@daucus/router/src/daucus-router').RouteMatchEvent} RouteMatchEvent */
/** @typedef {import('@daucus/router/src/daucus-router').NavigationOptions} NavigationOptions */

const preferredLanguages = window.navigator.languages || [
  window.navigator.language,
];

/** @type {"fr" | "en"} */
let language = "fr";
if (!preferredLanguages.find((code) => code.startsWith("fr"))) {
  language = "en";
}

/** @type {HTMLLoaderElement} */
let outlet;
/** @type {Node} */
let homeTemplate;

/** @type {import('./app-routes.js').AppRoutes} */
const APP_ROUTES = {
  "/": {
    templateName: "homepage",
  },
};

class AppRouter extends DaucusRouter {
  constructor() {
    super(daucusRoutes, "/docs/en", "dist/fragments/");
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} [options]
   */
  async renderOrRedirect(path, options) {
    const appRoute = APP_ROUTES[path];
    if (appRoute) {
      if (appRoute.template) {
        outlet.innerHTML = "";
        outlet.appendChild(appRoute.template());
        // TODO: lit-html & wc
      } else if (appRoute.templateName) {
        this.dispatchEvent(
          new CustomEvent("route-match", {
            detail: {
              templateHRef: `/dist/fragments/app/${language}/${appRoute.templateName}.html`,
            },
          })
        );
      }
      return null;
    }
    return super.renderOrRedirect(path, options);
  }

  // eslint-disable-next-line class-methods-use-this
  initOutlet() {
    const pageContainer = document.getElementById("page-container");
    if (!pageContainer) throw new Error("no page-container");

    if (
      pageContainer.firstElementChild &&
      pageContainer.firstElementChild.id === "homepage"
    ) {
      homeTemplate = pageContainer.firstElementChild.cloneNode(true);
      APP_ROUTES["/"].template = () => homeTemplate.cloneNode(true);
      // FIXME: for root index with i18n
    }
    // @ts-ignore HTMLElement as HTMLLoaderElement
    outlet = document.createElement("html-loader");
    // TODO: outlet fallback
    pageContainer.innerHTML = "";
    pageContainer.appendChild(outlet);
  }
}

const router = new AppRouter();
// @ts-ignore cast Event to RouteMatchEvent
router.addEventListener("route-match", (/** @type {RouteMatchEvent} */ e) => {
  if (e.detail.templateHRef) {
    outlet.href = e.detail.templateHRef;
  }
});

export { router };
