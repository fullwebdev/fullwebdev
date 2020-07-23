let count = 0;

function increment() {
  count++;
  render();
}

function decrement() {
  count--;
  render();
}

const container = document.querySelector("main");

function render() {
  container.innerHTML = `
    <p>${count}<p>
    <div>
      <button onclick="increment()">++</button>
      <button onclick="decrement()">--</button>
    </div>
  `;
}

render();
