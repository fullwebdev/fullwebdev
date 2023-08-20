/* eslint-disable import/no-relative-packages */

/**
 * @typedef {import("./router").NavigationOptions} NavigationOptions
 * @typedef {import("./router").NavigationListener} NavigationListener
 * @typedef {import("./template").TemplateInstance} TemplateInstance
 * @typedef {import("./template").TemplateElChild} TemplateElChild
 * @typedef {import("./template").TemplateElOptions} TemplateElOptions
 * @typedef {import("./template").TemplatePart} TemplatePart
 * @typedef {import("./template").PartMeta} PartMeta
 */

export { el } from "./el/index.js";
export { Template, part } from "./template/index.js";
export { AbstractRouter } from "./router/index.js";
