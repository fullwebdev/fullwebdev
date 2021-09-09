/* eslint-disable max-classes-per-file */
import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { classMap } from "lit/directives/class-map.js";
import { WithWording } from "../utils/wording-mixin.js";

export const selector = "nma-cv";

class CVExperienceElement extends LitElement {
  static get properties() {
    return {
      wording: { type: Object, attribute: false },
      _flatGroups: { type: Boolean, state: true },
      align: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._flatGroups = true;
    /**
     * FIXME : typing w/ jsdoc only
     * @type {import('./cv-nma.js').ExperienceWording}
     */
    // eslint-disable-next-line no-unused-expressions
    this.wording;
    this._handleBeforePrint = this.__handleBeforePrint.bind(this);
    this._handleAfterPrint = this.__handleAfterPrint.bind(this);
    this.align = false;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("beforeprint", this._handleBeforePrint);
    window.addEventListener("afterprint", this._handleAfterPrint);
  }

  disconnectedCallback() {
    window.removeEventListener("beforeprint", this._handleBeforePrint);
    window.removeEventListener("afterprint", this._handleAfterPrint);
    super.disconnectedCallback();
  }

  render() {
    let groups = [...this.wording.items];
    if (this._flatGroups) {
      groups = [groups.flat()];
    }
    return groups.map(
      (group, i) => html`
        <div
          class=${classMap({
            timeline: true,
            mirror: !this.align && i % 2 === 1,
          })}
        >
          ${group.map(
            (item) => html`<div class="xp-item timeline__event">
              <div
                class=${classMap({
                  timeline__event__icon: true,
                  "short-line": !!item.shortLine,
                })}
              >
                <img src=${item.icon} alt=${item.company} />
              </div>
              <div class="timeline__event__card">
                <div class="timeline__event__date">
                  ${item.company
                    ? html`<div class="company">
                        ${item.company.name
                          ? html`<div class="company-name">
                              ${item.company.name}
                            </div>`
                          : ""}
                        ${item.company.details
                          ? html`<div class="company-details">
                              ${item.company.details}
                            </div>`
                          : ""}
                      </div>`
                    : ""}
                  <div class="dates">
                    ${item.endDate
                      ? html`<div class="start-date">
                            ${this.wording.dateIntervals.start}
                            ${item.startDate}
                          </div>
                          <div class="end-date">
                            ${this.wording.dateIntervals.end} ${item.endDate}
                          </div>`
                      : html` <div>${this.wording.dateIntervals.noEnd}</div>
                          <div class="start-date">${item.startDate}</div>`}
                  </div>
                </div>
                <div class="timeline__event__content">
                  <div class="header timeline__event__title">
                    ${item.jobTitle
                      ? html`<span class="jobtitle">${item.jobTitle}</span>`
                      : ""}
                  </div>
                  ${(() => {
                    if (!item.details) return "";
                    if (Array.isArray(item.details))
                      return html` <ul class="details">
                        ${item.details.map(
                          (el) => html`<li>${unsafeHTML(el)}</li>`
                        )}
                      </ul>`;
                    return html`<p class="details">
                      ${unsafeHTML(item.details)}
                    </p>`;
                  })()}
                </div>
              </div>
            </div>`
          )}
        </div>
      `
    );
  }

  __handleBeforePrint() {
    this._flatGroups = false;
  }

  __handleAfterPrint() {
    this._flatGroups = true;
  }
}

customElements.define("nma-cv-experience", CVExperienceElement);

/** @type {import('./cv-nma.js').WithCVNMAWording & LitElement} */
// @ts-ignore missing props
const LitElementWithCVNMAWording = WithWording(LitElement);

const timelineStyle = css`
  * {
    box-sizing: border-box;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    position: relative;
    width: calc(100% - 2rem);
  }
  .timeline__event {
    display: flex;
    margin: 0.7rem 0;
    border-radius: 6px;
    align-self: center;
    width: 100%;
  }
  .mirror .timeline__event,
  .mirror .timeline__event .timeline__event__card {
    flex-direction: row-reverse;
  }
  .mirror .timeline__event .timeline__event__date {
    border-radius: 0 6px 6px 0;
  }
  .mirror .timeline__event .timeline__event__content {
    border-radius: 6px 0 0 6px;
  }
  .mirror .timeline__event .timeline__event__icon:before {
    content: "";
    width: 2px;
    background: var(--primary-color);
    position: absolute;
    top: 100%;
    left: 50%;
    right: auto;
    z-index: -1;
    transform: translateX(-50%);
  }
  .mirror .timeline__event .timeline__event__icon:after {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    position: absolute;
    right: 100%;
    z-index: -1;
    top: 50%;
    left: auto;
    transform: translateY(-50%);
  }
  .mirror .timeline__event .timeline__event__icon {
    margin-left: 1rem;
  }
  :not(.mirror) .timeline__event .timeline__event__icon {
    margin-right: 1rem;
  }

  .timeline__event__card {
    display: flex;
    width: calc(100% - 164px);
    flex-grow: 1;
  }
  .timeline__event__title {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary-color);
  }
  .timeline__event__content {
    padding: 0.7rem 1rem 0.5rem 1rem;
    background: #fff;
    border-radius: 0 6px 6px 0;
    flex-grow: 1;
    border: 1px solid var(--primary-color);
  }
  .timeline__event__date {
    color: var(--neutral-color-0);
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    border-radius: 6px 0 0 6px;
    flex-direction: column;
    width: 150px;
    flex-shrink: 0;
  }
  .timeline__event__date > * {
    width: 100%;
    text-align: center;
  }
  .timeline__event__date .company-name {
    font-weight: 600;
  }
  .timeline__event__date .company-details {
    font-style: italic;
    font-size: 0.8rem;
  }
  .timeline__event__date .dates {
    white-space: nowrap;
  }
  .timeline__event__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    align-self: center;
    border-radius: 100%;
    width: 40px;
    padding: 30px;
    height: 40px;
    position: relative;
  }
  .timeline__event__icon img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: solid 2px var(--primary-color);
    background-color: #fff;
  }
  .timeline__event__icon:before {
    content: "";
    width: 2px;
    height: 325px;
    background: var(--primary-color);
    position: absolute;
    top: 100%;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }
  .timeline__event__icon.short-line:before {
    height: 150px;
  }
  .timeline__event__icon:after {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    position: absolute;
    left: 100%;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
  }
  .timeline__event__description {
    flex-basis: 60%;
  }

  .timeline__event:last-child .timeline__event__icon:before {
    content: none;
  }

  @media screen and (max-width: 786px) {
    .timeline__event,
    .timeline__event__card {
      flex-direction: column;
      align-self: center;
    }
    .timeline__event__content,
    .timeline__event__date,
    .timeline__event__card {
      width: 100%;
    }
    .timeline__event__icon,
    .timeline__event__icon:before,
    .timeline__event__icon:after {
      display: none;
    }
    .timeline__event__date {
      border-radius: 0;
      padding: 20px;
      flex-grow: 1;
    }
    .timeline__event__content {
      border-radius: 0;
    }
    .mirror .timeline__event {
      flex-direction: column;
      align-self: center;
    }
    .mirror .timeline__event .timeline__event__date {
      border-radius: 0;
      padding: 20px;
    }
    .mirror .timeline__event .timeline__event__icon {
      border-radius: 6px 6px 0 0;
      margin: 0;
    }
  }
`;

/**
 * @class NMACVElement
 * @property {boolean} quiet - hide calls to action
 */
export default class NMACVElement extends LitElementWithCVNMAWording {
  static get properties() {
    return {
      quiet: { type: Boolean },
      align: { type: Boolean },
      anonymous: { type: Boolean },
    };
  }

  static get styles() {
    return [
      timelineStyle,
      css`
        :host {
          display: block;
          margin: 0 auto;
          max-width: 936px;
        }
        :host > section {
          padding: 1rem;
        }

        h1 {
          font-size: 2rem;
        }

        .first-page {
          display: grid;
          grid-template-columns: 310px 1fr;
          margin-left: auto;
          margin-right: auto;
        }
        #cv__presentation {
          background-color: var(--primary-color);
          color: var(--neutral-color-0);
          padding: 1.7rem;
        }

        #cv__presentation .note {
          margin-top: 0;
          font-style: italic;
        }

        #cv__presentation .subtitle {
          margin-bottom: 0;
          padding-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: bold;
        }

        #cv__presentation h2 {
          display: none;
        }

        .presentation-contents {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .presentation-contents .abstract {
          margin: 2rem auto;
        }

        .presentation-contents > * {
          flex-grow: 1;
        }

        .presentation-contents h3 {
          margin: 4rem 0 0.5rem 1rem;
        }

        .networks ul,
        .langs ul {
          list-style: none;
          padding-left: 0;
          padding: 0;
        }

        .langs li {
          padding-bottom: 0.5rem;
        }

        .networks__item {
          display: flex;
          align-items: center;
        }

        .networks__item img {
          width: 25px;
          height: 25px;
          margin: 0.3rem;
        }

        .networks__item__content {
          margin-left: 2rem;
        }

        #cv__intro {
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        #cv__intro > * {
          margin-top: auto;
        }

        .cv__intro__item {
          display: flex;
          flex-direction: column;
        }

        #cv__intro .icon-container {
          text-align: center;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.2rem;
          margin: 1rem 1rem 0;
        }

        #cv__intro .icon {
          width: 50px;
          margin-bottom: 0.5rem;
        }

        #cv__xp .details {
          margin: 0.5rem 0;
        }

        #cv__xp ul.details {
          padding-left: 1.5rem;
        }

        .jobtitle {
          font-weight: bold;
        }

        .dates {
          font-weight: initial;
        }

        .cv__intro__item__header {
          display: flex;
          margin-left: 1rem;
        }

        .cv__intro__item h3 {
          margin: 0;
        }

        .cv__intro__item .title-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cv__intro__item__content {
          margin-left: 2rem;
        }

        .cv__intro__cta {
          text-align: center;
          font-weight: bold;
          align-self: center;
          padding: 1rem;
        }

        .cv__intro__cta > * {
          margin: 0;
        }

        .print-link {
          font-weight: initial;
          font-style: italic;
          text-decoration: underline;
        }

        .last-page > section {
          padding: 0 2rem;
        }

        .cv__accomplishments__content,
        #cv__misc > ul,
        #cv__education ul {
          columns: 2;
          column-gap: 2rem;
        }

        .accomplishment:first-child h3 {
          margin-top: 0;
        }

        .accomplishment h3 {
          margin-bottom: 0.5rem;
        }

        .accomplishment > ul {
          margin-top: 0.5rem;
        }

        .accomplishment {
          break-inside: avoid;
        }

        #cv__misc {
          margin-top: 0;
        }

        .last-page h2 {
          margin-bottom: 1rem;
        }

        .last-page li {
          margin: .2em 0;
        }

        #cv__misc h2 {
          margin-top: 0;
        }

        @media print {
          @page {
            margin: 100cm !important;
          }
          .first-page,
          #cv__xp {
            break-after: page;
            width: 100vw;
          }

          .first-page {
            height: 100vh;
            padding-right: 2rem;
          }

          #cv__xp {
            height: 200vh;
            margin-top: 0;
          }

          #cv__xp > h2 {
            display: none;
          }

          #cv__education {
            margin-top: 0;
          }

          .timeline {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .page-break {
            break-after: page;
          }

          .cv__intro__cta {
            border: 1px solid var(--primary-color);
            border-radius: 6px;
          }

          .cv__intro__cta img {
            margin: 1rem;
            height: 32px;
          }
        }
        @media screen {
          .print-only {
            display: none;
          }

          .invisible-link {
            text-decoration: none;
            color: inherit;
          }

          #cv__xp,
          .last-page {
            border-top: 1px dashed var(--primary-color-softer);
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
        }
        @media screen and (max-width: 786px) {
          .first-page {
            display: block;
          }
          :host > section {
            padding: 0;
          }
          .last-page > section {
            padding: 0 1rem;
          }
          .cv__accomplishments__content, #cv__misc > ul {
            columns: initial;
          }
      `,
    ];
  }

  constructor() {
    super();
    this.quiet = false;
    this.align = false;
    this.anonymous = false;
  }

  render() {
    return html`
      <div class="first-page">
        <section id="cv__presentation">
          <div class="presentation-header">
            <h1>${this.anonymous ? "NMA" : this.w.title}</h1>
            <p class="subtitle">${this.w.subtitle}</p>
            <p class="note">${this.w.note}</p>
          </div>
          <div class="presentation-contents">
            <h2>${this.w.presentation.title}</h2>
            <p class="abstract">${this.w.presentation.abstract}</p>
          </div>
          ${this.anonymous
            ? ""
            : html`<div class="networks">
                <h3>${this.w.presentation.networks.title}</h3>
                <ul>
                  ${this.w.presentation.networks.content.map((item) =>
                    item.url
                      ? html`<a
                          href=${item.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          class="invisible-link"
                          ><li class="networks__item">
                            <img src=${item.icon} alt=${item.alt} /><span
                              class="networks__item__content"
                              >${item.text}</span
                            >
                          </li></a
                        > `
                      : html`<li class="networks__item">
                          <img src=${item.icon} alt=${item.alt} /><span
                            class="networks__item__content"
                            >${item.text}</span
                          >
                        </li>`
                  )}
                </ul>
              </div>`}
          <div class="langs">
            <h3>${this.w.presentation.langs.title}</h3>
            <ul>
              ${this.w.presentation.langs.content.map(
                (lang) => html`<li>${lang}</li>`
              )}
            </ul>
          </div>
        </section>
        <section id="cv__intro">
          ${this.w.intro.items.map(
            ({ title, content, icon }) => html` <div class="cv__intro__item">
              <div class="cv__intro__item__header">
                <div class="icon-container">
                  <img class="icon" src=${icon.src} alt="" />
                </div>
                <div class="title-container">
                  <div class="category">${icon.caption}</div>
                  <h3>${title}</h3>
                </div>
              </div>
              <ul class="cv__intro__item__content">
                ${content.map((w) => html`<li>${unsafeHTML(w)}</li>`)}
              </ul>
            </div>`
          )}
          ${this.quiet
            ? html`<div></div>`
            : html`<div class="cv__intro__cta">
                <p>${this.w.intro.callToAction.text}</p>
                <a
                  href="https://${this.w.intro.callToAction.url}"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="call-to-action"
                >
                  <img
                    src=${this.w.intro.callToAction.img.src}
                    alt=${this.w.intro.callToAction.img.alt}
                    height="24px"
                  />
                  <div class="print-only print-link">
                    ${this.w.intro.callToAction.url}
                  </div>
                </a>
              </div>`}
        </section>
      </div>
      <section id="cv__xp">
        <h2>${this.w.experience.title}</h2>
        <nma-cv-experience
          .wording=${this.w.experience}
          ?align=${this.align}
        ></nma-cv-experience>
      </section>
      <div class="last-page">
        <section id="cv__accomplishments">
          <h2>${this.w.accomplishments.title}</h2>
          <div class="cv__accomplishments__content">
            ${this.w.accomplishments.groups.map(
              (group) => html`
                <article class="accomplishment">
                  <h3>${group.title}</h3>
                  <ul>
                    ${group.items.map(
                      (item) =>
                        html`
                          <li>
                            <em>
                              ${item.href
                                ? html`<a
                                    href=${item.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    >${item.headline}</a
                                  >`
                                : item.headline}
                            </em>
                            ${item.links
                              ? html` -
                                ${item.links.map(
                                  ({ text, href }, i) =>
                                    html`${href
                                      ? html`<a
                                          href=${href}
                                          target="_blank"
                                          rel="noreferrer noopener"
                                          >${text}</a
                                        >`
                                      : // @ts-ignore item.links can't be undefined
                                        text}${i < item.links.length - 1
                                      ? ", "
                                      : ""}`
                                )}`
                              : ""}
                            ${item.context ? html` - ${item.context}` : ""}
                            ${item.date ? html` - ${item.date}` : ""}
                          </li>
                        `
                    )}
                  </ul>
                </article>
              `
            )}
          </div>
        </section>
        <section id="cv__misc">
          <h2>${this.w.misc.title}</h2>
          <ul>
            ${this.w.misc.content.map(
              (txt) => html`<li>${unsafeHTML(txt)}</li>`
            )}
          </ul>
        </section>
        <section id="cv__education">
          <h2>${this.w.education.title}</h2>
          <ul>
            ${this.w.education.items.map(
              (item) =>
                html`<li>
                  <span class="cv__education__year">${item.year}</span> :
                  <span class="cv__education__diploma">${item.diploma}</span>,
                  <span class="cv__education__school">${item.school}</span>
                </li>`
            )}
          </ul>
        </section>
      </div>
    `;
  }
}

// @ts-ignore missing props
customElements.define(selector, NMACVElement);
