import { LitElement, html, css } from "lit-element";

export const selector = "app-projects-list";

export default class ProjectsListElement extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      items: { type: Array },
      wordings: { type: Object, attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0 auto;
        max-width: 512px;
      }

      h1 {
        text-align: center;
      }

      .presentation {
        margin-bottom: 2rem;
        max-width: 960px;

        text-align: center;
        margin: 2rem auto 4rem;
      }

      .grid {
        display: grid;
        justify-content: space-evenly;
        grid-auto-rows: 350px;
        column-gap: 3rem;
        row-gap: 4rem;
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
      }

      .grid > * {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        color: var(--primary-color);
        text-shadow: 0 1px 1px var(--primary-color-stronger);
        border: solid 2px var(--primary-color);
        border-radius: 5px;
      }

      @media screen and (min-width: 865px) {
        :host {
          max-width: 960px;
        }

        .grid {
          grid-template-columns: 1fr 1fr;
        }

        .grid > *:first-child {
          grid-column: span 2;
        }
      }

      @media screen and (min-width: 1024px) {
        .grid {
          /* grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); */
        }
      }

      @media screen and (min-width: 1264px) {
        :host {
          max-width: 1320px;
        }
        .grid {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }

      @media screen and (min-width: 1680px) {
        :host {
          max-width: 1920px;
        }
        .grid {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `;
  }

  constructor() {
    super();
    /** @type {import('./languages').Language} */
    this.lang = "en";
    /** @type {Array<any>} */
    this.items = [];
    /** @type {import('./languages').Wordings | null} */
    this.wordings = null;
  }

  get w() {
    // @ts-ignore lang should be a Language
    return this.wordings[this.lang] || this.wordings.en;
  }

  render() {
    return html`
      <h1>${this.w.title}</h1>
      <section class="presentation">${this.w.presentation}</section>
      <section class="grid">
        ${this.items.map((item) => html`<article>${item}</article> `)}
      </section>
    `;
  }
}

customElements.define(selector, ProjectsListElement);
