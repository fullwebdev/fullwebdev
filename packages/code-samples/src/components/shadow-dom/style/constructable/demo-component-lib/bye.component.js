import { commonStyle } from "./common-style.js";

const byeByeStyle = new CSSStyleSheet();
byeByeStyle.replaceSync(`* { font-style: italic; }`);

class ByeStyleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [
      commonStyle,
      byeByeStyle,
    ];

    const text = document.createElement("p");
    text.textContent = "Bye bye (with style)!";
    this.shadowRoot.appendChild(text);
  }
}

customElements.define("dcl-bye-style", ByeStyleComponent);
