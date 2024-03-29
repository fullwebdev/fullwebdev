/* eslint-disable max-classes-per-file */
import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { live } from "lit/directives/live.js";
import {
  validateAndCreateElement,
  InvalidElementNameError,
  AlreadyUsedElementNameError,
  NotAPotentialCustomElementNameError,
} from "custom-element-name";
import { WithWording } from "../utils/wording-mixin.js";

export const selector = "app-ce-name";

/** @type {import('./ce-name').WithCeNameTestWording & LitElement} */
// @ts-ignore missing properties
const LitElementWithCeNameTestWording = WithWording(LitElement);

class CENameTestElement extends LitElementWithCeNameTestWording {
  static get properties() {
    return {
      _msg: { type: String, state: true },
      value: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .result {
        font-weight: bold;
      }

      .error {
        color: #990000;
      }

      .warning {
        color: #ff4d00;
      }

      .success {
        color: #0e6b0e;
      }

      form {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 1rem;
        column-gap: 1rem;
        margin: 2rem 0;
      }
    `;
  }

  constructor() {
    super();
    this.value = "";
  }

  render() {
    return html`
      <form @submit=${this._validateName}>
        <input
          type="text"
          class="text-input"
          @change=${this._nameChange}
          .value=${live(this.value)}
        />
        <input type="submit" .value=${this.w.button} />
      </form>
      <p>${this._msg ? unsafeHTML(this._msg) : ""}</p>
    `;
  }

  /**
   * @param {Event} event
   */
  _validateName(event) {
    event.preventDefault();
    const name = this.value;
    try {
      // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
      const clazz = function () {
        return Reflect.construct(
          HTMLElement,
          // eslint-disable-next-line prefer-rest-params
          arguments,
          // @ts-ignore this
          Object.getPrototypeOf(this).constructor
        );
      };
      clazz.prototype = Object.create(HTMLElement.prototype);
      clazz.prototype.constructor = clazz;

      // @ts-ignore dynamic class
      validateAndCreateElement(name, clazz);
    } catch (e) {
      if (e instanceof InvalidElementNameError) {
        this._msg = this.w.nameInfo.invalidElementNameError(name);
      } else if (e instanceof NotAPotentialCustomElementNameError) {
        this._msg = this.w.nameInfo.notAPotentialCustomElementNameError(name);
      } else if (e instanceof AlreadyUsedElementNameError) {
        this._msg = this.w.nameInfo.alreadyUsedElementNameError(name);
        // this._msg = "";
      } else {
        this._msg = this.w.nameInfo.unknownError(name);
        // this._errors = e.message;
      }
      return;
    }
    this._msg = this.w.nameInfo.validName(name);
  }

  /**
   * @param {{ target: { value: string; }; }} e
   */
  _nameChange(e) {
    this.value = e.target.value;
  }
}

// @ts-ignore CENameTestElement typings
customElements.define("ce-name-test", CENameTestElement);

const examples = ["404-element", "copyright-©", "emotion-😍", "ce-win"];

/** @type {import('./ce-name').WithCeNameWording & LitElement} */
// @ts-ignore missing properties
const LitElementWithCeNameWording = WithWording(LitElement);

export default class CENameView extends LitElementWithCeNameWording {
  static get properties() {
    return {
      testedName: { type: String, attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 936px;
        text-align: justify;
        margin: 0 auto;
      }

      h1 {
        text-align: center;
      }

      .buttons-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }

      .buttons-container > button {
        width: 150px;
        padding: 0.2rem;
      }

      .btn-example {
        margin: 0.5em;
      }

      blockquote {
        background-color: var(--soft-bg-color);
        border-color: #42b983;
        padding: 0.1rem 1.5rem;
        border-left-width: 0.5rem;
        border-left-style: solid;
        margin: 1rem 0;
      }
    `;
  }

  constructor() {
    super();
    this.testedName = "";
  }

  render() {
    return html`
      <h1>${this.w.title}</h1>
      <div>${unsafeHTML(this.w.intro)}</div>
      <div class="buttons-container">
        ${examples.map(
          (name) =>
            html`<button
              class="btn-example"
              @click=${() => {
                this.testedName = name;
              }}
            >
              ${name}
            </button>`
        )}
      </div>
      <ce-name-test
        .wording=${this.w.test}
        .lang=${this.lang}
        value=${live(this.testedName)}
      ></ce-name>
    `;
  }
}

// @ts-ignore missing properties
customElements.define(selector, CENameView);
