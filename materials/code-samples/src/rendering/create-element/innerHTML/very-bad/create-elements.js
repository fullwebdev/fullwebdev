{
  let count = 0;

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

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

  window.increment = increment;
  window.decrement = decrement;

  render();
}
