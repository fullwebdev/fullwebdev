export class HelloWorldComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hello World</p>";
  }
}
