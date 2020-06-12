{
  console.log("first script loaded");

  //#region createElement
  const helloWorldEl = document.createElement(
    "hello-world"
  );
  console.log("element created before its definition");
  //#endregion createElement

  //#region whenDefined
  customElements.whenDefined("hello-world").then(() => {
    console.log("hello-world defined");
  });
  //#endregion whenDefined

  //#region append
  document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");
    const container = document.getElementById(
      "before-define"
    );
    container.appendChild(helloWorldEl);
  });
  //#endregion append
}
