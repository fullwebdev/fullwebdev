import { p } from "./dom.js";

//#region component
class DemoCounter extends HTMLElement {
  //#region observedAttributes
  static get observedAttributes() {
    return ["value"];
  }
  //#endregion observedAttributes

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._valueEl = p();
    this.shadowRoot.append(this._valueEl);
  }

  _render(count) {
    this._valueEl.textContent = count;
  }

  set value(value) {
    this.setAttribute("value", value);
  }

  get value() {
    return this.getAttribute("value");
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  //#region attributeChangedCallback
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      this._render(newValue);
    }
  }
  //#endregion attributeChangedCallback
}
//#endregion component

//#region create
customElements.define("demo-counter", DemoCounter);
//#endregion create
