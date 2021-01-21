import { store, increment, decrement } from "./store.js";
import { p, button } from "./dom.js";

//#region component
class CounterPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(
      p(
        button("increment", "++"),
        button("decrement", "--")
      )
    );

    this.shadowRoot.addEventListener("click", (e) => {
      const el = e.target;
      if (el.closest(".increment")) {
        store.dispatch(increment());
      } else if (el.closest(".decrement")) {
        store.dispatch(decrement());
      }
    });
  }
}
//#endregion component

//#region create
customElements.define("counter-panel", CounterPanel);
//#endregion create
