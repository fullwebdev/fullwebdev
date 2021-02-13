import { AbstractRouter } from "@modern-helpers/router";
import { i18nRouteFinder } from "@daucus/router";
import daucusRoutes from "../fragments/routes.js";
import "@daucus/html-loader/html-loader";

/** @typedef {import('@daucus/html-loader').HTMLLoaderElement} HTMLLoaderElement */
/** @typedef {import('@daucus/router/src/daucus-router').RouteMatchEvent} RouteMatchEvent */
/** @typedef {import('@daucus/router/src/daucus-router').NavigationOptions} NavigationOptions */
/** @typedef {import('./languages').Language} Language */
/** @typedef {import("@daucus/router/src/RoutesConfig").I18NRoutesConfig} I18NRoutesConfig */

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

  /**
   * @param {I18NRoutesConfig} daucusRoutesConfig
   * @param {string} fragmentsDirectory
   */
  constructor(daucusRoutesConfig, fragmentsDirectory) {
    super();
    /** @private */
    this._findDaucusRoute = i18nRouteFinder(daucusRoutesConfig);
    /** @private */
    this._fragmentsDirectory = fragmentsDirectory;

    /** @private @type {Language | null} */
    this._forcedLanguage = null;

    /** @private @type {HTMLLoaderElement | null} */
    this._outlet = null;

    window.addEventListener("languagechange", () => {
      this.navigate(this.currentPath, { skipLocationChange: true });
    });
  }

  /** @type {Language} */
  get fallbackLanguage() {
    if (this.preferredLanguage === "fr") return "en";
    if (this.preferredLanguage === "en") return "fr";
    return "en";
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
   *
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

  /** @type {Language} */
  get preferredLanguage() {
    if (this._forcedLanguage) return this._forcedLanguage;
    // only use english if user doesn't want/undestand french at all as may
    // french speaking developers set their preferred language to "en"
    if (!window.navigator.languages.find((code) => code.startsWith("fr")))
      return "en";
    return "fr";
  }

  set preferredLanguage(lang) {
    this._forcedLanguage = lang;
    this.navigate(this.currentPath, { skipLocationChange: true });
  }

  /**
   * @param {string} path
   * @param {import('./app-routes.js').ComponentProps} props
   * @param {string} [wordingsURL]
   *
   * @private
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
   *
   * @private
   */
  async _findRoute(path) {
    const appRoute = AppRouter.APP_ROUTES[path];
    /** @type {string | null} */
    let templateUrl = null;
    /** @type {string | Node | null} */
    let staticContent = null;
    let useFallbackLang = false;

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
      let [daucusProjectName, daucusRoute] = this._findDaucusRoute(
        path,
        this.preferredLanguage
      );
      if (!daucusRoute) {
        useFallbackLang = true;
        [daucusProjectName, daucusRoute] = this._findDaucusRoute(
          path,
          this.fallbackLanguage
        );
      }
      if (daucusRoute && daucusRoute.templateUrl) {
        templateUrl = `${this.base || "/"}${
          this._fragmentsDirectory
        }${daucusProjectName}/${this.preferredLanguage}/${
          daucusRoute.templateUrl
        }`;
      }
    }

    return { staticContent, templateUrl, useFallbackLang };
  }
}

export const router = new AppRouter(daucusRoutes, "dist/fragments/");
