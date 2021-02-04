import { el } from "../index.js";

let counter, decrementBtn;
const incrementEl = el("div", { className: "incrementDemo" }, [
  (counter = el("p", { className: "count" })),
  el("div", { className: "actions" }, [
    el(
      "button",
      {
        className: "increment",
      },
      ["++"]
    ),
    (decrementBtn = el(
      "button",
      {
        className: "decrement",
      },
      ["--"]
    )),
  ]),
]);

const update = ({ count }) => {
  if (count < 0) {
    counter.classList.add("danger");
  } else {
    counter.classList.remove("danger");
  }

  if (count < -5) {
    decrementBtn.setAttribute("disabled", "");
  } else {
    decrementBtn.removeAttribute("disabled");
  }

  counter.textContent = count;
};

let count = 0;

incrementEl.addEventListener("click", (e) => {
  const el = e.target;
  if (el.closest(".increment")) {
    count += 1;
  } else if (el.closest(".decrement")) {
    count -= 1;
  }
  update({ count });
});

update({ count });

document.body.appendChild(incrementEl);
