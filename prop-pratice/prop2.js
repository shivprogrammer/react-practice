var USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={''} />
        <h1>Name: </h1>
        <h3>username: </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
