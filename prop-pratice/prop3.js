class Avatar extends React.Component {
  render() {
    return (
      <img src={''} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar />
        <Label />
        <ScreenName />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
);
