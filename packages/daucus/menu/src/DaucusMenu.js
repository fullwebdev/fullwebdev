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

export class DaucusMenu extends HTMLElement {
  static get observedAttributes() {
    return ["project", "active-path"];
  }

  constructor() {
    super();
    /** @type {Set<Element>} */
    this._openedMenus = new Set();
    /** @type {Element | null} */
    this._activeSection = null;
    /** @type {{ [key:string]: { menu: string }}} */
    this._routes = {};
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.addEventListener("click", this.__handleClick.bind(this));

    const style = document.createElement("style");
    style.innerHTML = DaucusMenu.styles;
    shadowRoot.append(style);
    this._wrapper = document.createElement("div");
    shadowRoot.append(this._wrapper);
  }

  static get styles() {
    return `
      :host {
        padding: 2rem 2.5rem;
        margin: 0 auto;
        max-width: 740px;
        display: block;
        text-align: left;
      }

      .menu-title {
        font-weight: bold;
        font-size: 20px;
      }

      ul {
        list-style: none;
      }

      li {
        padding: 7px 0;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        font-family: inherit;
        cursor: pointer;
        font-size: 1em;
        color: var(--color-entry-without-index, #666);
        display: flex;
        align-items: center;
        width: 100%;
      }

      button:after {
        content: "›";
        width: 1em;
        height: 1em;
        font-weight: bold;
        color: var(--color-entry-without-index, #666);
        text-align: center;
        transition: all 0.1s;
        transform-origin: center;
        line-height: 1em;
        margin-left: .5em;
      }

      button[aria-pressed="true"]:after {
        transform: rotate(90deg);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .menu {
        padding: 0;
      }

      .child-menu {
        padding: 7px 0 0px 20px;
        overflow: hidden;
        max-height: 0px;
        transition: max-height 150ms ease-out;
      }

      .child-menu.open {
        max-height: 50vh;
        transition: max-height 1s ease-out;
      }

      .section-title.active {
        color: var(--color-active-title, #B20000);
        font-weight: bold
      }
    `;
  }

  get routes() {
    return this._routes;
  }

  set routes(routes) {
    this._routes = routes;
    this._render();
  }

  get project() {
    return this.getAttribute("project");
  }

  set project(project) {
    if (!project) {
      this.removeAttribute("project");
    } else {
      this.setAttribute("project", project);
    }
  }

  get activePath() {
    return this.getAttribute("active-path");
  }

  set activePath(path) {
    this.setAttribute("active-path", path || "");
  }

  get menuTemplate() {
    if (!this.project || !this.routes || !this.routes[this.project])
      return null;
    return this.routes[this.project].menu;
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "active-path") {
        const anchor = this._wrapper.querySelector(`a[href="${newValue}"]`);
        if (anchor) this._updateActiveSection(anchor);
      } else if (name === "project") {
        this._render();
      }
    }
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this._openedMenus.clear();
    this._activeSection = null;
    this._wrapper.innerHTML = this.menuTemplate || "";
  }

  /**
   * @param {Event} event
   */
  __handleClick(event) {
    if (!(event.target instanceof HTMLElement)) return;
    const { target } = event;
    if (target instanceof HTMLAnchorElement) {
      // FIXME: baseUrl
      this.activePath = new URL(target.href).pathname;
      return;
    }
    this._updateActiveSection(target);
  }

  /**
   *
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
