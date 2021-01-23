import { el } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";
import { navigate } from "../router.js";

//#region Menu
class Menu {
  constructor() {
    this.el = el(
      "nav",
      el(
        "a",
        {
          href: "",
          onclick: navigate("home"),
        },
        "accueil"
      ),
      ["1", "2"].map((id) =>
        el(
          "a",
          {
            href: "",
            onclick: navigate("post", id),
          },
          `article ${id}`
        )
      )
    );
  }
}
//#endregion Menu

export { Menu };
