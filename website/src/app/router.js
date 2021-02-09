import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "@daucus/router";
import daucusRoutes from "../fragments/routes.js";
import "@daucus/html-loader/html-loader";

/** @typedef {import('@daucus/html-loader').HTMLLoaderElement} HTMLLoaderElement */
/** @typedef {import('@daucus/router/src/daucus-router').RouteMatchEvent} RouteMatchEvent */
/** @typedef {import('@daucus/router/src/daucus-router').NavigationOptions} NavigationOptions */

const preferredLanguages = window.navigator.languages || [
  window.navigator.language,
];

/** @type {Node} */
let homeTemplate;

/** @type {import('./app-routes.js').AppRoutes} */
const APP_ROUTES = {
  "/": {
    templateName: "homepage",
  },
  "/404": {
    templateName: "not-found",
  },
};

class AppRouter extends AbstractRouter {
  /**
   * @param {import("@daucus/router/src/RoutesConfig").RoutesConfig} daucusRoutesConfig
   * @param {string} fragmentsDirectory
   */
  constructor(daucusRoutesConfig, fragmentsDirectory) {
    super();
    // FIXME: i18n
    this._findDaucusRoute = routeFinder(daucusRoutesConfig);
    this._fragmentsDirectory = fragmentsDirectory;

    /** @type {"fr" | "en"} */
    this.preferredLanguage = "fr";
    if (!preferredLanguages.find((code) => code.startsWith("fr"))) {
      this.preferredLanguage = "en";
    }

    /** @type {HTMLLoaderElement | null} */
    this._outlet = null;
  }

  /** @type {HTMLLoaderElement} */
  get outlet() {
    if (!this._outlet) {
      const outlet = document.querySelector("html-loader");
      if (!outlet) throw new Error("no html-loader element could be found");
      // @ts-ignore cast outlet from Element to HTMLLoaderElement
      this._outlet = outlet;
    }
    // @ts-ignore this._outlet can't be null here
    return this._outlet;
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} [options]
   *
   * @returns {[path: string, options?: NavigationOptions] | null}
   */
  renderOrRedirect(path, options) {
    const appRoute = APP_ROUTES[path];
    /** @type {string | null} */
    let templateUrl = null;
    if (appRoute) {
      if (appRoute.template) {
        this.outlet.staticContent(appRoute.template());
        return null;
        // TODO: lit-html & wc
      }
      if (appRoute.templateName) {
        templateUrl = `${this._fragmentsDirectory}app/${this.preferredLanguage}/${appRoute.templateName}.html`;
      }
    } else {
      const [daucusProjectName, daucusRoute] = this._findDaucusRoute(path);
      if (daucusRoute && daucusRoute.templateUrl) {
        templateUrl = `${this.base || "/"}${
          this._fragmentsDirectory
        }${daucusProjectName}/${this.preferredLanguage}/${
          daucusRoute.templateUrl
        }`;
      }
    }

    if (templateUrl !== null) {
      this.outlet.href = templateUrl;
      return null;
    }

    return ["/404", options];
  }

  // eslint-disable-next-line class-methods-use-this
  resetPageContainer() {
    const pageContainer = document.getElementById("page-container");
    if (!pageContainer)
      throw new Error("no html-loader nor page-container element found");

    if (pageContainer.firstElementChild) {
      homeTemplate = pageContainer.firstElementChild.cloneNode(true);
      APP_ROUTES["/"].template = () => homeTemplate.cloneNode(true);
    }
    const outlet = document.createElement("html-loader");
    pageContainer.innerHTML = "";
    pageContainer.appendChild(outlet);
    // @ts-ignore cast outlet from Element to HTMLLoaderElement
    this._outlet = outlet;
  }
}

export const router = new AppRouter(daucusRoutes, "dist/fragments/");
