/* eslint-disable no-undef */
// @ts-nocheck Uncaught SyntaxError demo:
// Private field '#root' must be declared in an enclosing class

const longTextContainer = document.createElement("p");
longTextContainer.textContent = longText;

//#region append
closedCpt.#root.appendChild(longTextContainer);
//#endregion append
