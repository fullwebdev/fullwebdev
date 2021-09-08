/* eslint-disable max-classes-per-file */
import { LitElement, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { WithWording } from "../utils/wording-mixin.js";

const mailchimpClassicStyle = css`
  /* #region MailChimp Form Embed Code - Classic - 12/17/2015 v10.7 */
  #mc_embed_signup form {
    display: block;
    position: relative;
    text-align: left;
    padding: 10px 0 10px 3%;
  }
  #mc_embed_signup h2 {
    font-weight: bold;
    padding: 0;
    margin: 15px 0;
    font-size: 1.4em;
  }
  #mc_embed_signup input {
    border: 1px solid #abb0b2;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  #mc_embed_signup input[type="checkbox"] {
    -webkit-appearance: checkbox;
  }
  #mc_embed_signup input[type="radio"] {
    -webkit-appearance: radio;
  }
  #mc_embed_signup input:focus {
    border-color: #333;
  }
  #mc_embed_signup .button {
    clear: both;
    background-color: #aaa;
    border: 0 none;
    border-radius: 4px;
    transition: all 0.23s ease-in-out 0s;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: normal;
    height: 32px;
    line-height: 32px;
    margin: 0 5px 10px 0;
    padding: 0 22px;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
    width: auto;
  }
  #mc_embed_signup .button:hover {
    background-color: #777;
  }
  #mc_embed_signup .small-meta {
    font-size: 11px;
  }
  #mc_embed_signup .nowrap {
    white-space: nowrap;
  }

  #mc_embed_signup .mc-field-group {
    clear: left;
    position: relative;
    width: 96%;
    padding-bottom: 3%;
    min-height: 50px;
  }
  #mc_embed_signup .size1of2 {
    clear: none;
    float: left;
    display: inline-block;
    width: 46%;
    margin-right: 4%;
  }
  * html #mc_embed_signup .size1of2 {
    margin-right: 2%; /* Fix for IE6 double margins. */
  }
  #mc_embed_signup .mc-field-group label {
    display: block;
    margin-bottom: 3px;
  }
  #mc_embed_signup .mc-field-group input {
    display: block;
    width: 100%;
    padding: 8px 0;
    text-indent: 2%;
  }
  #mc_embed_signup .mc-field-group select {
    display: inline-block;
    width: 99%;
    padding: 5px 0;
    margin-bottom: 2px;
  }

  #mc_embed_signup .datefield,
  #mc_embed_signup .phonefield-us {
    padding: 5px 0;
  }
  #mc_embed_signup .datefield input,
  #mc_embed_signup .phonefield-us input {
    display: inline;
    width: 60px;
    margin: 0 2px;
    letter-spacing: 1px;
    text-align: center;
    padding: 5px 0 2px 0;
  }
  #mc_embed_signup .phonefield-us .phonearea input,
  #mc_embed_signup .phonefield-us .phonedetail1 input {
    width: 40px;
  }
  #mc_embed_signup .datefield .monthfield input,
  #mc_embed_signup .datefield .dayfield input {
    width: 30px;
  }
  #mc_embed_signup .datefield label,
  #mc_embed_signup .phonefield-us label {
    display: none;
  }

  #mc_embed_signup .indicates-required {
    text-align: right;
    font-size: 11px;
    margin-right: 4%;
  }
  #mc_embed_signup .asterisk {
    color: #e85c41;
    font-size: 150%;
    font-weight: normal;
    position: relative;
    top: 5px;
  }
  #mc_embed_signup .clear {
    clear: both;
  }

  #mc_embed_signup .mc-field-group.input-group ul {
    margin: 0;
    padding: 5px 0;
    list-style: none;
  }
  #mc_embed_signup .mc-field-group.input-group ul li {
    display: block;
    padding: 3px 0;
    margin: 0;
  }
  #mc_embed_signup .mc-field-group.input-group label {
    display: inline;
  }
  #mc_embed_signup .mc-field-group.input-group input {
    display: inline;
    width: auto;
    border: none;
  }

  #mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em 0.5em 0em 0.5em;
    overflow: hidden;
    width: 90%;
    margin: 0 5%;
    clear: both;
  }
  #mc_embed_signup div.response {
    margin: 1em 0;
    padding: 1em 0.5em 0.5em 0;
    font-weight: bold;
    float: left;
    top: -1.5em;
    z-index: 1;
    width: 80%;
  }
  #mc_embed_signup #mce-success-response {
    color: #529214;
    display: none;
  }
  #mc_embed_signup label.error {
    display: block;
    float: none;
    width: auto;
    margin-left: 1.05em;
    text-align: left;
    padding: 0.5em 0;
  }

  #mc-embedded-subscribe {
    clear: both;
    width: auto;
    display: block;
    margin: 1em 0 1em 5%;
  }
  #mc_embed_signup #num-subscribers {
    font-size: 1.1em;
  }
  #mc_embed_signup #num-subscribers span {
    padding: 0.5em;
    border: 1px solid #ccc;
    margin-right: 0.5em;
    font-weight: bold;
  }

  #mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {
    display: inline-block;
    margin: 2px 0 1em 0;
    padding: 5px 10px;
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: normal;
    z-index: 1;
    color: #e85c41;
  }
  #mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {
    border: 2px solid #e85c41;
  }
`;

/** @type {import('./newsletter').WithSignupFormWording & LitElement} */
// @ts-ignore missing properties
const LitElementWithSignupFormWording = WithWording(LitElement);

class SignupFormElement extends LitElementWithSignupFormWording {
  static get properties() {
    return {
      lang: { type: String },
      _isFormValid: { type: Boolean, state: true },
    };
  }

  static get styles() {
    return [
      mailchimpClassicStyle,
      css`
        #mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
        }

        #mce-error-response {
          color: red;
        }

        #mc_embed_signup form.validate input:invalid {
          border-color: red;
        }
      `,
    ];
  }

  constructor() {
    super();
    this._isFormValid = true;
  }

  render() {
    return html`
      <div id="mc_embed_signup">
        <form
          action="https://dev.us6.list-manage.com/subscribe/post?u=a175e3f2fbec90f88f90004d7&amp;id=f3174ea4f5"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class=${classMap({ validate: !this._isFormValid })}
          target="_blank"
          novalidate
          @submit=${this.handleSubmit}
        >
          <div id="mc_embed_signup_scroll">
            <h2>${this.w.title}</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> ${this.w.indicatesRequired}
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL"
                >${this.w.labels.email} <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div class="mc-field-group input-group">
              <strong
                >${this.w.labels.lang} <span class="asterisk">*</span>
              </strong>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="English"
                    name="LANG"
                    id="mce-LANG-0"
                    ?checked=${this.lang === "en"}
                    required
                  /><label for="mce-LANG-0">English</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Français"
                    name="LANG"
                    id="mce-LANG-1"
                    ?checked=${this.lang === "fr"}
                  /><label for="mce-LANG-1">Français</label>
                </li>
              </ul>
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">${this.w.labels.fname} </label>
              <input
                type="text"
                value=""
                name="FNAME"
                class=""
                id="mce-FNAME"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">${this.w.labels.lname} </label>
              <input
                type="text"
                value=""
                name="LNAME"
                class=""
                id="mce-LNAME"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-COMPANY">${this.w.labels.company} </label>
              <input
                type="text"
                value=""
                name="COMPANY"
                class=""
                id="mce-COMPANY"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-TITLE">${this.w.labels.title} </label>
              <input
                type="text"
                value=""
                name="TITLE"
                class=""
                id="mce-TITLE"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                ?hidden=${this._isFormValid}
              >
                ${this.w.invalidForm}
              </div>
              <div
                class="response"
                id="mce-success-response"
                style="display:none"
              ></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_a175e3f2fbec90f88f90004d7_f3174ea4f5"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                .value=${this.w.submit}
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
            <p class="invalid-msg" ?hidden=${this._isFormValid}></p>
          </div>
        </form>
      </div>
    `;
  }

  /**
   * @param {Event} ev
   */
  // eslint-disable-next-line class-methods-use-this
  handleSubmit(ev) {
    /** @type {HTMLFormElement} */
    // prettier-ignore
    const form = (/** @type {HTMLFormElement} */ ev.target);
    if (!form.checkValidity()) {
      this._isFormValid = false;
      ev.preventDefault();
      return false;
    }
  }
}

// @ts-ignore missing props
customElements.define("mlc-signup-form", SignupFormElement);

export const selector = "app-newsletter-view";

/** @type {import('./newsletter').WithNewsletterViewWording & LitElement} */
// @ts-ignore missing properties
const LitElementNewsletterViewWording = WithWording(LitElement);

export class NewsletterView extends LitElementNewsletterViewWording {
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 936px;
        margin: 0 auto;
      }
    `;
  }

  render() {
    return html`
      <mlc-signup-form
        .lang=${this.lang}
        .wording=${this.w.signupForm}
      ></mlc-signup-form>
    `;
  }
}

// @ts-ignore missing props
customElements.define(selector, NewsletterView);
