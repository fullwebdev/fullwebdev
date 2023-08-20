//#region tag
function anchor(strs, ...args) {
  if (
    !strs[0].startsWith("<a") ||
    !strs[strs.length - 1].endsWith("</a>")
  ) {
    return;
  }

  const rslt = document.createElement("a");
  [rslt.href, rslt.textContent] = args;

  return rslt;
}
//#endregion tag

//#region create
const url = "https://fullweb.dev";
const content = "home";

const linkEl = anchor`<a href=${url}>${content}</a>`;

document.querySelector("main").append(linkEl);
//#endregion create
