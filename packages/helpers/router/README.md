# `@modern-helpers/router`

> Minimalistic router for modern web apps.
>
> :book: [Documentation](https://fullweb.dev/helpers/router)
>
> :arrow_upper_right: [Demos](https://github.com/fullwebdev/fullwebdev/tree/master/demos/helpers)

## Features

- ultra-light (< 3kb)
  - it just use the [History API](https://developer.mozilla.org/docs/Web/API/History)
  - you're free to use any route matching and rendering solution you want
- compatible with standard [`<a>` (_anchor_) elements](https://developer.mozilla.org/docs/Web/HTML/Element/a)
  - even with relative URLs
  - even if the anchor is inside a Shadow DOM
- automatically handle "Go back" and "Go forward" in history ([`popstate` events](https://developer.mozilla.org/docs/Web/API/Window/popstate_event))
- automatically detect and use [`<base>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- preserve [search parameters](https://developer.mozilla.org/docs/Web/API/Location/search) & [history state objects](https://developer.mozilla.org/docs/Web/API/History/state)
- provide `"navigation-start"`, `"navigation-end"` and `"route-redirection"` events using the standard [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface

## Usage example

### HTML

```html
<a href="/hello">Say Hello</a>
<a href="/bye/">Say Goodbye</a>
<a href="/unknown-path">Wrong link</a>
<div id="outlet">default view</div>
```

### JS

```js
import { AbstractRouter } from "https://cdn.skypack.dev/@modern-helpers/router";
// or, using npm i @modern-helpers/router
// import { AbstractRouter } from "@modern-helpers/router";

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

  // listen clicks and popstate on body
  // and run a first navigation using window.location.pathname
  await appRouter.run();
}

runRouter();
```
