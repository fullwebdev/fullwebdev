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
      appRoot.classList.remove("sidebar-open");
      this.isSidebarOpen = false;
    }
    const main = appRoot.querySelector("main");
    if (main) {
      const themeContent = main.querySelector(".theme-default-content");
      if (genericPath === "/") {
        main.classList.add("home");
        themeContent.classList.add("custom");
      } else {
        main.classList.remove("home");
        themeContent.classList.remove("custom");
      }

      // FIXME: use md meta
      if (genericPath.includes("code-samples/")) {
        main.classList.add("fullwidth");
      } else {
        main.classList.remove("fullwidth");
      }
    }
  }
}

export const sidebarState = new SidebarState();
