import { p, button } from "./dom.js";

//#region component
class DemoNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(
      p(button("previous", "<"), button("next", ">"))
    );

    this.shadowRoot.addEventListener("click", (e) => {
      const el = e.target;
      if (el.closest(".next")) {
        this.dispatchEvent(
          new Event("next-item", {
            bubbles: true,
          })
        );
      } else if (el.closest(".previous")) {
        this.dispatchEvent(
          new Event("previous-item", {
            bubbles: true,
          })
        );
      }
    });
  }
}
//#endregion component

//#region create
customElements.define("demo-nav", DemoNav);
//#endregion create
