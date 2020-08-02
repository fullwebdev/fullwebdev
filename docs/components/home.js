import { html } from "lit-html";
import "./logo.js";

const feature = (data) => html`<div class="feature">
  <h2>${data.title}</h2>
  <p>${data.details}</p>
</div>`;

export default (data) => html`<main class="home" aria-labelledby="main-title">
  <header class="hero">
    <fwd-logo id="logo"></fwd-logo>

    <h1 id="main-title">
      ${data.heroText}
      <span style="display: block;">${data.heroSubText}</span>
    </h1>

    <p class="description">
      ${data.tagline}
    </p>

    <p class="action">
      <a class="action-button button" href="./about/"
        >${data.actionText} -&gt;</a
      >
    </p>
  </header>

  <div class="features">
    ${data.features ? data.features.map(feature) : ""}
  </div>

  <div class="footer">
    ${data.footer}
  </div>
</main>`;
