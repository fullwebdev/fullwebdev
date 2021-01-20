import { commonStyle } from "./common-style.js";

class ByeStyleComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = `${commonStyle}
      * {
        font-style: italic;
      }
    `;
    shadowRoot.appendChild(styleEl);
    const text = document.createElement("p");
    text.textContent = "Bye bye (with style)!";
    shadowRoot.appendChild(text);
  }
}

customElements.define("dcl-bye-style", ByeStyleComponent);
