import { el } from "@modern-helpers/el";
import Prism from "prismjs";

export const selector = "app-chrome-perf";

/**
 * @param {number} count
 */
function heavyHTML(count) {
  return `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum facilisis at ex nec dapibus. Vivamus
      semper nibh vel erat pharetra eleifend. Maecenas
      iaculis luctus leo varius tempor. Pellentesque
      ultricies orci at dui porta, sed interdum nisi
      malesuada. Ut dictum lorem tortor, et euismod enim
      interdum ornare. Donec efficitur convallis turpis id
      mollis. Donec sed ex diam. Vivamus varius massa eu
      tortor ultricies lobortis. Maecenas in tincidunt
      tortor. Suspendisse tempus hendrerit vulputate.
      Integer quis congue lacus. Maecenas condimentum,
      ligula eu auctor egestas, justo justo porta odio, ac
      gravida urna lorem eu lorem. In hac habitasse platea
      dictumst.
    </p>
    <p>
      Aliquam erat volutpat. Nam ultrices ex accumsan lectus
      volutpat, in congue lectus condimentum. Morbi viverra
      nisl non eleifend bibendum. Aliquam non arcu
      consectetur ante sollicitudin tempus. Pellentesque in
      odio nec felis volutpat elementum. Curabitur
      facilisis, lorem ut bibendum eleifend, libero magna
      lobortis magna, ut dictum sem nibh at ex. Aenean erat
      mi, venenatis a lobortis id, placerat eget justo.
      Vivamus orci augue, suscipit quis malesuada nec,
      congue et lectus. Duis varius fermentum libero, non
      egestas lorem. Nunc in lacus accumsan lacus ornare
      ultricies. Quisque nec ornare tortor. Ut tristique at
      metus a blandit. Suspendisse dapibus urna vel eros
      finibus bibendum.
    </p>
    <p>
      Proin tincidunt, tellus et laoreet scelerisque, odio
      neque feugiat purus, id porttitor dui eros sed dolor.
      Etiam vitae efficitur risus. Vivamus eros erat,
      suscipit ut tortor ut, scelerisque dignissim arcu.
      Nunc augue justo, pretium sed ex a, auctor dapibus
      neque. Maecenas ligula quam, faucibus et turpis sed,
      mattis imperdiet enim. Vivamus sed felis eleifend,
      malesuada massa eget, rhoncus tortor. Donec cursus
      eleifend varius. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia
      curae; Integer in lectus augue. Suspendisse neque
      ante, sollicitudin vitae faucibus non, blandit ac
      diam. Donec malesuada orci a velit gravida, at
      tincidunt metus dictum. Aliquam cursus elit sed erat
      posuere, vel ornare neque pulvinar. Fusce non finibus
      enim.
    </p>
  `.repeat(count);
}

export class ChromePerfTestElement extends HTMLElement {
  constructor() {
    super();
    this._shouldOverride = true;
    this._heavyHTMLSize = 500;
    /** @type {import('./chrome-perf').ChromePerfTestWording | null} */
    this.wording = null;
  }

  get w() {
    if (!this.wording)
      throw new Error(`can't find any wording for ${selector}`);
    return this.wording;
  }

  /**
   * @param {any} override
   */
  _renderTest(override) {
    const container = document.createElement("div");
    // @ts-ignore test container created at connection
    this._testContainer.appendChild(container);
    container.innerHTML = heavyHTML(1000);
    if (override) {
      container.innerHTML = "<p>Hello World</p>";
    }
  }

  connectedCallback() {
    /** @type {HTMLElement} */
    let codeSample;
    /** @type {HTMLElement} */
    let codeConstOverride;
    /** @type {HTMLElement} */
    let overrideCheckbox;
    /** @type {HTMLElement} */
    let btnRun;
    /** @type {HTMLElement} */
    let btnClear;
    /** @type {HTMLElement} */
    let heavyHTMLSize;
    const elmts = [
      el("style", {}, [
        `${selector} {
          text-align: center;
          display: block;
          max-width: 936px;
          margin: 0 auto;
        }
        ${selector} .test-btn-container, ${selector} .test-inputs {
          text-align: center;
        }
        ${selector} .test-inputs {
          margin: 1rem 0;
        }
        ${selector} .test-inputs label {
          margin: 1rem;
        }
        ${selector} .test-btn-container > button {
          margin: .5rem;
        }
        ${selector} .test-rendering-container {
          width: 200px;
          height: 200px;
          margin: 1rem auto;
          overflow-x: hidden;
          border: solid 2px black;
          border-radius: 5px;
          padding: 0 1rem;
          background-color: #ddd;
        }
        `,
      ]),
      el("h1", {}, [this.w.title]),
      el("div", { className: "test-inputs" }, [
        (overrideCheckbox = el("input", {
          attributes: [
            ["type", "checkbox"],
            ["name", "disableOverride"],
            ["id", "disableOverride"],
            ["value", "true"],
          ],
        })),
        el("label", { attributes: [["for", "disableOverride"]] }, [
          this.w.labels.override,
        ]),
      ]),
      el("div", { className: "test-inputs" }, [
        el("label", { attributes: [["for", "heavyHTMLSize"]] }, [
          this.w.labels.heavyHTMLSize,
        ]),
        (heavyHTMLSize = el("input", {
          attributes: [
            ["type", "number"],
            ["name", "heavyHTMLSize"],
            ["id", "heavyHTMLSize"],
            ["value", "500"],
          ],
        })),
      ]),
      el("pre", {}, [
        (codeConstOverride = el("code", { className: "language-js" }, [
          `const override = ${this._shouldOverride};
`,
        ])),
        (codeSample = el("code", { className: "language-js" }, [
          `const container = document.createElement("div");
this._testContainer.appendChild(container);
container.innerHTML = heavyHTML.repeat(${this._heavyHTMLSize});
if (override) {
  container.innerHTML = "<p>Hello World</p>";
}`,
        ])),
      ]),
      el("div", { className: "test-btn-container" }, [
        (btnRun = el("button", {}, [this.w.actions.run])),
        (btnClear = el("button", {}, [this.w.actions.reset])),
      ]),
      (this._testContainer = el("div", {
        className: "test-rendering-container",
      })),
    ];

    this.append(...elmts);

    Prism.highlightElement(codeConstOverride);
    Prism.highlightElement(codeSample);

    overrideCheckbox.addEventListener("change", (e) => {
      const { checked } = /** @type {HTMLInputElement} **/ (e.target);
      const booleanValue = codeConstOverride.querySelector(".token.boolean");
      if (booleanValue) {
        booleanValue.textContent = (!checked).toString();
      }
      this._shouldOverride = !checked;
    });

    heavyHTMLSize.addEventListener("change", (e) => {
      const { value } = /** @type {HTMLInputElement} **/ (e.target);
      const sizeSpan = codeSample.querySelector(".token.number");
      if (sizeSpan) {
        sizeSpan.textContent = value;
      }
      // @ts-ignore cast
      this._heavyHTMLSize = value;
    });

    btnRun.addEventListener("click", (e) => {
      e.preventDefault();
      this._renderTest(this._shouldOverride);
    });

    btnClear.addEventListener("click", () => {
      // @ts-ignore testContainer created at connection
      this._testContainer.innerHTML = "";
    });
  }
}

customElements.define(selector, ChromePerfTestElement);
