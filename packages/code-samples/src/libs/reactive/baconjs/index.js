import {
  fromEvent,
  fromPromise,
} from "https://dev.jspm.io/npm:baconjs@3.0.17/dist/Bacon.min.mjs";

const li = (text) => {
  const elmt = document.createElement("li");
  elmt.textContent = text;
  return elmt;
};

const inputEl = document.getElementById("autocomplete");
const suggestionEl = document.getElementById("suggestions");

//#region observable
const source = fromEvent(inputEl, "keyup");
//#endregion observable

//#region bacon
//#region operators
const terms = source
  .map((e) => e.target.value)
  .filter((text) => text.length > 2)
  .skipDuplicates()
  .debounce(750);

terms.onValue(
  () => (suggestionEl.innerHTML = "loading...")
);

const suggestions = terms.flatMap((term) =>
  fromPromise(
    fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}`
    ).then((response) => response.json())
  )
);
//#endregion operators

//#region subscription
suggestions.onValue(([, titles]) => {
  suggestionEl.innerHTML = "";
  suggestionEl.append(...titles.map(li));
});

suggestions.onError((error) => {
  suggestionEl.innerHTML = "";
  suggestionEl.append(li(`Error: ${error}`));
});
//#endregion subscription
//#endregion bacon
