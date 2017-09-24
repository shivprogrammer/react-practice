class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function (user) {
            return <li>{user.friend === true}</li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function (user) {
            return <li>{user.friend === false}</li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
