import { AbstractRouter } from "@modern-helpers/router";
import { i18nRouteFinder } from "@daucus/router";
// @ts-ignore generated file
// eslint-disable-next-line import/no-unresolved
import daucusRoutes from "../fragments/routes.js";
import "@daucus/html-loader/html-loader";

/** @typedef {import('@daucus/html-loader').HTMLLoaderElement} HTMLLoaderElement */
/** @typedef {import('@daucus/router/src/daucus-router').RouteMatchEvent} RouteMatchEvent */
/** @typedef {import('@daucus/router/src/daucus-router').NavigationOptions} NavigationOptions */
/** @typedef {import('./languages').Language} Language */
/** @typedef {import("@daucus/router/src/RoutesConfig").I18NRoutesConfig} I18NRoutesConfig */

export class AppRouter extends AbstractRouter {
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
        wordings: "learn",
      },
      "/build": {
        componentURL: "./projects-list.js",
        wordings: "build",
      },
      "/news": {
        componentURL: "./projects-list.js",
        wordings: "news",
      },
    };
  }

  static get WORDINGS() {
    return {
      en: {
        noTranslation: (/** @type {string} */ contributionFilePath) =>
          `<p>There is no English version of this page.</p><p><a href="${AppRouter.GITHUB_REPO.url}/new/${AppRouter.GITHUB_REPO.branch}?filename=${contributionFilePath}" target="_blank" rel="noopener noreferer">Create one on Github</a></p>`,
      },
      fr: {
        noTranslation: (/** @type {string} */ contributionFilePath) =>
          `<p>Cette page n'existe pas en français.</p><p><a href="${AppRouter.GITHUB_REPO.url}/new/${AppRouter.GITHUB_REPO.branch}?filename=${contributionFilePath}" target="_blank" rel="noopener noreferer">Démarrer la traduction sur Github</a></p>`,
      },
    };
  }

  static get GITHUB_REPO() {
    return {
      url: "https://github.com/fullwebdev/fullwebdev/",
      branch: "master",
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

    const pageContainer = document.getElementById("page-container");

    if (!pageContainer) throw new Error("no page-container element found");

    /** @private @type {HTMLElement} */
    this._pageContainer = pageContainer;

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
      outlet.addEventListener("html-loaded", async () => {
        const { stylePage } = await import("./pages.js");
        stylePage(this.outlet);
      });
      // @ts-ignore cast outlet from Element to HTMLLoaderElement
      this._outlet = outlet;
    }
    // @ts-ignore this._outlet can't be null here
    return this._outlet;
  }

  /** @private @type {HTMLElement} */
  get _pageMessageBox() {
    if (this._pageMessage === undefined) {
      this._pageMessage = document.getElementById("page-message");
    }
    if (this._pageMessage === null) {
      throw new Error("the page message box could not be found");
    }
    return this._pageMessage;
  }

  /** @private */
  get _wordings() {
    return AppRouter.WORDINGS[this.preferredLanguage];
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} [options]
   *
   * @returns {Promise<[path: string, options?: NavigationOptions] | null>}
   *
   */
  async renderOrRedirect(path, options) {
    const {
      staticContent,
      templateUrl,
      translationTemplatePath,
      templatePath,
      useDaucus,
    } = await this._findRoute(path);

    if (translationTemplatePath) {
      this._pageMessageBox.innerHTML = this._wordings.noTranslation(
        translationTemplatePath.replace(/\.html$/, ".md")
      );
      this._pageMessageBox.style.display = "block";
    } else {
      this._pageMessageBox.style.display = "none";
    }

    if (useDaucus) {
      this._pageContainer.classList.add("daucus-page");
    } else {
      this._pageContainer.classList.remove("daucus-page");
    }

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
    const initialContent = this._pageContainer.childNodes;
    const fragment = document.createDocumentFragment();
    fragment.append(...initialContent);
    AppRouter.APP_ROUTES["/"].template = () => fragment.cloneNode(true);

    /** @type {HTMLLoaderElement} */
    // @ts-ignore cast outlet from Element to HTMLLoaderElement
    const outlet = document.createElement("html-loader");
    this._pageContainer.innerHTML = "";
    this._pageContainer.appendChild(outlet);
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
   * @param {string} [wordings]
   *
   * @private
   */
  async _loadComponent(path, props = {}, wordings) {
    const { selector } = await import(path);
    const el = document.createElement(selector);
    el.lang = this.preferredLanguage;
    if (wordings) {
      try {
        const wordingsModule = await import(
          `./wordings/${this.preferredLanguage}/${wordings}.js`
        );
        el.wording = wordingsModule.default;
      } catch (e) {
        return null;
      }
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
    /** @type {string | null} */
    let templatePath = null;
    /** @type {string | null} */
    let translationTemplatePath = null;
    let useDaucus = false;

    if (appRoute) {
      if (appRoute.template) {
        staticContent = appRoute.template();
      } else if (appRoute.componentURL) {
        staticContent = await this._loadComponent(
          appRoute.componentURL,
          appRoute.props,
          appRoute.wordings
        );
      } else if (appRoute.templateName) {
        templateUrl = `${this._fragmentsDirectory}app/${this.preferredLanguage}/${appRoute.templateName}.html`;
      }
    } else {
      let daucusRouteMatch = this._findDaucusRoute(
        path,
        this.preferredLanguage
      );
      if (!daucusRouteMatch.route || !daucusRouteMatch.route.templateUrl) {
        useFallbackLang = true;
        daucusRouteMatch = this._findDaucusRoute(path, this.fallbackLanguage);
      }
      if (daucusRouteMatch.route && daucusRouteMatch.route.templateUrl) {
        templatePath = `${daucusRouteMatch.projectName}/${daucusRouteMatch.lang}/${daucusRouteMatch.route.templateUrl}`;
        if (useFallbackLang) {
          translationTemplatePath = `${daucusRouteMatch.projectName}/${this.preferredLanguage}/${daucusRouteMatch.route.templateUrl}`;
        }
        templateUrl = `${this.base || "/"}${
          this._fragmentsDirectory
        }${templatePath}`;
        useDaucus = true;
      }
    }

    return {
      staticContent,
      templateUrl,
      templatePath,
      translationTemplatePath,
      useDaucus,
    };
  }
}

export const router = new AppRouter(daucusRoutes, "dist/fragments/");
