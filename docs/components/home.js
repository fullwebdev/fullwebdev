/**
 * @typedef {{title: string, details: string}} Feature
 * @typedef {{ heroText: string; heroSubText: string; tagline: string; actionText: string; features: Feature[]; footer: string; }} HomeData
 */

import { html } from "lit-html";

class FwdLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /* CSS from SCSS

      $triwidth: 50px;

      $sqrt3: 1.732;
      $tilt: 52.62deg; // asin(tan(54deg)/sqrt(3))
      $capheight: -1.051 * $triwidth; // sqrt(3-tan(54deg) ^2 )
      $triheight: $triwidth * $sqrt3;
      $vshift: $capheight + $triheight / 2;

      $innerradius: 1.376 * $triwidth; // tan(54deg)
      $outerradius: 1.701 * $triwidth; // 1/cos(54deg)
      $sidetilt: 10.81deg; // asin( (sec(54deg)-tan(54deg))/sqrt(3) )
      $sideheight: $outerradius; // !!! sqrt(3-(sec(54deg)-tan(54deg))^2)
      $vshift2: $sideheight + $triheight - $vshift;

      :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .solid {
        position: relative;
        width: $triwidth * 2;
        height: $triwidth * 2;
        animation: spin 40s infinite linear;
        transform-style: preserve-3d;

        .side {
          position: absolute;
          left: 0;
          bottom: 50%;
          height: $triheight;
          width: $triwidth * 2;
          transform-origin: 50% 0%;
          background-image: url("data:image/svg+xml,%3Csvg id='triangle' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 336.92 291.75'%3E%3Cpolygon points='334.8,290.5 2.2,290.5 168.5,2.5 334.8,290.5' fill='rgba(255, 255, 255, 0.8)' stroke='%23000000' stroke-width='5'/%3E%3Ccircle cx='169' cy='6' r='10'/%3E%3Ccircle cx='7' cy='289' r='10'/%3E%3Ccircle cx='333' cy='291' r='10'/%3E%3C/svg%3E%0A");
        }

        @for $i from 1 through 5 {
          // top
          $vshift2: $vshift;
          .side:nth-child(#{$i}) {
            transform: translateY($vshift2) rotateY(#{$i * 72deg}) rotateX($tilt);
          }
        }
        @for $i from 6 through 10 {
          // bottom
          .side:nth-child(#{$i}) {
            transform: translateY($vshift2) rotateY(#{$i * 72deg + 36deg}) rotateX(#{180deg - $tilt});
          }
        }
        @for $i from 11 through 15 {
          // bottom sides
          .side:nth-child(#{$i}) {
            transform: translateY(#{$triheight / 2}) rotateY(#{$i * 72deg + 36deg}) translateZ($outerradius) rotateX(-$sidetilt);
          }
        }
        @for $i from 16 through 20 {
          // top sides
          .side:nth-child(#{$i}) {
            transform: translateY(#{$triheight / 2 + $sideheight})
              rotateY(#{$i * 72deg})
              rotateZ(180deg)
              translateZ($outerradius)
              rotateX(-$sidetilt);
          }
        }
      }
     */
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        :host {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .solid {
          position: relative;
          width: 100px;
          height: 100px;
          animation: spin 40s infinite linear;
          transform-style: preserve-3d;
        }

        .side {
          position: absolute;
          left: 0;
          bottom: 50%;
          height: 86.6px;
          width: 100px;
          transform-origin: 50% 0%;
          background-image: url("data:image/svg+xml,%3Csvg id='triangle' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 336.92 291.75'%3E%3Cpolygon points='334.8,290.5 2.2,290.5 168.5,2.5 334.8,290.5' fill='rgba(255, 255, 255, 0.8)' stroke='%23000000' stroke-width='5'/%3E%3Ccircle cx='169' cy='6' r='10'/%3E%3Ccircle cx='7' cy='289' r='10'/%3E%3Ccircle cx='333' cy='291' r='10'/%3E%3C/svg%3E%0A");
        }

        .side:nth-child(1) {
          transform: translateY(-9.25px) rotateY(72deg) rotateX(52.62deg);
        }
        .side:nth-child(2) {
          transform: translateY(-9.25px) rotateY(144deg) rotateX(52.62deg);
        }
        .side:nth-child(3) {
          transform: translateY(-9.25px) rotateY(216deg) rotateX(52.62deg);
        }
        .side:nth-child(4) {
          transform: translateY(-9.25px) rotateY(288deg) rotateX(52.62deg);
        }
        .side:nth-child(5) {
          transform: translateY(-9.25px) rotateY(360deg) rotateX(52.62deg);
        }
        .side:nth-child(6) {
          transform: translateY(180.9px) rotateY(468deg) rotateX(127.38deg);
        }
        .side:nth-child(7) {
          transform: translateY(180.9px) rotateY(540deg) rotateX(127.38deg);
        }
        .side:nth-child(8) {
          transform: translateY(180.9px) rotateY(612deg) rotateX(127.38deg);
        }
        .side:nth-child(9) {
          transform: translateY(180.9px) rotateY(684deg) rotateX(127.38deg);
        }
        .side:nth-child(10) {
          transform: translateY(180.9px) rotateY(756deg) rotateX(127.38deg);
        }
        .side:nth-child(11) {
          transform: translateY(43.3px) rotateY(828deg) translateZ(85.05px)
            rotateX(-10.81deg);
        }
        .side:nth-child(12) {
          transform: translateY(43.3px) rotateY(900deg) translateZ(85.05px)
            rotateX(-10.81deg);
        }
        .side:nth-child(13) {
          transform: translateY(43.3px) rotateY(972deg) translateZ(85.05px)
            rotateX(-10.81deg);
        }
        .side:nth-child(14) {
          transform: translateY(43.3px) rotateY(1044deg) translateZ(85.05px)
            rotateX(-10.81deg);
        }
        .side:nth-child(15) {
          transform: translateY(43.3px) rotateY(1116deg) translateZ(85.05px)
            rotateX(-10.81deg);
        }
        .side:nth-child(16) {
          transform: translateY(128.35px) rotateY(1152deg) rotateZ(180deg)
            translateZ(85.05px) rotateX(-10.81deg);
        }
        .side:nth-child(17) {
          transform: translateY(128.35px) rotateY(1224deg) rotateZ(180deg)
            translateZ(85.05px) rotateX(-10.81deg);
        }
        .side:nth-child(18) {
          transform: translateY(128.35px) rotateY(1296deg) rotateZ(180deg)
            translateZ(85.05px) rotateX(-10.81deg);
        }
        .side:nth-child(19) {
          transform: translateY(128.35px) rotateY(1368deg) rotateZ(180deg)
            translateZ(85.05px) rotateX(-10.81deg);
        }
        .side:nth-child(20) {
          transform: translateY(128.35px) rotateY(1440deg) rotateZ(180deg)
            translateZ(85.05px) rotateX(-10.81deg);
        }

        @keyframes spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(720deg) rotateZ(1080deg);
          }
        }
      </style>
      <div class="solid">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>

        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>

        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>

        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
      </div>
    `;
  }
}

customElements.define("fwd-logo", FwdLogo);

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
    }
    .home .hero .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: #006dfb;
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
`;
