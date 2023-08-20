//#region component
//#region signature
class Increment extends React.Component {
  //#endregion signature
  //#region constructor
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleClick = this.handleClick.bind(this);
  }
  //#endregion constructor

  //#region handle-click
  handleClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  //#endregion handle-click

  //#region render
  render() {
    return (
      <div className="increment">
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          increment
        </button>
      </div>
    );
  }
  //#endregion render
}
//#endregion component

//#region dom-render
ReactDOM.render(
  <Increment />,
  document.getElementById("class-root")
);
//#endregion dom-render
