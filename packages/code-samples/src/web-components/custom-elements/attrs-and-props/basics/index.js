function randomRange() {
  return Math.floor(Math.random() * (255 + 1));
}

function randomColor() {
  return `rgb(${[
    randomRange(),
    randomRange(),
    randomRange(),
  ].join(",")})`;
}

//#region newText
const randomTextEl = document.querySelector("random-text");

const newTextButton = document.querySelector(
  ".new-text-button"
);

newTextButton.addEventListener("click", () => {
  randomTextEl.newText();
});
//#endregion newText

const changeColorButton = document.querySelector(
  ".change-color-button"
);

changeColorButton.addEventListener("click", () => {
  randomTextEl.setAttribute("color", randomColor());
});

const invertButton = document.querySelector(
  ".invert-button"
);

invertButton.addEventListener("click", () => {
  if (randomTextEl.hasAttribute("inverted")) {
    randomTextEl.removeAttribute("inverted");
  } else {
    randomTextEl.setAttribute("inverted", "");
  }
});

//#region getLengthHack
const randomText = randomTextEl.shadowRoot.querySelector(
  ".random-text"
).textContent;
//#endregion getLengthHack

console.log(randomText);

//#region getLength
document.querySelector(".generated-text").textContent =
  randomTextEl.text;
//#endregion getLength
