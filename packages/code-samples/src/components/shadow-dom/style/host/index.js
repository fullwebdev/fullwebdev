class RandomTextComponent extends HTMLElement {
  //#region constructor
  constructor() {
    super();
    const span = document.createElement("span");
    span.textContent = this.getRandomText();

    const style = document.createElement("style");
    //#region style
    style.textContent = `
      :host {
        color: gray;
        border: 1px solid black;
        padding: 1rem;
      }
    `;
    //#endregion style

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style);
    shadow.appendChild(span);
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
