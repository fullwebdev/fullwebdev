{
  //#region count
  window.count = 0;
  //#endregion count

  function increment() {
    window.count++;
    render();
  }

  function decrement() {
    window.count--;
    render();
  }

  const container = document.querySelector("main");

  //#region render
  function render() {
    container.innerHTML = `
      <p>${window.count}<p>
      <div>
        <button onclick="(${increment})()">++</button>
        <button onclick="(${decrement})()">--</button>
      </div>
    `;
  }
  //#endregion render

  render();
}
