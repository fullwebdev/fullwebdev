/* eslint-disable no-undef */
const loveContainer = document.getElementById(
  "non-ascii-container"
);

const nonAsciiName = "emotion-😍";

customElements.define(nonAsciiName, LoveComponent);

try {
  const customElement = document.createElement(
    nonAsciiName
  );
  loveContainer.appendChild(customElement);
} catch (e) {
  loveContainer.innerHTML = `<${nonAsciiName}></${nonAsciiName}>`;
}
