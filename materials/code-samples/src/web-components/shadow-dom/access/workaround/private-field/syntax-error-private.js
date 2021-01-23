// Uncaught SyntaxError: Private field '#root' must be declared in an enclosing class

const longTextContainer = document.createElement("p");
longTextContainer.textContent = longText;
//#region append
closedCpt.#root.appendChild(longTextContainer);
//#endregion append
