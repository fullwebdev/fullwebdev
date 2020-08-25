import { baseUrl, navigate } from "@modern-helpers/lazy-router";

export const langBase = /\/(en|fr)\//;

/**
 * @type {'en' | 'fr'}
 */
let lang = "en";
if (/^fr\b/.test(navigator.language)) {
  lang = "fr";
}

export const setLang = (newLang) => {
  lang = newLang;
};

export const getLang = () => lang;

function getGenericPath() {
  return (
    window.location.pathname.replace(baseUrl, "").replace(langBase, "/") || "/"
  );
}

export function reload() {
  navigate(getGenericPath());
}
