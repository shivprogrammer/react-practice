class Users extends React.Component {
  render() {
    return (
      <ul>
        {/*Create an <li> for every name in the list array*/}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
