import { LitElement, html, css } from "lit";

export const selector = "app-services-index";

export default class ServicesIndexElement extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      wording: { type: Object, attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0 auto;
        text-align: center;
      }

      .selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .choice {
        display: flex;
        border-radius: 0.5em;
        color: #fff;
        background-color: var(--primary-color-softer);
        flex-direction: column;
        font-size: 1.3rem;
        margin: 2.5em;
        width: 250px;
        height: 250px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.5s;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }

      .choice-text {
        margin: 0;
        font-weight: bold;
      }

      .choice:hover {
        background-color: var(--primary-color);
      }
    `;
  }

  constructor() {
    super();
    /** @type {import('../languages').Language} */
    this.lang = "en";
    /** @type {import('./services').ServicesWording | null} */
    this.wording = null;
  }

  get w() {
    if (!this.wording)
      throw new Error(`can't find any wording for ${selector}`);
    return this.wording;
  }

  render() {
    return html`
      <h1>${this.w.title}</h1>
      <section class="selection">
        <a href="/services/individual" class="choice">
          <!-- prettier-ignore -->
          <svg viewBox="0 0 100 125" width="175" height="175"><switch><g><g fill="#FFF"><circle cx="50" cy="14.6" r="12.1"/><path d="M56.2 29.9H43.8c-5 0-9.1 4.1-9.1 9.1v16.8c0 2.5 1.7 4.7 4.1 5.3l.9.2c1.2.3 2 1.3 2 2.5v29.1c0 2.5 2 4.6 4.6 4.6h7.6c2.5 0 4.6-2 4.6-4.6v-29c0-1.2.8-2.2 2-2.5l.9-.2c2.4-.6 4.1-2.8 4.1-5.3V39c-.2-5-4.3-9.1-9.3-9.1z"/></g></g></switch></svg>
          <p class="choice-text">${this.w.individuals}</p>
        </a>
        <a href="/services/company" class="choice">
          <!-- prettier-ignore -->
          <svg fill="#FFF" viewBox="0 0 100 125" width="175" height="175"><path d="M142.121-239.646h36.763c3.394 0 9.191-.861 12.089 0 2.152.639 5.172 6.387 6.664 8.392 1.045 1.409 2.389 2.782 3.453 4.192.932 1.235 2.625 2.989 2.961 4.442 1.01 4.416 0 10.94 0 16.529 0 5.741.398 11.342-.492 16.038-23.33.818-50.187.82-73.771 0-.907-5.359-.498-10.73-.498-16.038 0-5.5-1.02-11.269 0-16.286.518-2.539 4.146-6.036 5.921-8.387 2.719-3.599 4.413-6.408 6.91-8.882zm1.233 4.935c-2.029 2.85-4.848 6.105-6.906 8.879-.686.921-1.665 2.128-1.482 2.966h23.442c-.552 10.837 17.167 10.267 16.778 0h23.441c-.995-1.946-2.665-4.057-4.447-6.419-.972-1.279-3.543-5.67-5.178-6.167-2.744-.833-7.77 0-11.104 0h-33.803c-.359.138-.6.384-.741.741zm-35.491 12H32.537l1 32.658h73.326zm268.728 0h-75.325l1 32.658h73.325zm79.272 0h-75.326l1 32.658h73.326zm-238.98 0h73.326v32.658h-73.326z"/><g opacity=".5"><path d="M36.539-224.711l9.997-13.319h47.328l9.997 13.319z"/><path d="M92.864-236.03l6.995 9.319H40.541l6.995-9.319h45.328m1.999-4H45.537l-13 17.319h75.326l-13-17.319z"/></g><g opacity=".5"><path d="M466.539-224.711l9.997-13.319h47.328l9.997 13.319z"/><path d="M522.864-236.03l6.995 9.319h-59.318l6.995-9.319h45.328m1.999-4h-49.326l-13 17.319h75.326l-13-17.319z"/></g><path opacity=".5" d="M442.863-240.03h-49.326l-13 17.319h75.326z"/><path d="M301.266-240.03h75.325v17.319h-75.325z"/><circle cx="166.667" cy="-222.711" r="7.834"/><circle cx="70.201" cy="-222.711" r="7.834"/><path d="M23.113-222.711h-75.326l1 32.658h73.326z"/><g opacity=".5"><path d="M-48.211-224.711l9.998-13.319H9.114l9.997 13.319z"/><path d="M8.114-236.03l6.995 9.319h-59.318l6.995-9.319H8.114m1.999-4h-49.326l-13 17.319h75.326l-13-17.319z"/></g><g opacity=".5"><path d="M-44.193-224.22l7.545-10.051H7.565l7.544 10.051z"/><path d="M6.811-232.762l5.279 7.031h-53.262l5.278-7.031H6.811m1.508-3.018h-45.722l-9.81 13.069h65.342l-9.81-13.069z"/></g><circle cx="-14.549" cy="-222.711" r="7.834"/><path d="M-63.637-222.711h-75.326l1 32.658h73.326z"/><g opacity=".5"><path d="M-125.151-237.78l.188-.25h47.327l.187.25z"/><path d="M-76.637-240.03h-49.326l-13 17.319h5l9.81-13.069h45.722l9.81 13.069h4.984z"/></g><circle cx="-101.299" cy="-222.711" r="7.834"/><g opacity=".5"><path d="M-211.901-237.78l.188-.25h47.327l.187.25z"/><path d="M-163.387-240.03h-49.326l-13 17.319h5l9.81-13.069h45.722l9.81 13.069h4.984z"/></g><path d="M-180.215-222.711a7.834 7.834 0 01-15.669 0h-29.829l1 32.658h73.326l1-32.658h-29.828zM73.113-335.03H23.787l-13 17.319h5l9.81-13.069h45.721l9.811 13.069h4.984z"/><path d="M56.285-317.711a7.834 7.834 0 01-15.669 0H10.787l1 32.658h73.326l1-32.658H56.285zm-.67 355.403h7.23c.55 0 1-.45 1-1v-7.23c0-.55-.45-1-1-1h-7.23c-.55 0-1 .45-1 1v7.23c0 .55.45 1 1 1zm-11.23-9.23h-7.231c-.55 0-1 .45-1 1v7.23c0 .55.45 1 1 1h7.231c.55 0 1-.45 1-1v-7.23c0-.55-.45-1-1-1zm11.23 24.615h7.23c.55 0 1-.45 1-1v-7.231c0-.55-.45-1-1-1h-7.23c-.55 0-1 .45-1 1v7.231c0 .55.45 1 1 1zm-11.23-9.231h-7.231c-.55 0-1 .45-1 1v7.231c0 .55.45 1 1 1h7.231c.55 0 1-.45 1-1v-7.231c0-.55-.45-1-1-1zm0 15.384h-7.231c-.55 0-1 .45-1 1v7.231c0 .55.45 1 1 1h7.231c.55 0 1-.45 1-1V60.23c0-.549-.45-1-1-1z"/><path d="M79.77 80.77h-2.077V14.077c0-.55-.45-1-1-1h-8.231V11c0-.55-.45-1-1-1H32.538c-.55 0-1 .45-1 1v2.077h-8.23c-.55 0-1 .45-1 1V80.77H20.23c-.55 0-1 .45-1 1V89c0 .55.45 1 1 1h59.54c.55 0 1-.45 1-1v-7.23c0-.55-.451-1-1-1zM28.461 19.231h43.077v61.538h-7.692V63.386c0-.593-.485-1.078-1.078-1.078h-7.074c-.593 0-1.078.485-1.078 1.078v17.383H28.461V19.231z"/></svg>
          <p class="choice-text">${this.w.companies}</p>
        </a>
      </section>
    `;
  }

  updated() {
    const heading = /** @type {ShadowRoot} */ (this.shadowRoot).querySelector(
      "h1"
    );
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
  }
}

customElements.define(selector, ServicesIndexElement);
