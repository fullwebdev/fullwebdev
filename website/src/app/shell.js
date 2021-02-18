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

    /** @private @type {Map<ShellElementSelector | ShellElementListSelector, HTMLElement | NodeList>} */
    this._elementsCache = new Map();

    router.addEventListener("navigation-start", () => {
      this.querySelector("#edit-page-button").classList.add("hidden");
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

    this._mobileMediaQuery = window.matchMedia("(max-width: 1023px)");
    this._mobileMediaQuery.addEventListener("change", () => {
      // FIXME: menus doesn't always update there display after a window resize
      this._updateDaucusMenu();
    });
  }

  get w() {
    return this._wordings[this._router.preferredLanguage];
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

  updateShellLang(skipContentUpdate = false) {
    if (!this.querySelector("#main-footer .language-switch"))
      throw new Error("can't find .language-switch element in the main footer");

    const languageSwitchEl = this.querySelector(
      "#main-footer .language-switch"
    );

    if (!skipContentUpdate) {
      /**
       * @param {Element} el
       * @param {number} i
       */
      const addNavLinksText = (el, i) => {
        // eslint-disable-next-line no-param-reassign
        /** @type {HTMLElement} */ (el).innerText = this.w.navLinks[i];
      };

      this.querySelectorAll("#header-navigation .nav-link-inner").forEach(
        addNavLinksText
      );

      this.querySelectorAll("#modal-navigation .mdc-list-item__text").forEach(
        addNavLinksText
      );

      languageSwitchEl.innerHTML = this.w.languageSwitch;

      /** @type {HTMLElement}*/ (document.querySelector(
        "#edit-page-button .text"
      )).textContent = this.w.editButton;
    }

    const languageSwitchAnchor = languageSwitchEl.querySelector("a");

    if (!languageSwitchAnchor)
      throw new Error("can't find the language switch anchor");

    languageSwitchAnchor.addEventListener("click", (
      /** @type {MouseEvent} */ event
    ) => {
      event.preventDefault();
      // eslint-disable-next-line no-param-reassign
      this._languageChanged = true;
      const daucusMenu = /** @type {DaucusMenu} */ (this._currentMenuContainer.querySelector(
        "daucus-menu"
      ));
      daucusMenu.activePath = "";
      this._router.preferredLanguage = /** @type {EventTarget & { dataset: {lang: Language } }}*/ (event.target).dataset.lang;
      this.updateShellLang();
      window.scrollTo(0, 0);
    });
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
      if (!el) throw new Error(`can't find element with id "${selector}"`);
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

    const menuContainer = this._currentMenuContainer;
    const daucusMenu = /** @type {DaucusMenu} */ (menuContainer.querySelector(
      "daucus-menu"
    ));
    if (oldProjectName !== newProjectName || this._languageChanged) {
      daucusMenu.innerHTML = menuHTML;
      menuContainer.style.display = "block";
      this._languageChanged = false;
    }
    if (path !== daucusMenu.activePath) {
      daucusMenu.activePath = path;
    }
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

  get _currentMenuContainer() {
    return this._mobileMediaQuery.matches
      ? this.querySelector("#mobile-menu")
      : this.querySelector("#standard-menu");
  }
}
