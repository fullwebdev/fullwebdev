import { el } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";

//#region Home
class Home {
  constructor() {
    this.el = el("h2", "Welcome!", el("p", "Hello World"));
  }
}
//#endregion Home

export { Home };
