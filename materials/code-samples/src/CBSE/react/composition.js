//#region components
const el = React.createElement;

function SayHello(toWhat) {
  return el("div", {}, `Hello ${toWhat}`);
}

function Title(text) {
  return el("h2", {}, text);
}

function MessageBox(message) {
  return el("div", {}, [
    Title("Here is a message:"),
    SayHello(message),
  ]);
}
//#endregion components

//#region render
ReactDOM.render(
  MessageBox("World"),
  document.getElementById("hello-world")
);
//#endregion render
