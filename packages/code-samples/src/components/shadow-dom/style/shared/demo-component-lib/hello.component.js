// demo-component-lib/hello.component.js

import { commonStyle } from "./common-style.js";

class HelloStyleComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = commonStyle;
    shadowRoot.appendChild(styleEl);
    const text = document.createElement("p");
    text.textContent = "Hello World (with style)!";
    shadowRoot.appendChild(text);
  }
}

customElements.define(
  "dcl-hello-style",
  HelloStyleComponent
);
