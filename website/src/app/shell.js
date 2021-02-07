import { createDaucusRouter } from "@daucus/router";
import "@daucus/router/daucus-router-outlet";
import routes from "../templates/routes.js";

/** @typedef {import('@daucus/router').DaucusRouterOutlet} DaucusRouterOutlet */

const preferredLanguages = window.navigator.languages || [
  window.navigator.language,
];

/** @type {"fr" | "en"} */
let language = "fr";
if (!preferredLanguages.find((code) => code.startsWith("fr"))) {
  language = "en";
}

/** @type {DaucusRouterOutlet} */
let outlet;
let homeTemplate;

// FIXME: fallback when there is no fallback
export const router = createDaucusRouter(
  routes,
  "/docs/en/",
  (projectName, route) => {
    if (!outlet) {
      const pageContainer = document.getElementById("page-container");
      if (!pageContainer) return;
      homeTemplate = pageContainer.cloneNode(true);
      // prettier-ignore
      /** @type {DaucusRouterOutlet} */
      outlet = (document.createElement("daucus-router-outlet"));
      pageContainer.innerHTML = "";
      pageContainer.appendChild(outlet);
      // pageContainer.insertBefore(TODO: menu)
    }
    outlet.href = `/dist/templates/${projectName}/${route.templateUrl}`;
  }
);
