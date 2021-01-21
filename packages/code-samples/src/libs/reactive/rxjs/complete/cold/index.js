const { Observable } = rxjs;
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
const source = Observable.create((observer) => {
  inputEl.addEventListener("keyup", (e) => {
    observer.next(e);
  });
});
//#endregion observable

//#region operators
const suggestions = source.pipe(
  map((e) => e.target.value),
  filter((text) => text.length > 2),
  distinctUntilChanged(),
  debounceTime(750),
  tap((term) => console.log(`suggestions: term`)),
  switchMap((term) =>
    fromFetch(
      `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}`,
      {
        selector: (response) => response.json(),
      }
    )
  )
);
//#endregion operators

suggestions.pipe(
  tap(([, titles]) => {
    console.log(`outside: titles`);
  })
);

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
