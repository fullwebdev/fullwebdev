// @ts-nocheck private method standard won't be supported by typescript until v4.3
// https://github.com/microsoft/TypeScript/issues/39066#issuecomment-754780049
{
  //#region repeatOrCutToLength
  const repeatOrCutToLength = (str, length) =>
    str
      .repeat(Math.ceil(length / str.length))
      .slice(0, length);
  //#endregion repeatOrCutToLength

  //#region positiveIntOrNull
  const positiveIntOrNull = (val) => {
    const num = +val;
    return Number.isInteger(num) && num > 0 ? num : null;
  };
  //#endregion positiveIntOrNull

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
    //#region observedAttributes
    static get observedAttributes() {
      return ["length"];
    }
    //#endregion observedAttributes

    //#region constructor
    #possibleTexts = [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elits.",
      "Sed do eiusmod tempor incididunt.",
      "Ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam.",
    ];

    #currentRandomText = this.#getRandomText();

    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));
    }
    //#endregion constructor

    //#region get-length
    get length() {
      return positiveIntOrNull(this.getAttribute("length"));
    }
    //#endregion get-length

    //#region set-length
    set length(val) {
      if (val || val === 0) {
        this.setAttribute("length", val);
      } else {
        this.removeAttribute("length");
      }
    }
    //#endregion set-length

    //#region possible-texts
    set possibleTexts(val) {
      if (Array.isArray(val) && val.length > 0) {
        this.#possibleTexts = val;
        this.newText();
        this.render();
      } else {
        throw new Error(
          "possibleTexts should be a non-empty array"
        );
      }
    }

    get possibleTexts() {
      return this.#possibleTexts;
    }
    //#endregion possible-texts

    //#region newText
    newText() {
      const oldText = this.#text;
      do {
        this.#currentRandomText = this.#getRandomText();
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
      if (
        name === "length" &&
        positiveIntOrNull(oldValue) !==
          positiveIntOrNull(newValue)
      ) {
        this.render();
      }
    }
    //#endregion attributeChangedCallback

    //#region getRandomText
    #getRandomText() {
      const id = Math.floor(
        Math.random() * this.#possibleTexts.length
      );

      return this.#possibleTexts[id];
    }
    //#endregion getRandomText

    //#region get-text
    get #text() {
      return this.length
        ? repeatOrCutToLength(
            this.#currentRandomText,
            this.length
          )
        : this.#currentRandomText;
    }
    //#endregion get-text

    //#region lazyProp
    connectedCallback() {
      this.#upgradeProperty("possibleTexts");
      this.#upgradeProperty("length");
      this.render();
    }

    #upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        const value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }
    //#endregion lazyProp
  }

  customElements.define("random-text", RandomTextComponent);
}
