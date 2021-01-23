//#region component
function HelloWorld(props) {
  return <div>Hello {props.toWhat}!</div>;
}
//#endregion component

//#region rendering
const element = <HelloWorld toWhat="JSX" />;

ReactDOM.render(element, document.getElementById("root"));
//#endregion rendering
