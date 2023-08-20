/* eslint-disable class-methods-use-this */
// @ts-nocheck see https://github.com/microsoft/TypeScript/issues/30022

//#region constructor
//#region style
const randomTextStyle = new CSSStyleSheet();
randomTextStyle.replaceSync(`
:host {
  color: gray;
  border: 1px solid black;
  padding: 1rem;
}
`);
//#endregion style

class RandomTextComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [randomTextStyle];

    const span = document.createElement("span");
    span.textContent = this.getRandomText();
    this.shadowRoot.appendChild(span);
  }
  //#endregion constructor

  //#region getRandomText
  getRandomText() {
    const loremIpsum = [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elits.",
      "Sed do eiusmod tempor incididunt.",
      "Ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam.",
    ];

    const id = Math.floor(
      Math.random() * loremIpsum.length
    );
    return loremIpsum[id];
  }
  //#endregion getRandomText
}

//#region define
customElements.define("random-text", RandomTextComponent);
//#endregion define
