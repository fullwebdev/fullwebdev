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
/** @typedef {import("@daucus/router").I18NRoutesConfig} I18NRoutesConfig */
/** @typedef {import("./network-error").NetworkErrorWording} NetworkErrorWording */

//#region networkError

/** @type {Record<Language, NetworkErrorWording>} */
const networkErrorWordings = {
  en: {
    heading: "Network error",
    image: {
      title: "blank canvas",
    },
    description: {
      message:
        "There seems to be a problem with your network connection or our server.",
      cta: ["Reload this page", "Back to the home page"],
    },
  },
  fr: {
    heading: "Contenu introuvable",
    image: {
      title: "page blanche",
    },
    description: {
      message:
        "Il semble y avoir un problème avec votre connexion au réseau ou notre serveur.",
      cta: ["Recharger la page", "Revenir à la page d'accueil"],
    },
  },
};

/**
 * @param {NetworkErrorWording} w
 */
const networkErrorTemplate = (w) => /* HTML */ `
  <div id="network-error">
    <style>
      #network-error {
        text-align: center;
        margin: 0 auto;
      }

      #network-error .network-error_cta {
        margin: 2rem auto;
      }

      @media screen and (max-width: 719px) {
        #network-error .network-error_illustration {
          margin: 1rem auto;
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          vertical-align: middle;
          overflow: hidden;
        }

        #network-error .network-error_illustration > svg {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      @media screen and (min-width: 720px) {
        #network-error .network-error_illustration {
          margin: 50px auto;
          width: 500px;
          height: 417px;
        }
      }
    </style>

    <h1>${w.heading}</h1>

    <div class="network-error_illustration">
      <svg width="560" height="350" viewBox="0 0 1120 699">
        <title>${w.image.title}</title>
        <circle cx="292.609" cy="213" r="213" fill="#f2f2f2" />
        <path
          d="M0 51.142c0 77.498 48.618 140.209 108.7 140.209"
          fill="#2f2e41"
        />
        <path
          d="M108.7 191.35c0-78.368 54.256-141.783 121.304-141.783m-190.62 8.601c0 73.614 31.003 133.183 69.317 133.183"
          fill="#002d61"
        />
        <path
          d="M108.7 191.35c0-100.137 62.711-181.167 140.209-181.167"
          fill="#2f2e41"
        />
        <path
          d="M85.833 192.339s15.415-.475 20.061-3.783 23.713-7.258 24.866-1.953 23.167 26.388 5.762 26.529-40.439-2.711-45.076-5.536-5.613-15.257-5.613-15.257z"
          fill="#a8a8a8"
        />
        <path
          d="M136.833 211.285c-17.404.14-40.44-2.711-45.076-5.536-3.531-2.15-4.939-9.869-5.41-13.43-.325.014-.514.02-.514.02s.976 12.433 5.613 15.257 27.672 5.676 45.077 5.536c5.023-.04 6.759-1.828 6.663-4.476-.698 1.6-2.614 2.599-6.353 2.629z"
          opacity=".2"
        />
        <ellipse cx="198.609" cy="424.5" rx="187" ry="25.44" fill="#3f3d56" />
        <ellipse cx="198.609" cy="424.5" rx="157" ry="21.359" opacity=".1" />
        <ellipse cx="836.609" cy="660.5" rx="283" ry="38.5" fill="#3f3d56" />
        <ellipse cx="310.609" cy="645.5" rx="170" ry="23.127" fill="#3f3d56" />
        <path
          d="M462.61 626c90 23 263-30 282-90m-435-277s130-36 138 80-107 149-17 172m-246.599 26.283s39.073-10.82 41.477 24.045-32.16 44.783-5.11 51.695"
          fill="none"
          stroke="#2f2e41"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M778.705 563.24l-7.878 50.295s-38.782 20.603-11.513 21.209 155.733 0 155.733 0 24.845 0-14.543-21.815l-7.878-52.719z"
          fill="#2f2e41"
        />
        <path
          d="M753.828 634.198c6.193-5.51 17-11.252 17-11.252l7.877-50.295 113.921.107 7.878 49.582c9.185 5.087 14.875 8.987 18.203 11.978 5.06-1.154 10.588-5.443-18.203-21.389l-7.878-52.719-113.921 3.03-7.878 50.295s-32.588 17.315-16.999 20.663z"
          opacity=".1"
        />
        <rect
          x="578.433"
          y="212.689"
          width="513.253"
          height="357.52"
          rx="18.046"
          fill="#2f2e41"
        />
        <path fill="#3f3d56" d="M595.703 231.777h478.713v267.837H595.703z" />
        <circle cx="835.059" cy="223.293" r="3.03" fill="#f2f2f2" />
        <path
          d="M1091.686 520.822v31.34a18.043 18.043 0 01-18.046 18.046H596.48a18.043 18.043 0 01-18.046-18.045v-31.34zM968.978 667.466v6.06h-326.01v-4.848l.449-1.212 8.035-21.815h310.86l6.666 21.815zm125.459-5.932c-.594 2.539-2.836 5.217-7.902 7.75-18.179 9.09-55.143-2.424-55.143-2.424s-28.48-4.848-28.48-17.573a22.725 22.725 0 012.497-1.485c7.643-4.043 32.984-14.02 77.917.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z"
          fill="#2f2e41"
        />
        <path
          d="M1094.437 661.534c-22.25 8.526-42.084 9.162-62.439-4.975-10.265-7.127-19.59-8.89-26.59-8.757 7.644-4.043 32.985-14.02 77.918.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z"
          opacity=".1"
        />
        <ellipse
          cx="1066.538"
          cy="654.135"
          rx="7.878"
          ry="2.424"
          fill="#f2f2f2"
        />
        <circle cx="835.059" cy="545.667" r="11.513" fill="#f2f2f2" />
        <path
          opacity=".1"
          d="M968.978 667.466v6.06h-326.01v-4.848l.449-1.212h325.561z"
        />
        <path fill="#2f2e41" d="M108.609 159h208v242h-208z" />
        <path
          fill="#3f3d56"
          d="M87.609 135h250v86h-250zm0 102h250v86h-250zm0 102h250v86h-250z"
        />
        <path fill="#002d61" opacity=".4" d="M271.609 150h16v16h-16z" />
        <path fill="#002d61" opacity=".8" d="M294.609 150h16v16h-16z" />
        <path fill="#002d61" d="M317.609 150h16v16h-16z" />
        <path fill="#002d61" opacity=".4" d="M271.609 251h16v16h-16z" />
        <path fill="#002d61" opacity=".8" d="M294.609 251h16v16h-16z" />
        <path fill="#002d61" d="M317.609 251h16v16h-16z" />
        <path fill="#002d61" opacity=".4" d="M271.609 352h16v16h-16z" />
        <path fill="#002d61" opacity=".8" d="M294.609 352h16v16h-16z" />
        <path fill="#002d61" d="M317.609 352h16v16h-16z" />
        <circle cx="316.609" cy="538" r="79" fill="#2f2e41" />
        <path fill="#2f2e41" d="M280.609 600h24v43h-24zm48 0h24v43h-24z" />
        <ellipse cx="300.609" cy="643.5" rx="20" ry="7.5" fill="#2f2e41" />
        <ellipse cx="348.609" cy="642.5" rx="20" ry="7.5" fill="#2f2e41" />
        <circle cx="318.609" cy="518" r="27" fill="#fff" />
        <circle cx="318.609" cy="518" r="9" fill="#3f3d56" />
        <path
          d="M239.976 464.532c-6.378-28.567 14.012-57.434 45.544-64.474s62.266 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648z"
          fill="#002d61"
        />
        <ellipse
          cx="417.215"
          cy="611.344"
          rx="39.5"
          ry="12.4"
          transform="rotate(-23.171 156.408 637.654)"
          fill="#2f2e41"
        />
        <ellipse
          cx="269.215"
          cy="664.344"
          rx="39.5"
          ry="12.4"
          transform="rotate(-23.171 8.408 690.654)"
          fill="#2f2e41"
        />
        <path
          d="M362.61 561c0 7.732-19.91 23-42 23s-43-14.268-43-22 20.908-6 43-6 42-2.732 42 5z"
          fill="#fff"
        />
      </svg>
    </div>

    <div class="network-error_description">
      <p>${w.description.message}</p>
      <div class="network-error_cta">
        <button
          onclick="window.location.reload();"
          class="call-to-action primary"
          rel="noopener noreferrer"
          target="_blank"
        >
          ${w.description.cta[0]}
        </button>
        <a href="/" class="call-to-action">${w.description.cta[1]}</a>
      </div>
    </div>
  </div>
`;
//#endregion networkError

const preloadCalendly = async () => {
  const { loadCalendly } = await import("./utils/calendly.js");
  return loadCalendly();
};
export class AppRouter extends AbstractRouter {
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

    /** @type {import('./app-routes').AppRoutes} */
    this._appRoutes = {
      "/": {
        templateName: "homepage",
      },
      "/404": {
        templateName: "not-found",
      },
      "/about": {
        templateName: "about",
      },
      "/network-error": {
        template: (/** @type {Language} */ lang) => {
          // could be optimized by creating both templates ahead of time
          // but this would slow down initial load a little
          const template = document.createElement("template");
          template.innerHTML = networkErrorTemplate(networkErrorWordings[lang]);
          const fragment = document.importNode(template.content, true);
          return fragment;
        },
      },
      "/learn": {
        componentURL: "./views/projects-list.js",
        wordings: "learn",
      },
      "/build": {
        componentURL: "./views/projects-list.js",
        wordings: "build",
      },
      "/news": {
        componentURL: "./views/projects-list.js",
        wordings: "news",
      },
      "/newsletter": {
        componentURL: "./views/newsletter.js",
        wordings: "newsletter",
      },
      "/services": {
        componentURL: "./views/services.js",
        wordings: "services/index",
      },
      "/services/individual": {
        componentURL: "./views/projects-list.js",
        wordings: "services/individual",
        prerun: preloadCalendly,
      },
      "/services/company": {
        componentURL: "./views/projects-list.js",
        wordings: "services/company",
        prerun: preloadCalendly,
      },
      "/tools/ce-name": {
        componentURL: "./views/ce-name.js",
        wordings: "ce-name",
      },
      "/tools/chrome-perf": {
        componentURL: "./views/chrome-perf.js",
        wordings: "chrome-perf",
      },
      "/rendering/benchmark/table": {
        componentURL: "./views/benchmark-table.js",
      },
      "/cv/nma": {
        componentURL: "./views/cv-nma.js",
        wordings: "cv-nma",
      },
      "/eni/ce-name": {
        redirectTo: "/tools/ce-name",
      },
      "/eni/benchmark": {
        redirectTo: "/docs/rendering",
      },
      "/eni/chrome-perf": {
        // redirectTo: "/docs/rendering/chrome-perf",
        redirectTo: "/tools/chrome-perf",
      },
      "/rendering": {
        redirectTo: "/docs/rendering",
      },
    };

    /** @private */
    this._findDaucusRoute = i18nRouteFinder(daucusRoutesConfig);
    /** @private */
    this._fragmentsDirectory = fragmentsDirectory;

    /** @private @type {Language | null} */
    this._forcedLanguage = null;

    /** @private @type {HTMLLoaderElement | null} */
    this._possibleOutlet = null;

    window.addEventListener("languagechange", () => {
      this._forcedLanguage = null;
      this.navigate(this.currentPath, { skipLocationChange: true });
    });

    /** @private @type {string | null} */
    this._currentDaucusProject = null;

    this._isUsingDaucus = false;
  }

  /** @type {Language} */
  get fallbackLanguage() {
    if (this.preferredLanguage === "fr") return "en";
    if (this.preferredLanguage === "en") return "fr";
    return "en";
  }

  /** @type {HTMLLoaderElement} */
  get outlet() {
    if (!this._possibleOutlet) {
      let outlet = /** @type {HTMLLoaderElement} */ (document.querySelector(
        "html-loader"
      ));
      if (!outlet) {
        outlet = /** @type {HTMLLoaderElement} */ (document.createElement(
          "html-loader"
        ));
      }
      outlet.addEventListener("html-loaded", async () => {
        const { stylePage } = await import("./pages.js");
        stylePage(this.outlet);
        this.scrollView();
        this.dispatchEvent(new CustomEvent("route-loaded"));
      });
      outlet.addEventListener("html-loading-error", () => {
        this.navigate("/network-error", { skipLocationChange: true });
      });
      this._possibleOutlet = outlet;
    }
    return this._possibleOutlet;
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

  scrollView() {
    window.scrollTo(0, 0);
    const heading = this.outlet.querySelector("h1");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
    if (this._scrollAnchor) {
      const el = this.outlet.querySelector(`#${this._scrollAnchor}`);
      if (el) {
        // el.scrollIntoView({behavior: "smooth", block: "start"});
        window.scrollTo({
          // header (3.6rem x 16 -> px) + small margin
          top: el.getBoundingClientRect().top - 75,
          behavior: "smooth",
        });
      }
    }
  }

  /**
   * @param {string} path
   * @param {NavigationOptions} [options]
   * @param {URLSearchParams} [params]
   * @param {string} [hash]
   *
   * @returns {Promise<[path: string | null, options?: NavigationOptions] | null>}
   */
  async renderOrRedirect(path, options, params, hash) {
    /** @private */
    this._scrollAnchor = hash;

    if (!path) {
      this.scrollView();
      return [null];
    }

    this.outlet.staticContent("");

    const langMatchInPath = /^\/(en|fr)(\/.*)?/.exec(path);
    if (!langMatchInPath) {
      return [`/${this.preferredLanguage}${path}`, { ...options }];
    }
    const [, lang, pathWithoutLang = "/"] = langMatchInPath;
    const langHasChanged = this.preferredLanguage !== lang;
    this._forcedLanguage = /** @type {Language} */ (lang);
    const {
      staticContent,
      templateUrl,
      translationTemplatePath,
      templatePath,
      daucusProject,
      menuHTML,
      redirection,
      templateLang,
      routeCallback,
    } = await this._findRoute(pathWithoutLang);

    if (routeCallback) {
      // Warning: don't wait for promise for better performance
      routeCallback();
    }

    if (redirection) {
      return [redirection, { ...options, redirection: true }];
    }

    if (!staticContent && !templateUrl) {
      return [
        "/404",
        { ...options, skipLocationChange: true, redirection: true },
      ];
    }

    this._updateDaucusProject(
      daucusProject,
      pathWithoutLang,
      templatePath,
      menuHTML
    );

    if (staticContent) {
      this.outlet.staticContent(staticContent);
      this.dispatchEvent(new CustomEvent("route-loaded"));
    } else if (templateUrl) {
      this.outlet.href = templateUrl;
    }

    if (translationTemplatePath) {
      this._pageMessageBox.innerHTML = this._wordings.noTranslation(
        translationTemplatePath.replace(/\.html$/, ".md")
      );
      this._pageMessageBox.style.display = "block";
    } else {
      this._pageMessageBox.style.display = "none";
    }

    if (templateLang) {
      this.outlet.lang = templateLang;
    }

    if (langHasChanged) {
      this.dispatchEvent(new CustomEvent("lang-changed"));
    }

    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  resetPageContainer() {
    const pageContainer = /** @type {HTMLElement} */ (document.getElementById(
      "page-container"
    ));
    const initialContent = pageContainer.childNodes;
    const fragment = document.createDocumentFragment();
    fragment.append(...initialContent);

    pageContainer.innerHTML = "";
    pageContainer.appendChild(this.outlet);
    this.outlet.staticContent(fragment.cloneNode(true));
  }

  /** @type {Language} */
  get preferredLanguage() {
    if (this._forcedLanguage) return this._forcedLanguage;
    /**
     * only use english if user doesn't want/undestand french at all as many
     * french speaking developers set their preferred language to "en"
     *
     * TODO: message to make this explicit to users as firebase does not
     * follow the same logic for localized index files
     */
    if (window.navigator.languages.find((code) => code.startsWith("fr")))
      return "fr";
    return "en";
  }

  set preferredLanguage(lang) {
    this._forcedLanguage = lang;
    this.navigate(this.currentPath.replace(/^\/(en|fr)/, `/${lang}`));
  }

  /**
   * @param {string | null} [projectName]
   * @param {string} [path]
   * @param {string | null} [templatePath]
   * @param {string} [menuHTML]
   *
   * @private
   */
  _updateDaucusProject(projectName, path, templatePath, menuHTML) {
    if (projectName) {
      if (!this._currentDaucusProject) {
        this.dispatchEvent(new CustomEvent("enter-daucus"));
      }

      this.dispatchEvent(
        new CustomEvent("daucus-route-matched", {
          detail: {
            path,
            oldProjectName: this._currentDaucusProject,
            newProjectName: projectName,
            editURL:
              templatePath &&
              `${AppRouter.GITHUB_REPO.url}edit/${
                AppRouter.GITHUB_REPO.branch
              }/website/${templatePath.replace(/\.html$/, ".md")}`,
            menuHTML,
          },
        })
      );

      this._currentDaucusProject = projectName;
    } else {
      if (this._currentDaucusProject) {
        this.dispatchEvent(new CustomEvent("exit-daucus"));
        this._currentDaucusProject = null;
      }

      this.dispatchEvent(
        new CustomEvent("app-route-matched", {
          detail: {
            path,
          },
        })
      );
    }
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
    const appRoute = this._appRoutes[path];
    /** @type {string | null} */
    let templateUrl = null;
    /** @type {string | Node | null} */
    let staticContent = null;
    let useFallbackLang = false;
    /** @type {string | null} */
    let templatePath = null;
    /** @type {string | null} */
    let translationTemplatePath = null;
    /** @type {string | null} */
    let daucusProject = null;
    /** @type {string | undefined} */
    let menuHTML;
    let routeCallback;

    if (appRoute) {
      routeCallback = appRoute.prerun;
      if (appRoute.redirectTo) {
        return { redirection: appRoute.redirectTo };
      }

      if (appRoute.template) {
        staticContent = appRoute.template(this.preferredLanguage);
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
        const langDir =
          daucusRouteMatch.lang === "__" ? "" : `${daucusRouteMatch.lang}/`;
        templatePath = `${daucusRouteMatch.projectName}/${langDir}${daucusRouteMatch.route.templateUrl}`;
        if (useFallbackLang) {
          translationTemplatePath = `${daucusRouteMatch.projectName}/${this.preferredLanguage}/${daucusRouteMatch.route.templateUrl}`;
        }
        templateUrl = `${this.base || "/"}${
          this._fragmentsDirectory
        }${templatePath}`;
        daucusProject = daucusRouteMatch.projectName;
        if (
          daucusRoutes[daucusProject] &&
          daucusRoutes[daucusProject][daucusRouteMatch.lang]
        ) {
          if (
            (useFallbackLang ||
              !daucusRoutes[daucusProject][this.preferredLanguage]) &&
            daucusRouteMatch.lang === "__" &&
            daucusRoutes[daucusProject].__.menu
          ) {
            menuHTML = daucusRoutes[daucusProject].__.menu;
          } else {
            menuHTML = daucusRoutes[daucusProject][this.preferredLanguage].menu;
          }
        }
      }
    }

    return {
      staticContent,
      templateUrl,
      templatePath,
      translationTemplatePath,
      daucusProject,
      templateLang: useFallbackLang
        ? this.fallbackLanguage
        : this.preferredLanguage,
      menuHTML,
      routeCallback,
    };
  }
}

export const router = new AppRouter(daucusRoutes, "dist/fragments/");
