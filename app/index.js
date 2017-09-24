// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./index.css');
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello React Training!
//       </div>
//     )
//   }
// }
//
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

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

Badge.PropTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Shiv'
    username='shivvy'
    img='https://i.pinimg.com/736x/b8/be/f5/b8bef5902e49262e301b4134ae48fb9b--ganesha-paintings-ganesha-art.jpg'
  />,
  document.getElementById('root')
)
