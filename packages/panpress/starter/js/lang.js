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
