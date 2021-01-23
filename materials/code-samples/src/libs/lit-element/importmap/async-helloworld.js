/*
 * derived from
 * https://github.com/Polymer/lit-element/blob/20b6eff/docs/_includes/projects/docs/templates/design/update-properties.js
 * by The Polymer Authors
 * under BSD 3-Clause License
 */

import { LitElement, html, css } from "lit-element";

class AsyncHelloWorld extends LitElement {
  //#region styles
  static get styles() {
    return css`
      p {
        color: red;
      }
    `;
  }
  //#endregion styles

  //#region properties
  static get properties() {
    return {
      message: { type: String },
    };
  }
  //#endregion properties

  //#region constructor
  constructor() {
    super();
    this.message = "Loading";
    this.addEventListener("msg-loaded", (e) => {
      this.message = e.detail;
    });
    this.loadMsg();
  }
  //#endregion constructor

  //#region render
  render() {
    return html`<p>${this.message}</p>`;
  }
  //#endregion render

  loadMsg() {
    setInterval(() => {
      let loaded = new CustomEvent("msg-loaded", {
        detail: "Hello World!",
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }
}

customElements.define("fwd-async-hw", AsyncHelloWorld);
