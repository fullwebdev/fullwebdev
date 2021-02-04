/* eslint-disable no-shadow, wc/no-closed-shadow-root, class-methods-use-this */
//#region workaround
HTMLElement.prototype._attachShadow =
  HTMLElement.prototype.attachShadow;
HTMLElement.prototype.attachShadow = function () {
  return this._attachShadow({ mode: "open" });
};
//#endregion workaround

//#region el-with-private-field
class ClosedComponent extends HTMLElement {
  #root;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "closed" });

    const content = document.createElement("p");
    content.textContent = "Closed Shadow DOM";
    this.#root.appendChild(content);
  }

  addText(text) {
    if (text.length < 20) {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = text;
      this.#root.appendChild(newParagraph);
    }
  }
}
//#endregion el-with-private-field

customElements.define("demo-closed", ClosedComponent);

//#region el-in-iife
(function () {
  let root;
  class ClosedComponent extends HTMLElement {
    //#region closed-constructor
    constructor() {
      super();
      root = this.attachShadow({ mode: "closed" });

      const content = document.createElement("p");
      content.textContent = "Closed Shadow DOM";
      root.appendChild(content);
    }
    //#endregion closed-constructor

    //#region add-text
    addText(text) {
      if (text.length < 20) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = text;
        root.appendChild(newParagraph);
      }
    }
    //#endregion add-text
  }

  customElements.define(
    "demo-closed-iife",
    ClosedComponent
  );
})();
//#endregion el-in-iife

//#region add-long-text
const closedCpt = document.querySelector("demo-closed");
const longText = "Lorem ipsum dolor sit amet";
closedCpt.addText(longText);
//#endregion add-long-text

// see syntax-error-private.js

//#region append
const longTextContainer = document.createElement("p");
longTextContainer.textContent = longText;
closedCpt.shadowRoot.appendChild(longTextContainer);
//#endregion append
