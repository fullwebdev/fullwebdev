# `@modern-helpers/template`

> Minimalistic (<5kb) HTML Template preprocessing at runtime with an HyperScript syntax
>
> :book: [Documentation](https://fullweb.dev/helpers/template)
>
> :arrow_upper_right: [Demos](https://github.com/fullwebdev/fullwebdev/tree/master/demos/helpers)

## Usage Example

### Simple Counter

> :arrow_upper_right: [Open in CodeSandbox](https://codesandbox.io/s/github/fullwebdev/fullwebdev/tree/master/demos/helpers/template-simple-counter).

```js
import {
  Template,
  part,
} from "https://cdn.skypack.dev/@modern-helpers/template";
// or with npm i @modern-helpers/template
// import { Template, part } from "@modern-helpers/template";

// preprocessing
const incrementTemplate = new Template("div", { classList: "incrementDemo" }, [
  [
    "p",
    { classList: ["count", ["danger", part("count", (count) => count < 0)]] },
    [part("count")],
  ],
  [
    "div",
    { classList: "actions" },
    [
      [
        "button",
        {
          classList: "increment",
        },
        ["++"],
      ],
      [
        "button",
        {
          classList: "decrement",
          attributes: [["disabled", part("count", (count) => count < -5)]],
        },
        ["--"],
      ],
    ],
  ],
]);

// optimized rendering
const incrementEl = incrementTemplate.render({ count: 0 });

incrementEl.addEventListener("click", (e) => {
  const el = e.target;
  if (el.closest(".increment")) {
    incrementEl.state.count += 1;
  } else if (el.closest(".decrement")) {
    incrementEl.state.count -= 1;
  }
});

document.body.appendChild(incrementEl);
```
