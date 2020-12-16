import { store } from "./store.js";
import { p } from "./dom.js";

//#region component
class CounterValue extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const valueEl = p();
    this.shadowRoot.append(valueEl);

    const render = () => {
      valueEl.textContent = store.getState().toString();
    };

    render();
    store.subscribe(render);
  }
}
//#endregion component

//#region create
customElements.define("counter-value", CounterValue);
//#endregion create
