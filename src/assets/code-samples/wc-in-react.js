class HelloMessage extends React.Component {
  render() {
    return <div>Bonjour <x-search>{this.props.name}</x-search> !</div>;
  }
}