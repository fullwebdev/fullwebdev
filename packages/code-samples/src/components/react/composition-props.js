//#region components
const el = React.createElement;

//#region function
function SayHello(props) {
  return el("div", {}, `Hello ${props.toWhat}`);
}
//#endregion function

function Title(props) {
  return el("h2", {}, props.text);
}

function MessageBox(props) {
  return el("div", {}, [
    el(Title, { text: props.title }),
    el(SayHello, { toWhat: props.message }),
  ]);
}
//#endregion components

//#region render
ReactDOM.render(
  el(MessageBox, {
    message: "World",
    title: "Here is a message:",
  }),
  document.getElementById("hello-world")
);
//#endregion render

//#region not-pure
function SayHello(props) {
  props.message = `Hello ${props.message}`;
  return el("div", {}, props.message);
}
//#endregion not-pure

//#region class
class ClassSayHello extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      `Hello ${this.props.toWhat}!`
    );
  }
}
//#endregion class

//#region render-class
ReactDOM.render(
  React.createElement(
    ClassSayHello,
    { toWhat: "Component" },
    null
  ),
  document.getElementById("hello-class")
);
//#endregion render-class
