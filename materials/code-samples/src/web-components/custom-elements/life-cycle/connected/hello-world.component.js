//#region class
class ConnectedHelloWorldComponent extends HTMLElement {
  //#region connectedCallback
  connectedCallback() {
    console.log("composant connecté");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    this.appendChild(p);
  }
  //#endregion connectedCallback
  //#region disconnectedCallback
  disconnectedCallback() {
    console.log("composant déconnecté");
    this.innerHTML = "";
  }
  //#endregion disconnectedCallback
}
//#endregion class

customElements.define(
  "hello-world",
  ConnectedHelloWorldComponent
);
