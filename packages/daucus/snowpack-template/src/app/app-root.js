import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { live } from 'lit-html/directives/live';

/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

import '@daucus/router/daucus-router';
import '@daucus/html-loader/html-loader';
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
    this._handleNavigationEnd = this.__handleNavigationEnd.bind(this);
    this._handleRouteMatch = this.__handleRouteMatch.bind(this);
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
    `;
  }

  /**
   * @param {CustomEvent & { detail: { path: string; }; }} e
   */
  __handleNavigationEnd(e) {
    this._activePath = e.detail.path;
  }

  /**
   * @param {{ detail: { templateHRef: string; }; }} e
   */
  __handleRouteMatch(e) {
    this._templateHRef = e.detail.templateHRef;
  }

  render() {
    return html`
      <daucus-router
        .routes=${daucusRoutes}
        default-path="/docs/"
        @navigation-end=${this._handleNavigationEnd}
        @route-match=${this._handleRouteMatch}
      >
        <div class="app-wrapper">
          <header>
            <h1>Daucus + LitElement + Snowpack</h1>
            <p>Edit <code>src/app-root.js</code> and save to reload.</p>
          </header>
          <div class="app-content">
            <aside>
              <daucus-menu
                .routes=${daucusRoutes}
                project="docs"
                active-path=${live(this._activePath)}
              ></daucus-menu>
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
