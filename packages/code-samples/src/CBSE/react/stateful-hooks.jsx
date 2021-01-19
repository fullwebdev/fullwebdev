//#region component
function Increment() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="increment">
      <p>Count: {count}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
//#endregion component

ReactDOM.render(
  <Increment />,
  document.getElementById("hooks-root")
);
