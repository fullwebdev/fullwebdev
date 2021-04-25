import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { live } from 'lit-html/directives/live';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

import '@daucus/router/daucus-router';
import '@daucus/html-loader/html-loader';
// @ts-ignore is only be available after daucus build
// eslint-disable-next-line import/no-unresolved
import daucusRoutes from '../templates/routes.js';
import '@daucus/menu/daucus-menu';

class AppRoot extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      _activePath: { type: String, attribute: false },
      _templateHRef: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    this.message = 'Become a full web developer';
    /** @private */
    this._handleNavigationEnd = this.__handleNavigationEnd.bind(this);
    /** @private */
    this._handleRouteMatch = this.__handleRouteMatch.bind(this);
    /** @private */
    this._handleProjectChange = this.__handleProjectChange.bind(this);
    /** @private */
    this._currentProject = '';
  }

  get _menuHTML() {
    // @ts-ignore daucusRouter typings
    if (
      daucusRoutes[this._currentProject] &&
      daucusRoutes[this._currentProject].menu
    ) {
      // @ts-ignore daucusRouter typings
      return daucusRoutes[this._currentProject].menu;
    }
    return '';
  }

  static get styles() {
    return css`
      .app-wrapper {
        display: flex;
        flex-flow: column;
        min-height: 100vh;
      }

      header {
        text-align: center;
        padding: 1rem 0;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
        position: relative;
      }

      header > * {
        margin: 0;
      }

      .app-content {
        flex-grow: 2;
        display: flex;
        flex-flow: row;
        min-height: 80vh;
      }

      @media screen and (max-width: 719px) {
        .app-content {
          flex-direction: column;
        }
      }

      aside {
        background-color: #f2f2f2;
        flex-shrink: 0;
        min-width: 250px;
      }

      footer {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2rem 1rem;
      }

      main {
        flex-grow: 2;
        margin: 2rem auto;
        max-width: 1024px;
        padding: 0 50px;
        text-align: justify;
      }

      daucus-router-outlet h1 {
        margin-top: 0;
      }

      daucus-menu {
        padding: 2rem 2.5rem;
        margin: 0 auto;
        max-width: 740px;
        text-align: left;
      }

      daucus-menu .menu-title {
        font-weight: bold;
        font-size: 20px;
      }

      daucus-menu ul {
        list-style: none;
      }

      daucus-menu li {
        padding: 7px 0;
      }

      daucus-menu button {
        background: none;
        border: none;
        padding: 0;
        font-family: inherit;
        cursor: pointer;
        font-size: 1em;
        color: var(--daucus-menu-default-color, #666);
        display: flex;
        align-items: center;
        width: 100%;
      }

      daucus-menu button:after {
        content: '›';
        width: 1em;
        height: 1em;
        font-weight: bold;
        color: var(--daucus-menu-default-color, #666);
        text-align: center;
        transition: all 0.1s;
        transform-origin: center;
        line-height: 1em;
        margin-left: 0.5em;
      }

      daucus-menu button[aria-pressed='true']:after {
        transform: rotate(90deg);
      }

      daucus-menu a {
        color: inherit;
        text-decoration: none;
      }

      daucus-menu .menu {
        padding: 0;
      }

      daucus-menu .child-menu {
        padding: 7px 0 0px 20px;
        overflow: hidden;
        max-height: 0px;
        transition: max-height 150ms ease-out;
      }

      daucus-menu .child-menu.open {
        max-height: 50vh;
        transition: max-height 1s ease-out;
      }

      daucus-menu .section-title.active {
        color: var(--daucus-menu-active-color, #b20000);
        font-weight: bold;
      }
    `;
  }

  /**
   * @private
   * @param {CustomEvent & { detail: { path: string; }; }} e
   */
  __handleNavigationEnd(e) {
    this._activePath = e.detail.path;
  }

  /**
   * @private
   * @param {{ detail: { templateHRef: string; }; }} e
   */
  __handleRouteMatch(e) {
    this._templateHRef = e.detail.templateHRef;
  }

  /**
   * @private
   * @param {{ detail: { projectName: string; }; }} e
   */
  __handleProjectChange(e) {
    this._currentProject = e.detail.projectName;
  }

  render() {
    return html`
      <daucus-router
        .routes=${daucusRoutes}
        default-path="/docs/"
        @navigation-end=${this._handleNavigationEnd}
        @route-match=${this._handleRouteMatch}
        @project-change=${this._handleProjectChange}
      >
        <div class="app-wrapper">
          <header>
            <h1>Daucus + LitElement + Snowpack</h1>
            <p>Edit <code>src/app-root.js</code> and save to reload.</p>
          </header>
          <div class="app-content">
            <aside>
              <daucus-menu active-path=${live(this._activePath)}>
                ${unsafeHTML(this._menuHTML)}
              </daucus-menu>
            </aside>
            <main>
              <html-loader href=${ifDefined(this._templateHRef)}></html-loader>
            </main>
          </div>
          <footer>
            <a
              class="link"
              href="https://fullweb.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${this.message}
            </a>
          </footer>
        </div>
      </daucus-router>
    `;
  }
}

customElements.define('app-root', AppRoot);
