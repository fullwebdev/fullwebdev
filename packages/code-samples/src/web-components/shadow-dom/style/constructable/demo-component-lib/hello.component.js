// demo-component-lib/hello.component.js

import { commonStyle } from "./common-style.js";

class HelloStyleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonStyle];

    const text = document.createElement("p");
    text.textContent = "Hello World (with style)!";
    this.shadowRoot.appendChild(text);
  }
}

customElements.define(
  "dcl-hello-style",
  HelloStyleComponent
);
