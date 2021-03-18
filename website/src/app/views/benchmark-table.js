const SCRIPT_ID = "script-benchmark-table";
let script = /** @type {HTMLScriptElement} */ (document.getElementById(
  SCRIPT_ID
));
if (!script) {
  script = document.createElement("script");
  script.src = "/dist/app/builds/benchmark-table.js";
  script.id = SCRIPT_ID;
  document.body.appendChild(script);
}

export const selector = "benchmark-table";
