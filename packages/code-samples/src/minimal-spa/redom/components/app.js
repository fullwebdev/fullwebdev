import { el } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";
import { Menu } from "./menu.js";
import { routerView } from "../router.js";

//#region App
class App {
  constructor() {
    this.el = el(
      ".app",
      el(
        "header",
        el("h1", "SPA Minimaliste - RE:DOM"),
        (this.menu = new Menu())
      ),
      el(
        "main",
        el(
          "section.title",
          "Démonstration minimaliste de RE:DOM"
        ),
        el(
          "section.content",
          (this.routerView = routerView)
        )
      )
    );
  }

  onmount() {
    this.routerView.update("home");
  }
}
//#endregion App

export { App };
