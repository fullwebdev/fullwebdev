//#region element-append
//#region attach-element
const shadow = document
  .getElementById("shadow")
  .attachShadow({ mode: "open" });
//#endregion attach-element

const p = document.createElement("p");
p.textContent = "But this paragraph is isolated";

shadow.appendChild(p);
//#endregion element-append

//#region custom-element
class VerseComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const text = document.createElement("p");
    text.textContent = "And this custom element too";

    shadowRoot.appendChild(text);
  }
}

customElements.define("poem-verse", VerseComponent);
//#endregion custom-element

//#region styled
class AuthorComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      p {
        color: green;
      }
    `;

    const text = document.createElement("p");
    text.textContent = "- an Anonymous FullWebDev Poet";

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(text);
  }
}

customElements.define("poem-author", AuthorComponent);
//#endregion styled

/**
 * TODO: examples avoiding flash of unstyled content (FOUC)
 *  - fetch
 *  - css visibility
 *  - <link rel="preload" href="bye.component.css" as="style" /> not working
 *  - link onload
 */
//#region ext-styled
class ConclusionComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "bye.component.css");

    const text = document.createElement("p");
    text.textContent = "Thx 👋";

    shadowRoot.appendChild(styleLink);
    shadowRoot.appendChild(text);
  }
}

customElements.define(
  "poem-conclusion",
  ConclusionComponent
);
//#endregion ext-styled
