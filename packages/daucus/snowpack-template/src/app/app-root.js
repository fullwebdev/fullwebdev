import { LitElement, html, css } from 'lit-element';

/*
 * You can also use @daucus/html-loader and/or @modern-helpers/router
 * instead of @daucus/router if you need less abstraction
 *
 * import '@daucus/html-loader/html-loader.js';
 * import { Router } from '@modern-helpers/router.js;
 */

import '@daucus/router/daucus-router';
import '@daucus/router/daucus-router-outlet';
// @ts-ignore
import daucusRoutes from '/templates/routes.js';
import './menu.js';

class AppRoot extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.message = 'Become a full web developer';
  }

  static get styles() {
    return css`
      :host {
        padding: 2rem 2.5rem;
        margin: 0 auto;
        max-width: 740px;
        display: block;
        text-align: center;
      }

      daucus-router-outlet {
        display: block;
        border: solid #000 2px;
        border-radius: 20px;
        padding: 2rem;
        margin: 2rem 0;
        text-align: justify;
      }

      daucus-router-outlet h1 {
        margin-top: 0;
      }
    `;
  }

  render() {
    return html`
      <daucus-router .routes=${daucusRoutes} default-path="/docs/">
        <h1>Daucus + LitElement + Snowpack</h1>
        <p>Edit <code>src/app-root.js</code> and save to reload.</p>
        <daucus-menu .routes=${daucusRoutes} project="docs"></daucus-menu>
        <daucus-router-outlet></daucus-router-outlet>
        <a
          class="link"
          href="https://fullweb.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${this.message}
        </a>
      </daucus-router>
    `;
  }
}

customElements.define('app-root', AppRoot);
