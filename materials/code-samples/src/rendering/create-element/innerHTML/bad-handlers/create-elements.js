/* eslint-disable no-use-before-define */
// @ts-nocheck bad on purpose
{
  //#region count
  window.count = 0;
  //#endregion count

  function increment() {
    window.count += 1;
    render();
  }

  function decrement() {
    window.count -= 1;
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
