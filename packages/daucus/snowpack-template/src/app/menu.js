import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

const sortChildEntriesByPosition = (entryA, entryB) => {
  const positionA = (entryA && entryA[1] && entryA[1].position
    ? entryA[1].position
    : ''
  ).padEnd(10, '~');
  const positionB = (entryB && entryB[1] && entryB[1].position
    ? entryB[1].position
    : ''
  ).padEnd(10, '~');
  if (positionA > positionB) return 1;
  if (positionA < positionB) return -1;
  return 0;
};

const projectMenu = (routes, projectName) => {
  return (function menu(route, depth, routeName) {
    return `
      <div class="${depth === 0 ? 'menu-title' : ''} section-title">
        ${
          route.title && route.path !== undefined
            ? `<a href="/${projectName}/${route.path}">${route.title}</a>`
            : route.title || routeName
        }
      </div>
      ${
        route.children && depth < 3
          ? `
            <ul class=${depth > 0 ? 'child-menu' : 'menu'}>
              ${Object.entries(route.children)
                .sort(sortChildEntriesByPosition)
                .map(
                  ([childRouteName, childRoute]) =>
                    `<li>
                      ${menu(childRoute, depth + 1, childRouteName)}
                    </li>`,
                )
                .join('')}
            </ul>
          `
          : ''
      }
    `;
  })(routes[projectName], 0);
};

class DaucusMenu extends LitElement {
  constructor() {
    super();
    this._handleClick = this.__handleClick.bind(this);
    this._selectedTitle = null;
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

  set routes(routes) {
    this._routes = routes;
  }

  set project(name) {
    this.setAttribute('project', name);
  }

  get project() {
    return this.getAttribute('project');
  }

  render() {
    return html`
      <nav @click=${this._handleClick}>
        ${unsafeHTML(projectMenu(this._routes, this.project))}
      </nav>
    `;
  }

  /**
   *
   * @param {MouseEvent} event
   */
  __handleClick(event) {
    /** @type {HTMLElement} */
    const target = event.target;
    const titleEl = target.closest('.section-title');
    if (!titleEl) return;

    if (target.tagName === 'A') {
      if (this._selectedTitle) {
        this._selectedTitle.classList.remove('selected');
      }
      titleEl.classList.add('selected');
      this._selectedTitle = titleEl;
    }
    const parentMenu = titleEl.closest('ul');
    if (parentMenu) {
      const submenusOnSameLevel = parentMenu.querySelectorAll(
        ':scope > li > ul',
      );
      for (const submenu of submenusOnSameLevel) {
        submenu.style.display = 'none';
      }
    }
    /** @type {HTMLElement} */
    const potentialSubmenu = titleEl.nextElementSibling;
    if (potentialSubmenu && potentialSubmenu.tagName === 'UL') {
      potentialSubmenu.style.display = 'block';
    }
    return false;
  }
}

customElements.define('daucus-menu', DaucusMenu);
