import { LitElement, html, css } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { WithWording } from "../utils/wording-mixin.js";

export const selector = "app-projects-list";

/**
 * @typedef {import('./projects-list').CallToActionParams} CallToActionParams
 * @typedef {import('./projects-list').ProjectListWordings} ProjectListWordings
 * @typedef {import('./projects-list').Project} Project
 * @typedef {import('../languages').Language} Language
 */

const callToAction = (/** @type {CallToActionParams} */ cta) => {
  if (cta.href) {
    return html`<a
      href="${cta.href}"
      class="call-to-action ${classMap({ primary: !!cta.primary })}"
      rel=${cta.href.startsWith("http") ? "noopener noreferrer" : ""}
      target=${cta.href.startsWith("http") ? "_blank" : ""}
      >${cta.text}</a
    >`;
  }
  if (cta.onclick) {
    return html`<button
      class="call-to-action ${classMap({ primary: !!cta.primary })}"
      @click=${cta.onclick}
    >
      ${cta.text}
    </button> `;
  }
  return "";
};

/**
 * @param {Project} item
 */
const projectCard = (item) => html`<a
  href=${ifDefined(item.href)}
  rel=${item.href && item.href.startsWith("http") ? "noopener noreferrer" : ""}
  target=${item.href && item.href.startsWith("http") ? "_blank" : ""}
  class=${classMap({
    "project-card": true,
    spotlight: !!item.spotlight,
    dimmed: !!item.wip,
    "bg-card": !!item.backgroundImg,
  })}
  style=${item.backgroundImg
    ? styleMap({ backgroundImage: `url(${item.backgroundImg})` })
    : ""}
>
  <div class="header">
    <div class="type">${item.type}</div>
    <div class="date">${item.date}</div>
  </div>
  ${!item.backgroundImg && item.img
    ? html` <div class="illustration">
        <img
          src=${item.img.src}
          alt=${item.img.alt}
          width="100%"
          height="${item.img.height || 140}"
        />
      </div>`
    : ""}
  <div class="desc">
    <h2>${item.desc.title}</h2>
    <p class="content">${item.desc.subtitle}</p>
    ${item.cta
      ? html`<div class="actions">${item.cta.map(callToAction)}</div> `
      : ""}
  </div>
</a>`;

/** @type {import('./projects-list').WithProjectListWording & LitElement} */
// @ts-ignore missing properties
const LitElementWithProjectListWording = WithWording(LitElement);

export default class ProjectsListElement extends LitElementWithProjectListWording {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0 auto;
        max-width: 512px;
      }

      /* :focus {
        outline: 1px dashed var(--primary-color, #555);
      } */

      h1 {
        text-align: center;
      }

      h1:focus {
        outline: none;
      }

      .abstract {
        max-width: 960px;

        text-align: center;
        margin: 2rem auto 0;
      }

      .grid {
        display: grid;
        justify-content: space-evenly;
        display: grid;
        grid-template-columns: 1fr;
        margin: 4rem auto 0;
        grid-gap: 1rem;
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
        border-radius: 5px;
      }

      .bg-card {
        background-size: cover;
        background-repeat: no-repeat;
        color: #fff;
        position: relative;
        background-position: center;
        background-color: var(--neutral-color-600);
      }

      .bg-card * {
        z-index: 2;
        position: relative;
      }

      .bg-card::before {
        content: "";
        display: block;
        -webkit-filter: blur(1px) brightness(0.4);
        -moz-filter: blur(1px) brightness(0.4);
        -ms-filter: blur(1px) brightness(0.4);
        -o-filter: blur(1px) brightness(0.4);
        filter: blur(1px) brightness(0.4);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        z-index: 0;
      }

      .project-card[href]:hover {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      .project-card:only-child {
        grid-column: 1/-1;
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
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .project-card .desc .content {
        text-align: center;
        flex-grow: 2;
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
        max-width: 350px;
        margin: 0 auto;
        overflow-y: hidden;
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

      .project-card .type {
        color: var(--primary-color);
        font-weight: bold;
      }

      .project-card .date {
        color: var(--primary-text-color-softer);
        font-size: 15px;
      }

      .project-card h2 {
        color: var(--primary-color-stronger);
      }

      .bg-card .type,
      .bg-card .date,
      .bg-card h2 {
        color: #fff;
      }

      .cta-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      /* FIXME: duplication */
      .call-to-action {
        padding: 0.8rem 34px;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.2rem;
        border-radius: 48px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        margin: 0.5rem;
        background-color: var(--soft-bg-color);
        color: var(--primary-text-color-stronger);
        border: none;
      }

      .call-to-action.primary {
        background-color: var(--primary-color-softer);
        color: white;
      }

      .call-to-action:hover {
        background-color: var(--stronger-bg-color);
      }

      .call-to-action.primary:hover {
        background-color: var(--primary-color);
      }

      @media screen and (min-width: 720px) {
        h1 {
          margin-top: 2rem;
        }
        .grid {
          margin-top: 6rem;
        }
      }

      @media screen and (min-width: 865px) {
        :host {
          max-width: 960px;
        }

        .grid {
          grid-template-columns: 1fr 1fr;
        }

        .project-card.spotlight {
          grid-column: span 2;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr;
          align-items: stretch;
          column-gap: 2rem;
        }

        .project-card.spotlight .desc .content {
          text-align: justify;
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

        .project-card.spotlight .desc h2 {
          margin-top: 0;
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
    /** @type {Array<any>} */
    this.items = [];
  }

  render() {
    return html`
      <h1>${this.w.title}</h1>
      <section class="abstract">
        ${this.w.abstract ? html`<p>${this.w.abstract}</p>` : ""}
        ${this.w.cta
          ? html`<div class="cta-container">
              ${this.w.cta.map(callToAction)}
            </div>`
          : ""}
      </section>
      ${typeof this.w.items === "string"
        ? html`<p class="empty-grid">${this.w.items}</p>`
        : html`<section class="grid">
            ${this.w.items.map(projectCard)}
          </section>`}
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

// @ts-ignore missing props
customElements.define(selector, ProjectsListElement);
