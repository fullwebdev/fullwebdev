// @ts-nocheck private method standard won't be supported by typescript until v4.3
// https://github.com/microsoft/TypeScript/issues/39066#issuecomment-754780049

{
  //#region constructor
  //#region template
  const template = document.createElement("template");
  template.innerHTML = /* HTML */ `
    <style>
      :host {
        border: 1px solid
          var(--random-text-border-color, black);
        display: block;
        padding: 1rem;
      }
    </style>
    <span class="random-text"></span>
  `;
  //#endregion template

  class RandomTextComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));
    }
    //#endregion constructor

    //#region privateFields
    #possibleTexts = [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elits.",
      "Sed do eiusmod tempor incididunt.",
      "Ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam.",
    ];

    #text = this.#getRandomText();
    //#endregion privateFields

    //#region observedAttributes
    static get observedAttributes() {
      return ["color", "inverted"];
    }
    //#endregion observedAttributes

    //#region getText
    get text() {
      return this.#text;
    }
    //#endregion getText

    //#region set-color
    set color(val) {
      if (val) {
        this.setAttribute("color", val);
      } else {
        this.removeAttribute("color");
      }
    }
    //#endregion set-color

    //#region getters
    get color() {
      return this.getAttribute("color");
    }

    get isInverted() {
      return this.hasAttribute("inverted");
    }
    //#endregion getters

    //#region possible-texts
    set possibleTexts(val) {
      if (Array.isArray(val) && val.length > 0) {
        this.#possibleTexts = val;
        this.newText();
      } else {
        throw new Error("invalid possibleTexts value");
      }
    }

    get possibleTexts() {
      return this.#possibleTexts;
    }
    //#endregion possible-texts

    //#region inverted-setter
    invert() {
      if (this.isInverted) {
        this.removeAttribute("inverted");
      } else {
        this.setAttribute("inverted", "");
      }
    }
    //#endregion inverted-setter

    //#region newText
    newText() {
      const oldText = this.#text;
      do {
        this.#text = this.#getRandomText();
      } while (oldText === this.#text);
      this.render();
    }
    //#endregion newText

    //#region render
    render() {
      const container = this.shadowRoot.querySelector(
        ".random-text"
      );

      if (container) {
        container.textContent = this.#text;
      }
    }
    //#endregion render

    //#region attributeChangedCallback
    attributeChangedCallback(name, oldValue, newValue) {
      this.#updateColor(this.color, this.isInverted);
    }
    //#endregion attributeChangedCallback

    //#region updateColor
    #updateColor(color, isInverted) {
      /**
       * @type {HTMLElement}
       */
      const content = this.shadowRoot.querySelector(
        ".random-text"
      );
      if (isInverted) {
        content.style.color = "black";
        content.style.backgroundColor = color;
      } else {
        content.style.color = color;
        content.style.backgroundColor = "white";
      }
    }
    //#endregion updateColor

    //#region getRandomText
    #getRandomText() {
      const id = Math.floor(
        Math.random() * this.#possibleTexts.length
      );

      return this.#possibleTexts[id];
    }
    //#endregion getRandomText

    //#region connectedCallback
    connectedCallback() {
      this.render();
    }
    //#endregion connectedCallback
  }

  customElements.define("random-text", RandomTextComponent);
}
