import { html, render } from "lit-html";

class FwdLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    render(
      html`
        <style>
          :host {
            width: 100%;
            height: 250px;
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
            background-image: url("data:image/svg+xml,%3Csvg id='triangle' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 336.92 291.75'%3E%3Cpolygon points='334.8,290.5 2.2,290.5 168.5,2.5 334.8,290.5' fill='%23FFF2' stroke='%23FFF' stroke-width='5'/%3E%3C/svg%3E%0A");
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
      `,
      this.shadowRoot
    );
  }
}

customElements.define("fwd-logo", FwdLogo);

// prettier-ignore
export default () => html`
  <fwd-logo id="logo"></fwd-logo>
`;
