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
    <h1><slot name="title"></slot></h1>
    <p><slot name="content"></slot></p>
    <slot></slot>
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
