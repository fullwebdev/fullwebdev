import { baseUrl, navigate } from "@modern-helpers/lazy-router";

export const langBase = /\/(en|fr)\//;

/**
 * @typedef {'en' | 'fr'} LangKey
 */

/**
 * @type {LangKey}
 */
let lang = "en";

/**
 * @param {LangKey} newLang
 */
export const setLang = (newLang) => {
  lang = newLang;
  document.documentElement.lang = newLang;
};

if (/^fr\b/.test(navigator.language)) {
  setLang("fr");
}

/**
 * @returns {LangKey}
 */
export const getLang = () => lang;

function getGenericPath() {
  return (
    window.location.pathname.replace(baseUrl, "").replace(langBase, "/") || "/"
  );
}

export async function reload() {
  return navigate(getGenericPath());
}
