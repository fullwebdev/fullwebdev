class HelloWorldParagraphComponent extends HTMLParagraphElement {
  //#region constructor
  constructor() {
    const el = super();
  }
  //#endregion constructor

  connectedCallback() {
    this.innerHTML = "Hello Paragraph!";
  }
}

//#region define
customElements.define(
  "hello-world",
  HelloWorldParagraphComponent,
  { extends: "p" }
);
//#endregion define
