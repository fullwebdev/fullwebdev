/**
 * @typedef {{title: string, details: string}} Feature
 * @typedef {import('../../node_modules/lit-html/lib/template-result').TemplateResult} TemplateResult
 * @typedef {{ heroText: string; heroSubText: string; tagline: string; actionText: string; features?: Feature[]; license: string; copyright: string; content?: TemplateResult }} HomeData
 */

import { html } from "lit-html";

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
export default (data) => html`
  <style>
    .home {
      padding-top: 3.6rem;
      margin: 0 auto;
      display: block;
      background-color: #fff;
    }
    .home .hero {
      text-align: center;
      background-color: var(--primary-color);
      padding: 3rem;
      color: var(--text-on-primary);
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
      margin-top: 0;
    }
    .home .hero .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
    }
    .home .hero .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: var(--text-on-secondary);
      background-color: var(--secondary-color);
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid var(--secondary-color-dark);
    }
    .home .hero .action-button:hover {
      background-color: var(--secondary-color-light);
    }
    .home main {
      max-width: 1200px;
      margin: 2rem auto;
      color: var(--neutral-color-800);
    }
    .home .features {
      padding: 0 2rem 1.2rem;
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
      color: var(--neutral-color-900);
    }

    .home .footer {
      padding: 2.5rem;
      text-align: center;
      color: var(--text-on-primary);
      background-color: var(--primary-color);
    }
    .home .footer p {
      margin: 0;
    }
    .home .hero #logo {
      margin: 0 auto;
    }
    .home .banner {
      text-align: center;
      border-top: 1px solid var(--neutral-color-300);
      border-bottom: 1px solid var(--neutral-color-300);
      padding: 2rem;
      margin: 0 1rem;
    }
    @media (max-width: 719px) {
      .home .features {
        flex-direction: column;
      }
      .home .feature {
        max-width: 100%;
        padding: 0;
      }
    }
    @media (max-width: 419px) {
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
  <header class="hero">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 960 960"
      style="enable-background:new 0 0 960 960;"
      xml:space="preserve"
      width="200px"
    >
      <style type="text/css">
        .st0 {
          fill: #4d4d4d;
        }
        .st1 {
          fill: #ffffff;
        }
        .st2 {
          fill: var(--secondary-color);
        }
        .st3 {
          fill: #333333;
        }
      </style>
      <g>
        <path
          class="st0"
          d="M673.4,766.9H279.3V142.4h394.2c18.8,0,34,15.2,34,34v556.5C707.5,751.7,692.2,766.9,673.4,766.9z"
        />
        <path
          class="st1"
          d="M661.5,755.6h-379V153.7h379c17.6,0,31.9,14.3,31.9,31.9v538C693.5,741.3,679.2,755.6,661.5,755.6z"
        />
        <path
          class="st0"
          d="M646.7,766.9H269.6c-9.4,0-17-7.6-17-17V159.4c0-9.4,7.6-17,17-17h377.1c18.8,0,34,15.2,34,34v556.5   C680.7,751.7,665.5,766.9,646.7,766.9z"
        />
        <rect x="252.5" y="380.4" class="st2" width="428.2" height="217.4" />
        <rect x="575.7" y="142.4" class="st3" width="39.1" height="624.6" />
        <polygon
          class="st2"
          points="289.2,766.9 289.2,817.6 314.8,802.4 340.5,817.6 340.5,766.9  "
        />
      </g>
    </svg>

    <h1 id="main-title">
      ${data.heroText}
      <span style="display: block;">${data.heroSubText}</span>
    </h1>

    <p class="description">
      ${data.tagline}
    </p>

    <p class="action">
      <a class="action-button button" href="./01-introduction/"
        >${data.actionText} -&gt;</a
      >
    </p>
  </header>

  <main>
    <div class="features">
      ${data.features ? data.features.map(feature) : ""}
    </div>

    ${data.content ? data.content : ""}
  </main>

  <div class="footer">
    <p>${data.license}</p>
    <p>${data.copyright}</p>
  </div>
`;
