import {
  LitElement,
  html,
  css,
} from "https://cdn.skypack.dev/lit@2.0.0-rc.2";
// FIXME: duplicated dependency
import { until } from "https://cdn.skypack.dev/lit@2.0.0-rc.2/directives/until.js";

function loadMsg() {
  return new Promise((resolve) => {
    setInterval(resolve, 3000, "Hello World!");
  });
}
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
    this.message = loadMsg();
  }
  //#endregion constructor

  //#region render
  render() {
    // FIXME: doesn't render the expected output
    return html`${until(this.message, "loading")}`;
  }
  //#endregion render
}

customElements.define("fwd-promise-hw", AsyncHelloWorld);
