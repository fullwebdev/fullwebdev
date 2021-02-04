// @ts-nocheck bad on purpose
{
  let count = 0;

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

  const increment = () => {
    count += 1;
    render();
  };

  const decrement = () => {
    count -= 1;
    render();
  };

  window.increment = increment;
  window.decrement = decrement;

  render();
}
