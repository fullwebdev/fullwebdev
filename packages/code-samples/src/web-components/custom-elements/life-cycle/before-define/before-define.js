{
  console.log("fichier chargé");

  //#region createElement
  // before-define.js
  const helloWorldEl = document.createElement(
    "hello-world"
  );
  console.log("l'élément <hello-world> a été créé");
  //#endregion createElement

  //#region whenDefined
  // before-define.js
  customElements.whenDefined("hello-world").then(() => {
    console.log("(whenDefined) hello-world a été défini");
  });
  //#endregion whenDefined

  //#region DOMContentLoaded
  // before-define.js
  document.addEventListener("DOMContentLoaded", () => {
    console.log("(DOMContentLoaded) contenu DOM chargé");
    //#region append
    const container = document.getElementById("container");
    container.appendChild(helloWorldEl);
    console.log(
      "l'élément <hello-world> a été ajouté au DOM"
    );
    //#endregion append
  });
  //#endregion DOMContentLoaded
}
