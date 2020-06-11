{
  const loremIpsum = [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elits.",
    "Sed do eiusmod tempor incididunt.",
    "Ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam.",
  ];

  const getRandomText = () => {
    const id = Math.floor(
      Math.random() * loremIpsum.length
    );

    return loremIpsum[id];
  };

  //#region template
  const template = document.createElement("template");
  template.innerHTML = /* HTML */ `
    <style>
      :host {
        border: 1px solid
          var(--random-text-border-color, black);
        display: block;
        padding: 1rem;
      }
    </style>
    <span class="random-text"></span>
  `;
  //#endregion template

  class RandomLoremIpsumComponent extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));
      shadow.querySelector(
        ".random-text"
      ).textContent = getRandomText();
    }
  }

  customElements.define(
    "random-lorem-ipsum",
    RandomLoremIpsumComponent
  );
}
