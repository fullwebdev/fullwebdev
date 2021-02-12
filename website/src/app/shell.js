import "../styles/mdc-drawer.css";
import { MDCDrawer } from "@material/drawer";

const drawerEl = document.querySelector(".mdc-drawer");

if (drawerEl) {
  const drawer = MDCDrawer.attachTo(drawerEl);

  const listEl = document.querySelector(".mdc-drawer .mdc-list");
  const mainContentEl = document.getElementById("page-container");
  const burgerEl = document.getElementById("burger-menu");

  if (burgerEl) {
    burgerEl.addEventListener("click", () => {
      drawer.open = true;
    });
  }

  if (listEl && mainContentEl) {
    listEl.addEventListener("click", () => {
      drawer.open = false;
    });

    /** @type {HTMLElement | null } */
    const input = mainContentEl.querySelector("input, button");

    if (input) {
      document.body.addEventListener("MDCDrawer:closed", () => {
        input.focus();
      });
    }
  }
}
