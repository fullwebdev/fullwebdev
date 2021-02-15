// eslint-disable-next-line import/no-unresolved
import "../styles/mdc-drawer.css";
import { MDCDrawer } from "@material/drawer";

/** @typedef {import('./languages').Language} Language */
/** @typedef {import('./router').AppRouter} AppRouter */

export class AppShell {
  /**
   * @param {Record<Language, Array<string>>} navLinksText
   * @param {Record<Language, string>} languageSwitchContent
   * @param {AppRouter} router
   */
  constructor(navLinksText, languageSwitchContent, router) {
    this._navLinksText = navLinksText;
    this._languageSwitchContent = languageSwitchContent;
    this._router = router;
    this._languageSwitchEl = document.querySelector(
      "#main-footer .language-switch"
    );
    this._drawerEl = document.querySelector(".mdc-drawer");
  }

  initDrawer() {
    if (!this._drawerEl) throw new Error("can't find .mdc-drawer element");

    const drawer = MDCDrawer.attachTo(this._drawerEl);

    const drawerContent = this._drawerEl.querySelector(".mdc-drawer__content");
    const mainContentEl = document.getElementById("page-container");
    const burgerEl = document.getElementById("burger-menu");

    if (burgerEl) {
      burgerEl.addEventListener("click", () => {
        drawer.open = true;
      });
    }

    if (drawerContent && mainContentEl) {
      drawerContent.addEventListener("click", () => {
        drawer.open = false;
      });

      /** @type {HTMLElement | null } */
      const input = mainContentEl.querySelector("input, button");

      if (input) {
        document.body.addEventListener("MDCDrawer:closed", () => {
          input.focus();
        });
      }
    }
  }

  updateShellLang(skipContentUpdate = false) {
    if (!this._languageSwitchEl)
      throw new Error("can't find .language-switch element in the main footer");

    if (!skipContentUpdate) {
      /**
       * @param {HTMLElement} el
       * @param {number} i
       */
      const addNavLinksText = (el, i) => {
        // eslint-disable-next-line no-param-reassign
        el.innerText = this._navLinksText[this._router.preferredLanguage][i];
      };

      document
        .querySelectorAll("#header-navigation .nav-link-inner")
        // @ts-ignore cast Element to HTMLElement
        .forEach(addNavLinksText);

      // @ts-ignore #modal-navigation created in template
      document
        .getElementById("modal-navigation")
        .querySelectorAll(".mdc-list-item__text")
        // @ts-ignore cast Element to HTMLElement
        .forEach(addNavLinksText);

      this._languageSwitchEl.innerHTML = this._languageSwitchContent[
        this._router.preferredLanguage
      ];
    }

    const languageSwitchAnchor = this._languageSwitchEl.querySelector("a");

    if (!languageSwitchAnchor)
      throw new Error("can't find the language switch anchor");

    languageSwitchAnchor.addEventListener("click", (
      /** @type {MouseEvent} */ event
    ) => {
      event.preventDefault();
      // @ts-ignore target dataset defined in template
      // eslint-disable-next-line no-param-reassign
      this._router.preferredLanguage = event.target.dataset.lang;
      this.updateShellLang();
      window.scrollTo(0, 0);
    });
  }
}
