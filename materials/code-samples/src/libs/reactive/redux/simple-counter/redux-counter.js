import { store } from "./store.js";

const button = (className, text) => {
  const elmt = document.createElement("button");
  elmt.className = className;
  elmt.textContent = text;
  return elmt;
};

const p = (...children) => {
  const elmt = document.createElement("p");
  elmt.append(...children);
  return elmt;
};

//#region component
class ReduxCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const valueEl = p();

    this.shadowRoot.append(
      valueEl,
      p(
        button("increment", "++"),
        button("decrement", "--")
      )
    );

    const render = () => {
      valueEl.textContent = store.getState().toString();
    };

    render();
    store.subscribe(render);

    this.shadowRoot.addEventListener("click", (e) => {
      const el = e.target;
      if (el.closest(".increment")) {
        store.dispatch({ type: "INCREMENT" });
      } else if (el.closest(".decrement")) {
        store.dispatch({ type: "DECREMENT" });
      }
    });
  }
}
//#endregion component

//#region create
customElements.define("redux-counter", ReduxCounter);
//#endregion create
