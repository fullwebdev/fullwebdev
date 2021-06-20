// see https://github.com/Polymer/lit-element/issues/603
import {
  LitElement,
  html,
} from "https://cdn.skypack.dev/lit-element@2.4.0";

//#region component
class HelloWorld extends LitElement {
  render() {
    return html`<p>Hello World!</p>`;
  }
}
//#endregion component

customElements.define("fwd-helloworld", HelloWorld);
