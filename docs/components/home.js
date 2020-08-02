/**
 * @typedef {{title: string, details: string}} Feature
 * @typedef {{ heroText: string; heroSubText: string; tagline: string; actionText: string; features: Feature[]; footer: string; }} HomeData
 */

import { html } from "lit-html";
import "./logo.js";

/**
 * @param {Feature} data
 */
const feature = (data) => html`<div class="feature">
  <h2>${data.title}</h2>
  <p>${data.details}</p>
</div>`;

/**
 * @param {HomeData} data
 */
export default (data) => html` <style>
    .home {
      padding: 3.6rem 2rem 0;
      max-width: 960px;
      margin: 0 auto;
      display: block;
    }
    .home .hero {
      text-align: center;
    }
    .home .hero img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }
    .home .hero h1 {
      font-size: 3rem;
    }
    .home .hero h1,
    .home .hero .description,
    .home .hero .action {
      margin: 1.8rem auto;
    }
    .home .hero .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: #6a8bad;
    }
    .home .hero .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: #217ff9;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #076ff7;
    }
    .home .hero .action-button:hover {
      background-color: #378cfa;
    }
    .home .features {
      border-top: 1px solid #eaecef;
      padding: 1.2rem 0;
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: stretch;
      justify-content: space-between;
    }
    .home .feature {
      flex-grow: 1;
      flex-basis: 30%;
      max-width: 30%;
    }
    .home .feature h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: #3a5169;
    }
    .home .feature p {
      color: #4e6e8e;
    }
    .home .footer {
      padding: 2.5rem;
      border-top: 1px solid #eaecef;
      text-align: center;
      color: #4e6e8e;
    }
    .home .hero #logo {
      margin: 5rem auto;
    }
    @media (max-width: 719px) {
      .home .features {
        flex-direction: column;
      }
      .home .feature {
        max-width: 100%;
        padding: 0 2.5rem;
      }
    }
    @media (max-width: 419px) {
      .home {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .home .hero img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }
      .home .hero h1 {
        font-size: 2rem;
      }
      .home .hero h1,
      .home .hero .description,
      .home .hero .action {
        margin: 1.2rem auto;
      }
      .home .hero .description {
        font-size: 1.2rem;
      }
      .home .hero .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
      .home .feature h2 {
        font-size: 1.25rem;
      }
    }
  </style>
  <main class="home" aria-labelledby="main-title">
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
