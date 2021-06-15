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
        ${this.w.choices.map(
          (choice) => html` <a href=${choice.href} class="choice">
            <img
              src=${choice.image.url}
              alt=${choice.image.alt}
              width="175"
              height="175"
            />
            <p class="choice-text">${choice.text}</p>
          </a>`
        )}
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
