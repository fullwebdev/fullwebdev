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

  //#region component
  const template = document.getElementById(
    "random-lorem-ipsum-template"
  );

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
  //#endregion component

  customElements.define(
    "random-lorem-ipsum",
    RandomLoremIpsumComponent
  );
}
