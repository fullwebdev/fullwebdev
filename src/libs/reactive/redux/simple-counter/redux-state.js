import { store } from "./store.js";

//#region component
class ReduxState extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    store.subscribe(() => {
      this.shadowRoot.textContent =
        "state: " + store.getState().toString();
    });
  }
}
//#endregion component

//#region create
customElements.define("redux-state", ReduxState);
//#endregion create
