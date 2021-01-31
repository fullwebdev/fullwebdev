import { LitElement, html, css } from 'lit-element';

// OR import '@daucus/html-loader/html-loader.js'; for <html-loader>
import { HTMLLoaderElement } from '@daucus/html-loader';
customElements.define('daucus-outlet', HTMLLoaderElement);

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
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 24px;
      }
      .link {
        color: white;
      }

      daucus-outlet {
        max-width: 1024px;
        background-color: #fff;
        color: #000;
        border-radius: 20px;
        padding: 2rem;
        margin: 2rem;
      }

      daucus-outlet h1 {
        font-size: 3rem;
        text-align: center;
        margin-top: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Daucus + LitElement + Snowpack</h1>
        <p>Edit <code>src/app-root.js</code> and save to reload.</p>
        <a
          class="link"
          href="https://fullweb.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${this.message}
        </a>
        <daucus-outlet href="/docs/" fallback="/docs/404.html"></daucus-outlet>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);
