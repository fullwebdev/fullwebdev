/* eslint-disable no-param-reassign */

import { MDCDrawer } from "@material/drawer";

/** @typedef {import('./languages').Language} Language */
/** @typedef {import('./router').AppRouter} AppRouter */
/** @typedef {import('./shell-wordings').ShellWordings} ShellWordings */
/** @typedef {import("@daucus/menu").DaucusMenu} DaucusMenu */
/** @typedef {import('./shell-elements').ShellElementSelector} ShellElementSelector */
/** @typedef {import('./shell-elements').ShellElementListSelector} ShellElementListSelector */
/** @typedef {import('./routing-events').DaucusRouteMatchedEvent} DaucusRouteMatchedEvent */
/** @typedef {import('./routing-events').AppRouteMatchedEvent} AppRouteMatchedEvent */

export class AppShell {
  /**
   * @param {ShellWordings} wordings
   * @param {AppRouter} router
   */
  constructor(wordings, router) {
    this._wordings = wordings;
    this._router = router;

    /** @type {ShellElementSelector[]} */
    this._languageSwitchersSelectors = [
      "#nav__language-switch",
      "#header__language-switch",
    ];

    /** @private @type {Map<ShellElementSelector | ShellElementListSelector, HTMLElement | NodeList>} */
    this._elementsCache = new Map();

    router.addEventListener("navigation-start", () => {
      const editPageButton = this.querySelector("#edit-page-button");
      editPageButton.classList.add("hidden");
      editPageButton.removeAttribute("href");
      const pageSpinner = this.querySelector("#page-spinner");
      pageSpinner.classList.add("pending");
      setTimeout(() => {
        if (pageSpinner.classList.contains("pending")) {
          pageSpinner.classList.add("active");
        }
      }, 200);
    });

    router.addEventListener("route-loaded", () => {
      this.querySelector("#page-spinner").classList.remove("active", "pending");
      this.querySelector("#edit-page-button").classList.remove("hidden");
    });

    router.addEventListener("enter-daucus", () => {
      this.querySelector("#page-container").classList.add("daucus-page");
    });

    router.addEventListener("exit-daucus", () => {
      this.querySelector("#page-container").classList.remove("daucus-page");
      this.querySelector("#mobile-menu").style.display = "none";
      this.querySelector("#standard-menu").style.display = "none";
    });

    router.addEventListener("lang-changed", () => {
      this.updateShellLang();
    });

    router.addEventListener("daucus-route-matched", (e) => {
      this._updateDaucusMenu(/** @type {DaucusRouteMatchedEvent} */ (e));
      this._updateAppMenu(/** @type {AppRouteMatchedEvent} */ (e));

      const editPageButton = /** @type {HTMLAnchorElement} */ (this.querySelector(
        "#edit-page-button"
      ));
      const { editURL } = /** @type {CustomEvent} */ (e).detail;
      if (editURL) {
        editPageButton.href = editURL;
      } else {
        editPageButton.removeAttribute("href");
      }
    });

    router.addEventListener("app-route-matched", (e) =>
      this._updateAppMenu(/** @type {AppRouteMatchedEvent} */ (e))
    );

    this._languageSwitchersSelectors.forEach((selector) => {
      const el = this.querySelector(selector);
      el.addEventListener("click", (event) =>
        this._languageSwitchClickListener(event)
      );
    });
  }

  get w() {
    return this._wordings[this._router.preferredLanguage];
  }

  get daucusMenus() {
    return [
      this.querySelector("#mobile-menu"),
      this.querySelector("#standard-menu"),
    ].map((container) => ({
      container,
      menu: /** @type {DaucusMenu} */ (container.querySelector("daucus-menu")),
    }));
  }

  initDrawer() {
    const drawerEl = this.querySelector("#mobile-drawer");
    const drawer = MDCDrawer.attachTo(drawerEl);

    const drawerContent = drawerEl.firstElementChild;
    const pageContainer = this.querySelector("#page-container");
    const burgerEl = this.querySelector("#burger-menu");

    if (burgerEl) {
      burgerEl.addEventListener("click", () => {
        drawer.open = true;
      });
    }

    if (drawerContent && pageContainer) {
      drawerContent.addEventListener("click", () => {
        drawer.open = false;
      });

      /** @type {HTMLElement | null } */
      const input = pageContainer.querySelector("input, button");

      if (input) {
        document.body.addEventListener("MDCDrawer:closed", () => {
          input.focus();
        });
      }
    }
  }

  /**
   * @param {ShellElementSelector} selector
   */
  _updateLanguageSwitcherContent(selector) {
    const switcherContainer = this.querySelector(selector);
    /** @type {HTMLElement | null} */
    // prettier-ignore
    const switcherButton =
      (/** @type {HTMLElement | null } */ switcherContainer.firstElementChild);
    if (!switcherButton) throw new Error(`can't find ${selector} first child`);
    const isFrench = this._router.preferredLanguage === "fr";
    switcherButton.setAttribute("aria-checked", isFrench.toString());
    switcherButton.dataset.lang = isFrench ? "en" : "fr";
    const switcherLabel = switcherContainer.lastElementChild;
    if (!switcherLabel) throw new Error(`can't find ${selector} last child`);
    switcherLabel.textContent = this.w.languageSwitcherLabel;
  }

  /**
   * @param {MouseEvent} event
   */
  _languageSwitchClickListener(event) {
    event.preventDefault();
    this._languageChanged = true;
    this.daucusMenus.forEach(({ menu }) => {
      menu.activePath = "";
    });
    this._router.preferredLanguage = /** @type {EventTarget & { dataset: {lang: Language } }}*/ (event.target).dataset.lang;
    this.updateShellLang();
    window.scrollTo(0, 0);
  }

  updateShellLang(skipContentUpdate = false) {
    if (!this.querySelector("#main-footer .language-switch"))
      throw new Error("can't find .language-switch element in the main footer");

    if (!this.querySelector("#nav__language-switch"))
      throw new Error("can't find language-switcher in nav");

    if (!this.querySelector("#header__language-switch"))
      throw new Error("can't find language-switcher in header");

    const footerLanguageSwitchEl = this.querySelector(
      "#main-footer .language-switch"
    );

    if (!skipContentUpdate) {
      /**
       * @param {Element} el
       * @param {number} i
       */
      const addNavLinksText = (el, i) => {
        /** @type {HTMLElement} */ (el).innerText = this.w.navLinks[i];
      };

      this.querySelectorAll("#header-navigation .nav-link-inner").forEach(
        addNavLinksText
      );

      this.querySelectorAll("#modal-navigation .mdc-list-item__text").forEach(
        addNavLinksText
      );

      this._languageSwitchersSelectors.forEach((selector) =>
        this._updateLanguageSwitcherContent(selector)
      );

      footerLanguageSwitchEl.innerHTML = this.w.languageSwitch;

      /** @type {HTMLElement}*/ (document.querySelector(
        "#edit-page-button .text"
      )).textContent = this.w.editButton;

      /** @type {HTMLElement}*/ (document.querySelector(
        "#main-footer .footer__license"
      )).innerHTML = this.w.copyright;

      if (this._router.preferredLanguage) {
        document.documentElement.lang = this._router.preferredLanguage;
      }
    }

    const languageSwitchAnchor = footerLanguageSwitchEl.querySelector("a");

    if (!languageSwitchAnchor)
      throw new Error("can't find the language switch anchor");

    languageSwitchAnchor.addEventListener("click", (event) =>
      this._languageSwitchClickListener(event)
    );
  }

  /**
   * @param {ShellElementSelector} selector
   *
   * @returns {HTMLElement}
   */
  querySelector(selector) {
    let el = /** @type {HTMLElement | null | undefined} */ (this._elementsCache.get(
      selector
    ));
    if (!el) {
      el = /** @type {HTMLElement} */ (document.querySelector(selector));
      if (!el) throw new Error(`can't find element "${selector}"`);
      this._elementsCache.set(selector, el);
    }
    return el;
  }

  /**
   * @param {ShellElementListSelector} selector
   *
   * @returns {NodeListOf<Element>}
   */
  querySelectorAll(selector) {
    let elmts = /** @type {NodeListOf<Element> | undefined} */ (this._elementsCache.get(
      selector
    ));
    if (!elmts) {
      elmts = document.querySelectorAll(selector);
      if (!elmts.length)
        throw new Error(`can't find elements for selector "${selector}"`);
      this._elementsCache.set(selector, elmts);
    }
    return elmts;
  }

  /**
   *
   * @param {DaucusRouteMatchedEvent} [event]
   */
  async _updateDaucusMenu(event) {
    let detail;
    if (event) {
      detail = event.detail;
      if (detail.menuHTML) {
        this._daucusMenuData = event.detail;
      }
    } else if (this._daucusMenuData) {
      detail = this._daucusMenuData;
    } else {
      return;
    }
    const { menuHTML, path, oldProjectName, newProjectName } = detail;
    if (!this._daucusMenuModule) {
      // @ts-ignore ref to lerna package
      this._daucusMenuModule = import("@daucus/menu/daucus-menu");
      try {
        await this._daucusMenuModule;
      } catch {
        this._daucusMenuModule = null;
        this._router.navigate("/network-error", { skipLocationChange: true });
      }
      this._daucusMenuModule = true;
    }

    this.daucusMenus.forEach(({ container, menu }) => {
      if (oldProjectName !== newProjectName || this._languageChanged) {
        menu.innerHTML = menuHTML;
        container.style.display = "block";
      }
      if (path !== menu.activePath) {
        menu.activePath = path;
      }
    });
    this._languageChanged = false;
  }

  /**
   * @param {AppRouteMatchedEvent} event
   */
  _updateAppMenu({ detail: { path } }) {
    this.querySelectorAll("#modal-navigation .mdc-list-item").forEach((el) => {
      if (el.classList.contains("mdc-list-item--activated")) {
        el.classList.remove("mdc-list-item--activated");
        el.removeAttribute("aria-current");
      } else if (el.getAttribute("href") === path) {
        el.classList.add("mdc-list-item--activated");
        el.setAttribute("aria-current", "page");
      }
    });

    this.querySelectorAll("#header-navigation .nav-link").forEach((el) => {
      if (el.classList.contains("nav-link--activated")) {
        el.classList.remove("nav-link--activated");
        el.removeAttribute("aria-current");
      } else if (el.getAttribute("href") === path) {
        el.classList.add("nav-link--activated");
        el.setAttribute("aria-current", "page");
      }
    });
  }
}
