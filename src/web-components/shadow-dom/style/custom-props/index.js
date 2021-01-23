class RandomTextComponent extends HTMLElement {
  constructor() {
    super();

    this.loremIpsum = [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elits.",
      "Sed do eiusmod tempor incididunt.",
      "Ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam.",
      "Quis nostrud exercitation ullamco laboris.",
      "Nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit.",
      "In voluptate velit esse cillum dolore.",
    ];

    const span = document.createElement("span");
    span.textContent = this.getRandomText();

    // defined as a link for demo purpose only
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "component.css");

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(styleLink);
    shadow.appendChild(span);
  }

  getRandomText() {
    const id = Math.floor(
      Math.random() * this.loremIpsum.length
    );
    return this.loremIpsum[id];
  }
}

customElements.define("random-text", RandomTextComponent);
