//#region empty-component
class EmptyComponent extends HTMLParagraphElement {}
//#endregion empty-component

class HelloWorldParagraphComponent extends HTMLParagraphElement {
  connectedCallback() {
    this.textContent = "Hello Paragraph!";
  }
}

//#region define
customElements.define(
  "hello-world",
  HelloWorldParagraphComponent,
  { extends: "p" }
);
//#endregion define
