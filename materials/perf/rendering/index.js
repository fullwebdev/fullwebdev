/**
 * @typedef {import('./_runner_/benchmark').BenchmarkData} BenchmarkData
 * @typedef {import('./_runner_/benchmark.component').RenderingBenchmarkRunnerComponent} RenderingBenchmarkRunnerComponent
 */

import "./_runner_/benchmark.component.js";

/**
 * @type {RenderingBenchmarkRunnerComponent}
 */
const runner = document.querySelector("rb-runner");

document.getElementById("runs-input").addEventListener("input", (e) => {
  const target = /** @type {HTMLInputElement} */ (e.target);
  runner.runs = +target.value;
});

const runBtn = document.getElementById("run-button");
runBtn.addEventListener("click", () => runner.runBenchmarks());

document.getElementById("data-select").addEventListener("change", async (e) => {
  const target = /** @type {HTMLSelectElement} */ (e.target);
  const { data } = await import(`./${target.value}.js`);
  runner.renderers = data;
  runBtn.removeAttribute("disabled");
});
