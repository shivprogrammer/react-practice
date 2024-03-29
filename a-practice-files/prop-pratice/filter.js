var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Users extends React.Component {
  render() {
    var friends = {this.props.list.filter(function (user) {
      return user.friend === true;
    });

    var nonFriends = {this.props.list.filter(function (user) {
      return user.friend === false;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function (user) {
            return <li key={user.name}>user.name</li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map(function (user) {
            return <li key={user.name}>{user.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
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
