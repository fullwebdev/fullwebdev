import { el } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";

//#region NotFound
class NotFound {
  constructor() {
    this.el = el("h2", "404", el("p", "page not found"));
  }
}
//#endregion NotFound

export { NotFound };
