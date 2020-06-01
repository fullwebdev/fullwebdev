//#region component
function MyResponsiveComponent() {
  const width = useWindowWidth(); // Our custom Hook
  return <p>Window width is {width}</p>;
}
//#endregion component

ReactDOM.render(
  <MyResponsiveComponent />,
  document.getElementById("root")
);
