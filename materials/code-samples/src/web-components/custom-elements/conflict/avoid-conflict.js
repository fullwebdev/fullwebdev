class NewHelloWorldComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hello World</p>";
  }
}

if (
  typeof customElements.get("hello-world") === "undefined"
) {
  customElements.define(
    "hello-world",
    NewHelloWorldComponent
  );
} else {
  console.log(
    "An hello-world element has already been defined."
  );
}
