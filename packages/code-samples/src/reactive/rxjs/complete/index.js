const { fromEvent } = rxjs;
const {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} = rxjs.operators;
const { fromFetch } = rxjs.fetch;

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

//#region operators
const suggestions = source.pipe(
  //#region map
  map((e) => e.target.value),
  //#endregion map
  //#region filter
  filter((text) => text.length > 2),
  //#endregion filter
  //#region distinctUntilChanged
  distinctUntilChanged(),
  //#endregion distinctUntilChanged
  //#region debounceTime
  debounceTime(750),
  //#endregion debounceTime
  //#region tap
  tap(() => (suggestionEl.innerHTML = "loading...")),
  //#endregion tap
  //#region switchMap
  switchMap(
    (term) =>
      //#region fromFetch
      fromFetch(
        `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}`,
        {
          selector: (response) => response.json(),
        }
      )
    //#endregion fromFetch
  )
  //#endregion switchMap
);
//#endregion operators

//#region subscription
suggestions.subscribe(
  ([, titles]) => {
    suggestionEl.innerHTML = "";
    suggestionEl.append(...titles.map(li));
  },
  (error) => {
    suggestionEl.innerHTML = "";
    suggestionEl.append(li(`Error: ${error}`));
  }
);
//#endregion subscription

//#region console
suggestions.subscribe(
  ([, title]) => {
    console.log(title);
  },
  (error) => {
    console.error(error);
  }
);
//#endregion console
