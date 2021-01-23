//#region class
class GoodHelloWorldComponent extends HTMLElement {
  constructor() {
    super();
    this._rendered = false;
  }

  render() {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    this.appendChild(p);
    this._rendered = true;
  }

  connectedCallback() {
    if (!this._rendered) {
      this.render();
    }
  }
}
//#endregion class

customElements.define(
  "good-hello-world",
  GoodHelloWorldComponent
);
