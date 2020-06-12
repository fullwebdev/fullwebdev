//#region class
class ConnectedHelloWorldComponent extends HTMLElement {
  //#region connectedCallback
  connectedCallback() {
    console.log("<good-hello-world> connected");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    this.appendChild(p);
  }
  //#endregion connectedCallback
  //#region disconnectedCallback
  disconnectedCallback() {
    console.log("<good-hello-world> disconnected");
    this.innerHTML = "";
  }
  //#endregion disconnectedCallback
}
//#endregion class

customElements.define(
  "connected-hello-world",
  ConnectedHelloWorldComponent
);
