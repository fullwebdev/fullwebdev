/* eslint-disable lit-a11y/click-events-have-key-events */

/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

/**
 * @param {Element} menuEl
 * @param {boolean} shouldBePressed
 */
function updateTitlePressed(menuEl, shouldBePressed) {
  if (!menuEl.classList.contains("collapsible")) return;
  const titleEl = menuEl.previousElementSibling;
  if (!titleEl) return;
  const possibleButton = titleEl.firstElementChild;
  if (!possibleButton || !(possibleButton instanceof HTMLButtonElement)) return;
  possibleButton.setAttribute(
    "aria-pressed",
    shouldBePressed ? "true" : "false"
  );
}

/**
 * render the menu of a Daucus project from its configuration
 *
 * @element daucus-menu
 *
 */
export class DaucusMenu extends HTMLElement {
  static get observedAttributes() {
    return ["active-path"];
  }

  constructor() {
    super();
    /**
     * @type {Set<Element>}
     * @private
     */
    this._openedMenus = new Set();
    /**
     * @type {Element | null}
     * @private
     */
    this._activeSection = null;
    /**
     * @type {{ [key:string]: { menu: string }}}
     * @private
     */
    this._routes = {};
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.addEventListener("click", this.__handleClick.bind(this));

    const style = document.createElement("style");
    style.innerHTML = DaucusMenu.styles;
    shadowRoot.append(style);
    /** @private */
    this._slot = document.createElement("slot");
    this._slot.addEventListener("slotchange", () => {
      if (this._activeSection) {
        this._updateActiveSection(this._activeSection);
      }
    });
    shadowRoot.append(this._slot);
  }

  static get styles() {
    return `
      :host {
        display: block;
      }
    `;
  }

  /**
   * route path to select in the menu
   */
  get activePath() {
    return this.getAttribute("active-path");
  }

  set activePath(path) {
    this.setAttribute("active-path", path || "");
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "active-path") {
        const anchor = this.querySelector(`a[href="${newValue}"]`);
        if (anchor) this._updateActiveSection(anchor);
      }
    }
  }

  connectedCallback() {
    this._clear();
  }

  /**
   * @private
   */
  _clear() {
    this._openedMenus.clear();
    this._activeSection = null;
  }

  /**
   * @private
   * @param {Event} event
   */
  __handleClick(event) {
    if (!(event.target instanceof HTMLElement)) return;
    const { target } = event;
    if (target instanceof HTMLAnchorElement) {
      // FIXME: baseUrl
      this.activePath = new URL(target.href).pathname;
    }
    this._updateActiveSection(target);
  }

  /**
   * @private
   * @param {Element} anchor
   */
  _updateActiveSection(anchor) {
    const titleEl = anchor.closest(".section-title");
    if (!titleEl) return;
    if (titleEl.classList.contains("active")) return;

    const possibleNextMenu = titleEl.nextElementSibling;

    if (anchor instanceof HTMLButtonElement) {
      const shouldBePressed = anchor.getAttribute("aria-pressed") !== "true";
      anchor.setAttribute("aria-pressed", shouldBePressed ? "true" : "false");
      if (
        possibleNextMenu &&
        possibleNextMenu.classList.contains("child-menu")
      ) {
        const isOpen = possibleNextMenu.classList.contains("open");
        if (possibleNextMenu.classList.contains("open")) {
          possibleNextMenu.classList.remove("open");
          this._openedMenus.delete(possibleNextMenu);
        } else {
          possibleNextMenu.classList.add("open");
          this._openedMenus.add(possibleNextMenu);
          // @ts-ignore should always be an HTMLElement
          possibleNextMenu.focus();
        }
        updateTitlePressed(possibleNextMenu, !isOpen);
      }
      return;
    }

    if (anchor instanceof HTMLAnchorElement) {
      titleEl.classList.add("active");
      if (this._activeSection) this._activeSection.classList.remove("active");
      this._activeSection = titleEl;
    }

    /** @type {Element | null} */
    let nextMenuTitle;
    /** @type {Set<Element>} */
    const menusToOpen = new Set();
    if (possibleNextMenu && possibleNextMenu.classList.contains("child-menu")) {
      menusToOpen.add(possibleNextMenu);
    }

    nextMenuTitle = titleEl;
    do {
      /** @type {Element | null} */
      const newParentMenu = nextMenuTitle.closest("ul.child-menu");
      if (newParentMenu) {
        menusToOpen.add(newParentMenu);
        nextMenuTitle = newParentMenu.previousElementSibling;
      } else {
        nextMenuTitle = null;
      }
    } while (nextMenuTitle);

    this._openedMenus.forEach((menuEl) => {
      if (menusToOpen.has(menuEl)) {
        menuEl.classList.add("open");
        menusToOpen.delete(menuEl);
        updateTitlePressed(menuEl, true);
      } else if (anchor instanceof HTMLAnchorElement) {
        menuEl.classList.remove("open");
        this._openedMenus.delete(menuEl);
        updateTitlePressed(menuEl, false);
      }
    });

    menusToOpen.forEach((menuEl) => {
      menuEl.classList.add("open");
      this._openedMenus.add(menuEl);
      updateTitlePressed(menuEl, true);
    });
  }
}
