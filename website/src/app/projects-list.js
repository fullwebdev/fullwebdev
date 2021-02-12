import { LitElement, html, css } from "lit-element";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

export const selector = "app-projects-list";

/**
 * @typedef {import('./projects-list').ProjectListWording} ProjectListWording
 * @typedef {import('./projects-list').ProjectListWordings} ProjectListWordings
 * @typedef {import('./projects-list').Project} Project
 * @typedef {import('./languages').Language} Language
 */

/**
 * @param {Project} item
 */
const projectCard = (item) => html` <a
  href=${ifDefined(item.href)}
  class="project-card ${classMap({
    spotlight: !!item.spotlight,
    dimmed: !!item.wip,
  })}"
>
  <div class="header">
    <div class="type">${item.type}</div>
    <div class="date">${item.date}</div>
  </div>
  <div class="illustration">
    <img
      src=${item.img.src}
      alt=${item.img.alt}
      width="100%"
      height="${item.img.height || 140}"
    />
  </div>
  <div class="desc">
    <h2>${item.desc.title}</h2>
    <p>${item.desc.subtitle}</p>
    ${item.cta
      ? html`<div class="actions">
          ${item.cta.map(
            (cta) =>
              html`<a
                href="${cta.href}"
                class="call-to-action ${classMap({ primary: !!cta.primary })}"
                ?rel=${cta.href.startsWith("http") && "noopener noreferrer"}
                ?target=${cta.href.startsWith("http") && "_blank"}
                >${cta.text}</a
              >`
          )}
        </div> `
      : ""}
  </div>
</a>`;

export default class ProjectsListElement extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
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

      .abstract {
        margin-bottom: 2rem;
        max-width: 960px;

        text-align: center;
        margin: 2rem auto 4rem;
      }

      .grid {
        display: grid;
        justify-content: space-evenly;
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
      }

      .empty-grid {
        text-align: center;
        font-weight: bold;
        color: var(--primary-text-color-softer);
        font-size: 1.5rem;
      }

      .project-card {
        display: flex;
        flex-direction: column;
        color: inherit;
        text-decoration: none;
        padding: 2rem;
        /* border: 1px solid #dadce0; */
        border-radius: 5px;
      }

      .project-card[href]:hover {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      .project-card.dimmed {
        filter: brightness(70%) blur(0.5px);
        background-color: rgba(0, 0, 0, 0.05);
      }

      .project-card.dimmed img {
        filter: blur(1px);
      }

      .project-card .desc {
        text-align: center;
      }

      .project-card .actions {
        flex-grow: 2;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-bottom: 1rem;
      }

      .project-card .illustration {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        min-height: 180px;
      }

      .project-card img {
        object-fit: contain;
      }

      .project-card .header {
        margin-bottom: 1rem;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
      }

      /* .project-card::before {
        background-color: var(--primary-color);
        content: "";
        display: block;
        height: 2px;
        width: 78px;
        margin-bottom: 1rem;
      } */

      .project-card .type {
        color: var(--primary-color);
        font-weight: bold;
      }

      /*.project-card .type::before {
        background-color: var(--primary-color);
        display: inline-block;
        content: "";
        height: 10px;
        width: 10px;
        margin-right: 1rem;
        border-radius: 5px;
      }*/

      .project-card .date {
        color: var(--primary-text-color-softer);
        font-size: 15px;
      }

      .project-card h2 {
        color: var(--primary-color-stronger);
      }

      /* FIXME: duplication */
      .call-to-action {
        padding: 2px 34px 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 40px;
        border-radius: 48px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        margin: 0.5rem;
        background-color: var(--soft-bg-color);
        color: var(--primary-text-color-stronger);
      }

      .call-to-action.primary {
        background-color: var(--primary-color-softer);
        color: white;
      }

      @media screen and (min-width: 865px) {
        :host {
          max-width: 960px;
        }

        .grid {
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        }

        .project-card.spotlight {
          grid-column: span 2;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr;
          align-items: stretch;
          column-gap: 2rem;
        }

        .project-card.spotlight .header {
          grid-column: span 2;
        }

        .project-card.spotlight .illustration {
          height: 100%;
          align-items: start;
        }

        .project-card.spotlight .desc {
          text-align: center;
          display: flex;
          flex-direction: column;
        }
      }

      @media screen and (min-width: 1264px) {
        :host {
          max-width: 1320px;
        }
        .grid {
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 4rem;
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
    /** @type {Language} */
    this.lang = "en";
    /** @type {Array<any>} */
    this.items = [];
    /** @type {ProjectListWordings | null} */
    this.wordings = null;
  }

  get w() {
    if (!this.wordings)
      throw new Error(`can't find any wording for ${selector}`);
    return this.wordings[this.lang] || this.wordings.en;
  }

  render() {
    return html`
      <h1>${this.w.title}</h1>
      <section class="abstract">${this.w.abstract}</section>
      ${typeof this.w.items === "string"
        ? html`<p class="empty-grid">${this.w.items}</p>`
        : html`<section class="grid">
            ${this.w.items.map(projectCard)}
          </section>`}
    `;
  }
}

customElements.define(selector, ProjectsListElement);
