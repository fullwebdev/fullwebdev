/**
 * @typedef {import('./benchmark').BenchmarkData} BenchmarkData
 */

import { renderingBenchmark } from "./rendering-benchmark.js";

export class RenderingBenchmarkRunnerComponent extends HTMLElement {
  /**
   * @type {BenchmarkData[]}
   */
  _renderers = [];

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = /* HTML */ `
      <style>
        :host {
          display: block;
          margin: 1rem 0;
        }

        table {
          border-collapse: collapse;
          margin: 1rem 0;
        }

        td {
          border: 1px solid black;
          padding: 1rem;
        }
      </style>
      <table>
        <thead class="renderers-names"></thead>
        <tbody class="result"></tbody>
      </table>
      <div class="benchmark-container"></div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }

  /**
   * renderering fonctions to benchmark
   * @param {BenchmarkData[]} renderers
   */
  set renderers(renderers) {
    if (Array.isArray(renderers) && renderers.length > 0) {
      const ids = renderers.map((renderer, i) => {
        if (typeof renderer.id !== "string") {
          throw Error(`renderers[${i}].id should be a string`);
        }
        if (typeof renderer.fn !== "function") {
          throw Error(`renderers[${i}].fn should be a fonction`);
        }
        if (
          renderer.multi !== undefined &&
          (!Number.isInteger(renderer.multi) || renderer.multi < 1)
        ) {
          throw Error(
            `renderers[${i}].multi should be a positive non-zero integer`
          );
        }
        return renderer.id;
      });
      this._renderers = renderers;
      this._resetTable(ids);
    } else {
      throw Error(`renderers should be a non-empty array`);
    }
  }

  get runs() {
    const runs = +this.getAttribute("runs");
    return Number.isInteger(runs) && runs > 0 ? runs : 50;
  }

  set runs(runs) {
    // @ts-ignore cast number to a string
    this.setAttribute("runs", runs);
  }

  _resetTable(names) {
    this.shadowRoot.querySelector(".result").textContent = "";
    const namesEl = this.shadowRoot.querySelector(".renderers-names");
    namesEl.textContent = "";
    names.forEach((id) => {
      const cell = document.createElement("td");
      cell.textContent = id;
      namesEl.appendChild(cell);
    });
  }

  async runBenchmarks() {
    const line = document.createElement("tr");
    this.shadowRoot.querySelector(".result").appendChild(line);
    /**
     * @type {HTMLElement}
     */
    const container = this.shadowRoot.querySelector(".benchmark-container");

    for (const renderer of this._renderers) {
      const cell = document.createElement("td");
      cell.textContent = "Loading...";
      line.appendChild(cell);

      // eslint-disable-next-line no-await-in-loop
      const rslt = await renderingBenchmark(
        container,
        renderer.fn,
        renderer.multi || 1,
        this.runs
      );
      cell.textContent = `${Math.round(rslt * 100) / 100}ms`;
    }
  }

  connectedCallback() {
    this._upgradeProperty("renderers");
    this._upgradeProperty("runs");
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}

customElements.define("rb-runner", RenderingBenchmarkRunnerComponent);
