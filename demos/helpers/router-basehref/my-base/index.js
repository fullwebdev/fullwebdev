/* eslint-disable no-console, class-methods-use-this */
import { AbstractRouter } from "@modern-helpers/router";

const routerOutlet = document.getElementById("outlet");

function render(template) {
  routerOutlet.innerHTML = template;
}

const ROUTES = {
  "/": "<p>Home view</p>",
  "/hello": `<p>Hello World!</p>`,
  /** "directory" route for relative links */
  "/bye/": `<p>Good bye!</p>
    <p><a href="./soon">tell me more with a relative link</a></p>`,
  /** "child" route */
  "/bye/soon": `<p>Just a child route to say "see you soon".</p>`,
  /** default route */
  "/404": `<p>404: route not found</p>`,
};

class AppRouter extends AbstractRouter {
  async renderOrRedirect(path, options) {
    if (!Object.keys(ROUTES).includes(path)) {
      // redirection to the default route
      return ["/404", options];
    }

    render(ROUTES[path]);
  }
}

async function runRouter() {
  const appRouter = new AppRouter();
  appRouter.addEventListener("navigation-start", (e) => {
    console.log("new navigation to %s", e.detail.path);
  });
  appRouter.addEventListener("navigation-end", (e) => {
    console.log("successful navigation to %s", e.detail.path);
  });
  appRouter.addEventListener("route-redirection", (e) => {
    console.log(
      "redirection from %s to %s",
      e.detail.oldValue.path,
      e.detail.newValue.path
    );
  });
  // listen clicks and popstate on body
  // and run a first navigation using window.location.pathname
  await appRouter.run();
}

runRouter();
