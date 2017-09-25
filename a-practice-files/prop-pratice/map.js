class Users extends React.Component {
  render() {
    return (
      <ul>
      {this.props.list.map(function (name) {
        return <li>{name}</li>
      })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
