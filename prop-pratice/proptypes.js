var React = require('react');
var ReactDOM = require('react-dom');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name='Shiv'
    username='shivvy'
    img='https://i.pinimg.com/736x/b8/be/f5/b8bef5902e49262e301b4134ae48fb9b--ganesha-paintings-ganesha-art.jpg'
  />,
  document.getElementById('root')
);