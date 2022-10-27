// eslint-disable-next-line import/no-unresolved
import "https://unpkg.com/dark-mode-toggle@0.14.2/dist/dark-mode-toggle.min.mjs";

/**
 * @typedef {import('./color-theme').DarkModeElement} DarkModeElement
 * @typedef {import('./color-theme').ColorSchemeChangeEvent} ColorSchemeChangeEvent
 * @typedef {import('./color-theme').ColorSchemeChangeEventDetail} ColorSchemeChangeEventDetail
 */

/** @type {NodeListOf<DarkModeElement>} */
const darkModeToggleEls = document.querySelectorAll("dark-mode-toggle");
/** @type {HTMLMetaElement | null} */
const themeColor = document.querySelector('meta[name="theme-color"]');
/** @type {HTMLMetaElement | null} */
const msTitleColor = document.querySelector(
  'meta[name="msapplication-TileColor"]'
);

/**
 *
 * @param {ColorSchemeChangeEvent | ColorSchemeChangeEventDetail} event
 */
const toggleTheme = (event) => {
  const darkModeOn = event.detail.colorScheme === "dark";
  const primaryColor = darkModeOn ? "hsl(0,0%,20%)" : "#24292e";
  if (themeColor) themeColor.content = primaryColor;
  if (msTitleColor) msTitleColor.content = primaryColor;
};

const searchParam = new URL(document.location.toString()).searchParams.get(
  "ctheme"
);
if (searchParam === "dark" || searchParam === "light") {
  darkModeToggleEls.forEach((el) => el.setAttribute("mode", searchParam));
}

// @ts-ignore see https://github.com/microsoft/TypeScript/issues/28357
document.addEventListener("colorschemechange", toggleTheme);

toggleTheme({
  detail: { colorScheme: searchParam || darkModeToggleEls[0].mode },
});
