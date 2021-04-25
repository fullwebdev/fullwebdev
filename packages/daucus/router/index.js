/** @typedef {import('./src/find-route').FindRouteFn} FindRouteFn */
/** @typedef {import('./src/find-route').FindI18NRouteFn} FindI18NRouteFn */
/** @typedef {import('@daucus/core').Route} Route */
/** @typedef {import('@daucus/core').I18NRoutesConfig} I18NRoutesConfig */
/** @typedef {import('@daucus/core').RoutesConfig} RoutesConfig */
/** @typedef {import('@daucus/core').SimpleRoutesConfig} SimpleRoutesConfig */
/** @typedef {import('@daucus/core').LanguageCode} LanguageCode */
/** @typedef {import('@daucus/core').LanguageCodeOrDefault} LanguageCodeOrDefault */

export { DaucusRouterWC } from "./src/DaucusRouterWC.js";
export { DaucusRouter } from "./src/daucus-router.js";
export { routeFinder, i18nRouteFinder } from "./src/route-finder.js";
