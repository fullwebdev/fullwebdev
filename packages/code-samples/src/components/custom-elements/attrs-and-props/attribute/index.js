{
  const notLoremIpsum = [
    "Far far away, behind the word mountains",
    "far from the countries Vokalia and Consonantia",
    "there live the blind texts",
    "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    "a large language ocean",
    "A small river named Duden flows by their place and supplies it with the necessary regelialia",
  ];

  //#region setPossibleTexts
  const randomTextEl = document.querySelector(
    "random-text"
  );
  randomTextEl.possibleTexts = notLoremIpsum;
  //#endregion setPossibleTexts

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

  const newTextButton = document.querySelector(
    ".new-text-button"
  );

  newTextButton.addEventListener("click", () => {
    randomTextEl.newText();
  });

  //#region newLength
  const lengthInput = document.getElementById(
    "length-input"
  );

  lengthInput.addEventListener("input", (e) => {
    randomTextEl.length = e.target.value;
  });
  //#endregion newLength
}
