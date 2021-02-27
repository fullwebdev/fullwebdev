/* eslint-disable max-classes-per-file */
import { isValidElementName } from "./element-name.js";
import { matchPotentialCustomElementName } from "./custom-element-name.js";

export class InvalidElementNameError extends Error {}
export class NotAPotentialCustomElementNameError extends Error {}
export class AlreadyUsedElementNameError extends Error {}

/**
 * define and create a custom element only after validating its name
 *
 * @param {string} name
 * @param {CustomElementConstructor} clazz
 */
export const validateAndCreateElement = (name, clazz) => {
  if (!isValidElementName(name)) throw new InvalidElementNameError(name);
  if (!matchPotentialCustomElementName(name))
    throw new NotAPotentialCustomElementNameError(name);

  if (customElements.get(name)) throw new AlreadyUsedElementNameError(name);

  customElements.define(name, clazz);

  return document.createElement(name);
};
