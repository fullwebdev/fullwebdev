import {
  LitElement,
  html,
  css,
} from "https://cdn.skypack.dev/lit@2.0.0-rc.2";
import { until } from "https://cdn.skypack.dev/lit@2.0.0-rc.2/directives/until.js";

function loadMsg() {
  return new Promise((resolve) => {
    setInterval(resolve, 3000, "Hello World!");
  });
}
class PromiseHelloWorld extends LitElement {
  //#region styles
  static get styles() {
    return css`
      p {
        color: green;
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
    this.message = loadMsg();
  }
  //#endregion constructor

  //#region render
  render() {
    return html`<p>${until(this.message, "Loading")}</p>`;
  }
  //#endregion render
}

customElements.define("fwd-promise-hw", PromiseHelloWorld);
