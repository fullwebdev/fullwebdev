let count = 0;

const incrementEl = document.createElement("div");
const counter = document.createElement("p");

const actions = document.createElement("div");
const incrementBtn = document.createElement("button");
incrementBtn.textContent = "++";
const decrementBtn = document.createElement("button");
decrementBtn.textContent = "--";
actions.append(incrementBtn, decrementBtn);

incrementEl.append(counter, actions);

function renderCount() {
  counter.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  renderCount();
});
decrementBtn.addEventListener("click", () => {
  count--;
  renderCount();
});

document.querySelector("main").appendChild(incrementEl);

renderCount();
