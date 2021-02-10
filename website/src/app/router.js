import { AbstractRouter } from "@modern-helpers/router";
import { routeFinder } from "@daucus/router";
import daucusRoutes from "../fragments/routes.js";
import "@daucus/html-loader/html-loader";

/** @typedef {import('@daucus/html-loader').HTMLLoaderElement} HTMLLoaderElement */
/** @typedef {import('@daucus/router/src/daucus-router').RouteMatchEvent} RouteMatchEvent */
/** @typedef {import('@daucus/router/src/daucus-router').NavigationOptions} NavigationOptions */

class AppRouter extends AbstractRouter {
  /** @type {import('./app-routes').AppRoutes} */
  static get APP_ROUTES() {
    return {
      "/": {
        templateName: "homepage",
      },
      "/404": {
        templateName: "not-found",
      },
      "/learn": {
        componentURL: "./projects-list.js",
        wordingsURL: "./wordings/learn.js",
      },
      "/build": {
        componentURL: "./projects-list.js",
        wordingsURL: "./wordings/build.js",
      },
      "/news": {
        componentURL: "./projects-list.js",
        wordingsURL: "./wordings/news.js",
      },
    };
  }

  static get preferredLanguages() {
    return window.navigator.languages || [window.navigator.language];
  }

  /**
   * @param {import("@daucus/router/src/RoutesConfig").RoutesConfig} daucusRoutesConfig
   * @param {string} fragmentsDirectory
   */
  constructor(daucusRoutesConfig, fragmentsDirectory) {
    super();
    // FIXME: i18n
    this._findDaucusRoute = routeFinder(daucusRoutesConfig);
    this._fragmentsDirectory = fragmentsDirectory;

    /** @type {import('./languages').Language} */
    this.preferredLanguage = "fr";
    if (!AppRouter.preferredLanguages.find((code) => code.startsWith("fr"))) {
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
   * @returns {Promise<[path: string, options?: NavigationOptions] | null>}
   */
  async renderOrRedirect(path, options) {
    const { staticContent, templateUrl } = await this._findRoute(path);

    if (staticContent !== null) {
      this.outlet.staticContent(staticContent);
      return null;
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

    const initialContent = pageContainer.childNodes;
    const fragment = document.createDocumentFragment();
    fragment.append(...initialContent);
    AppRouter.APP_ROUTES["/"].template = () => fragment.cloneNode(true);

    /** @type {HTMLLoaderElement} */
    // @ts-ignore cast outlet from Element to HTMLLoaderElement
    const outlet = document.createElement("html-loader");
    pageContainer.innerHTML = "";
    pageContainer.appendChild(outlet);
    outlet.staticContent(fragment.cloneNode(true));
    this._outlet = outlet;
  }

  /**
   * @param {string} path
   * @param {import('./app-routes.js').ComponentProps} props
   * @param {string} [wordingsURL]
   */
  async _loadComponent(path, props = {}, wordingsURL) {
    const { selector } = await import(path);
    const el = document.createElement(selector);
    el.lang = this.preferredLanguage;
    if (wordingsURL) {
      el.wordings = await import(wordingsURL);
    }
    for (const [key, value] of Object.entries(props)) {
      el[key] = value;
    }
    return el;
  }

  /**
   * @param {string} path
   */
  async _findRoute(path) {
    const appRoute = AppRouter.APP_ROUTES[path];
    /** @type {string | null} */
    let templateUrl = null;
    /** @type {string | Node | null} */
    let staticContent = null;

    if (appRoute) {
      if (appRoute.template) {
        staticContent = appRoute.template();
      } else if (appRoute.componentURL) {
        staticContent = await this._loadComponent(
          appRoute.componentURL,
          appRoute.props,
          appRoute.wordingsURL
        );
      } else if (appRoute.templateName) {
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

    return { staticContent, templateUrl };
  }
}

export const router = new AppRouter(daucusRoutes, "dist/fragments/");
