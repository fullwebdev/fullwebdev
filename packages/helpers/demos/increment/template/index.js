import { template, part } from "../../../index.js";

const incrementTemplate = template("div", { classList: "incrementDemo" }, [
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

const incrementEl = incrementTemplate.render({ count: 0 });

incrementEl.addEventListener("click", (e) => {
  const el = e.target;
  if (el.closest(".increment")) {
    incrementEl.state.count++;
  } else if (el.closest(".decrement")) {
    incrementEl.state.count--;
  }
});

document.body.appendChild(incrementEl);
