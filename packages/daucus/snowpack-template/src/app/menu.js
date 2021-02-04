// FIXME: add a onkey enter event handler for links (a11y)
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

/**
 * @typedef {import('@daucus/router/src/RoutesConfig').ProjectRoutesConfig} DaucusProjectRoutesConfig
 * @typedef {import('@daucus/router/src/RoutesConfig').RoutesConfig} DaucusRoutesConfig
 * @typedef {import('@daucus/router/src/RoutesConfig').Route} DaucusRoute
 */
class DaucusMenu extends LitElement {
  static get properties() {
    return {
      routes: { type: Object, attribute: false },
      project: { type: String },
    };
  }

  constructor() {
    super();
    this._handleClick = this.__handleClick.bind(this);
    this._selectedTitle = null;
    /** @type {DaucusRoutesConfig} */
    this.routes = {};
    this.project = 'docs';
  }

  static get styles() {
    return css`
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

      a {
        color: inherit;
        text-decoration: none;
      }

      .menu {
        padding: 0;
      }

      .child-menu {
        display: none;
        padding: 7px 0 0px 20px;
      }

      .section-title.selected {
        border-left: solid red 5px;
        padding-left: 5px;
        margin-left: -10px;
      }
    `;
  }

  render() {
    // @ts-ignore this._routes can't be undefined if truthy
    const projectConfig = this.routes[this.project];
    if (!projectConfig) {
      console.warn(`can't find any routes for project ${this.project}`);
      return;
    }
    return html`
      <nav @click=${this._handleClick}>
        ${this.routes ? unsafeHTML(projectConfig.menu) : ''}
      </nav>
    `;
  }

  /**
   *
   * @param {MouseEvent} event
   */
  __handleClick(event) {
    /** @type {HTMLElement | null} */
    let target;
    if (event.target instanceof HTMLElement) {
      target = event.target;
    } else {
      return;
    }

    const titleEl = target.closest('.section-title');
    if (!titleEl) return;

    if (target instanceof HTMLAnchorElement) {
      if (this._selectedTitle) {
        this._selectedTitle.classList.remove('selected');
      }
      titleEl.classList.add('selected');
      this._selectedTitle = titleEl;
    }
    const parentMenu = titleEl.closest('ul');
    if (parentMenu) {
      /** @type {NodeListOf<HTMLUListElement>} */
      const submenusOnSameLevel = parentMenu.querySelectorAll(
        ':scope > li > ul',
      );
      for (const submenu of submenusOnSameLevel) {
        submenu.style.display = 'none';
      }
    }
    const potentialSubmenu = titleEl.nextElementSibling;
    if (potentialSubmenu && potentialSubmenu instanceof HTMLUListElement) {
      potentialSubmenu.style.display = 'block';
    }
  }
}

customElements.define('daucus-menu', DaucusMenu);
