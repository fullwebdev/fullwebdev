import { router } from "./router.js";
import { AppShell } from "./shell.js";

/**
 * @param {import('./shell-wordings.js').ShellWordings} wordings
 */
export function App(wordings, onClick = false) {
  if (onClick) {
    document.body.addEventListener(
      "click",
      () => {
        /** @type {HTMLElement} */ (
          document.getElementById("main-content")
        ).classList.remove("on-homepage");
        router.resetPageContainer();
      },
      { once: true, capture: true }
    );
  }
  router.run(document.body, !onClick);
  const appShell = new AppShell(wordings, router);
  appShell.initDrawer();
  appShell.updateShellLang(onClick);
}
