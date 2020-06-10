//#region workaround
HTMLElement.prototype._attachShadow =
  HTMLElement.prototype.attachShadow;
HTMLElement.prototype.attachShadow = function () {
  return this._attachShadow({ mode: "open" });
};
//#endregion workaround

//#region el-in-iife
(function () {
  const shadows = new WeakMap();
  class ClosedComponent extends HTMLElement {
    //#region closed-constructor
    constructor() {
      super();
      const root = this.attachShadow({ mode: "closed" });

      const content = document.createElement("p");
      content.textContent = "Closed Shadow DOM";
      root.appendChild(content);

      shadows.set(this, root);
    }
    //#endregion closed-constructor

    //#region add-text
    addText(text) {
      if (text.length < 20) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = text;
        shadows.get(this).appendChild(newParagraph);
      }
    }
    //#endregion add-text
  }

  customElements.define("demo-closed", ClosedComponent);
})();
//#endregion el-in-iife

//#region add-long-text
const closedCpt = document.querySelector("demo-closed");
const longText = "Lorem ipsum dolor sit amet";
closedCpt.addText(longText);
//#endregion add-long-text

//#region append
const longTextContainer = document.createElement("p");
longTextContainer.textContent = longText;
closedCpt.shadowRoot.appendChild(longTextContainer);
//#endregion append
