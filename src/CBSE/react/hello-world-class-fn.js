var ClassHelloWorld = function () {
  _extends(ClassHelloWorld, React.Component);
  function ClassHelloWorld() {
    React.Component.apply(this, arguments);
  }
  ClassHelloWorld.prototype.render = function () {
    return React.createElement(
      "div",
      null,
      "Hello " + this.props.toWhat + "!"
    );
  };
  return ClassHelloWorld;
};
