{
  //#region template
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        border: 1px solid
          var(--random-text-border-color, black);
        display: block;
        padding: 1rem;
      }
    </style>
    <h1>Hello</h1>
    <p><slot></slot></p>
  `;
  //#endregion template

  class DemoBoxComponent extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("demo-box", DemoBoxComponent);
}
