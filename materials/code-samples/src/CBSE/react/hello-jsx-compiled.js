function HelloWorld(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    "Hello ",
    props.toWhat,
    "!"
  );
}

const element = /*#__PURE__*/ React.createElement(
  HelloWorld,
  {
    toWhat: "JSX",
  }
);
ReactDOM.render(element, document.getElementById("root"));
