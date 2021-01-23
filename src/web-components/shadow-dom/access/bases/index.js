//#region open-component
class OpenComponent extends HTMLElement {
  constructor() {
    super();
    //#region attach-open-shadow
    const shadowRoot = this.attachShadow({ mode: "open" });
    //#endregion attach-open-shadow

    const content = document.createElement("p");
    content.textContent = "Open Shadow DOM";
    shadowRoot.appendChild(content);
  }
}

customElements.define("demo-open", OpenComponent);
//#endregion open-component

//#region closed-component
class ClosedComponent extends HTMLElement {
  //#region closed-constructor
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "closed" });

    const content = document.createElement("p");
    content.textContent = "Closed Shadow DOM";
    this._root.appendChild(content);
  }
  //#endregion closed-constructor

  //#region add-text
  addText(text) {
    if (text.length < 20) {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = text;
      this._root.appendChild(newParagraph);
    }
  }
  //#endregion add-text
}

customElements.define("demo-closed", ClosedComponent);
//#endregion closed-component

//#region append-to-component
const openCpt = document.querySelector("demo-open");
const lightP = document.createElement("p");
lightP.textContent =
  "This was added outside the Shadow DOM";
openCpt.appendChild(lightP);
//#endregion append-to-component

//#region append-to-el
const shadowEl = document.getElementById("shadow");
shadowEl.attachShadow({ mode: "open" });
const lightP2 = document.createElement("p");
lightP2.textContent =
  "This was added outside the Shadow DOM";
shadowEl.appendChild(lightP2);
//#endregion append-to-el

//#region append-to-open-shadow
const p = document.createElement("p");
p.textContent = "This was added to the Shadow DOM";
openCpt.shadowRoot.appendChild(p);
//#endregion append-to-open-shadow

try {
  //#region append-to-closed-shadow
  const closedCpt = document.querySelector("demo-closed");
  closedCpt.shadowRoot.appendChild(p);
  //#endregion append-to-closed-shadow
} catch (e) {
  const errorContainer = document.querySelector(
    ".error-closed"
  );
  errorContainer.textContent = e;
}

//#region use-add-text
const closedCpt = document.querySelector("demo-closed");
closedCpt.addText("Lorem ipsum");
//#endregion use-add-text

//#region add-long-text
const longText = "Lorem ipsum dolor sit amet";
closedCpt.addText(longText);
//#endregion add-long-text

//#region append-long-text
const longTextContainer = document.createElement("p");
longTextContainer.textContent = longText;
closedCpt._root.appendChild(longTextContainer);
//#endregion append-long-text
