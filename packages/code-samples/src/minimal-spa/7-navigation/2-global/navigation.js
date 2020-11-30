import { navigate } from "../../5-routes/3-redirect/router.js";
import { getPath } from "../../5-routes/router.js";
import { baseUrl } from "../../4-history-api/base-url.js";
// TODO: typings (HTMLLinkelement)

//#region click
document.body.addEventListener("click", (e) => {
  //#region exclusions
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey
  ) {
    return;
  }
  //#endregion exclusions

  const anchor = e.target;

  if (
    !anchor ||
    anchor.tagName !== "A" ||
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel") === "external"
  )
    return;

  let href = anchor.href;

  if (!href || href.includes("mailto:")) return;

  if (!href.startsWith(window.location.origin)) return;

  e.preventDefault();
  if (`${baseUrl}${href}` !== window.location.href) {
    navigate(new URL(href).pathname);
  }
});
//#endregion click

//#region onpopstate
window.onpopstate = (event) => {
  navigate(getPath());
};
//#endregion onpopstate
