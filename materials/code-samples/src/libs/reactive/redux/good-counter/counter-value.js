/* eslint-disable no-multi-assign */
import { store, counterSelector } from "./store.js";
import { p } from "./dom.js";

//#region component
class CounterValue extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._valueEl = p();
    this.shadowRoot.append(this._valueEl);
  }

  _render(count) {
    this._valueEl.textContent = count.toString();
  }

  connectedCallback() {
    this._render(counterSelector(store.getState()));
    let count;
    this._unsubscribe = store.subscribe(() => {
      const previousValue = count;
      const currentValue = (count = counterSelector(
        store.getState()
      ));
      if (previousValue !== currentValue) {
        this._render(currentValue);
      }
    });
  }

  disconnectedCallback() {
    this._unsubscribe();
  }
}
//#endregion component

//#region create
customElements.define("counter-value", CounterValue);
//#endregion create
