import { getGenericPath } from "./router";

class SidebarState {
  constructor() {
    this.isSidebarOpen = false;
  }

  /**
   * @param {boolean} [to]
   */
  toggleSidebar(to) {
    this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    const appRoot = document.getElementById("app-root");
    if (appRoot) {
      if (this.isSidebarOpen) {
        appRoot.classList.add("sidebar-open");
      } else {
        appRoot.classList.remove("sidebar-open");
      }
    }
  }

  /**
   * @param {string} genericPath
   */
  updateThemeClass(genericPath) {
    const appRoot = document.getElementById("app-root");
    if (appRoot) {
      if (genericPath === "/") {
        appRoot.classList.add("no-navbar", "no-sidebar");
      } else {
        appRoot.classList.remove("no-navbar", "no-sidebar");
      }
    }
    const main = appRoot.querySelector("main");
    if (main) {
      if (genericPath === "/") {
        main.classList.add("home");
      } else {
        main.classList.remove("home");
      }
      if (genericPath === "/code-samples/") {
        main.classList.add("fullwidth");
      } else {
        main.classList.remove("fullwidth");
      }
    }
  }
}

export const sidebarState = new SidebarState();
