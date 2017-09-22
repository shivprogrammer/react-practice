// Intro to the React Ecosystem Video

var getProfilePic = function (username) {
  return 'https://photo.fb.com/' + username
}
var getProfileLink = function (username) {
  return 'https://www.fb.com/' + username
}

var getAvatarInfo = function (username) {
  return {
    pic: getProfilePic(username).
    link: getProfileLink(username)
  }
}

getAvatarInfo('shivvy')

////////////////////////

var ProfilePic = function() {
  return (
    <img src={'https://photo.fb/com/' + this.props.username} />
  )
}

var ProfileLink = function() {
  return (
    <a href={'https://www.fb.com/' + this.props.username}>
      {this.props.username}
    </a>
  )
}

var Avatar = function() {
  return (
    <div>
      <ProfilePic username={this.props.username} />
      <ProfilePic username={this.props.username} />
    </div>
  )
}

<Avatar username="shivvy" />

////// Imperative vs Declarative
// Imperative (How)

var numbers = [4, 2, 3, 6]
var total = 0
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

// Declarative (What)

var numbers = [4, 2, 3, 6]
numbers.reduce(function (previous, current)
  return previous + current
})

//////// More Imperative vs Declarative

// this is imperative
// so this state lives in the DOM
$("shiv-btn").click(function() {
  $(this).toggleClass("highlight")
  $(this).text() === 'Add Highlight'
  ? $(this).text('Remove Highlight')
  : $(this).text('Add Highlight')
})

// this is declarative
// whereas this state lives in the component
<ShivsBtn
  onClick={this.handleToggleHighlight}
  highlight={this.state.highlight} />

// React is declarative for the most part, because even in the declarative function, it still needs to be called imperatively
this.setState({
  highlight: !this.state.highlight
})

// instead of using ng-repeat or anything like that, you only need to use JavaScript itself
<ul>
  {friends.map(function (name) {
    return (
      <li>
        {name}
      </li>
    )
  })}
</ul>

// Webpack config file
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

// babel file
"babel": {
  "presets": [
    "env",
    "react"
  ]
}

// axios
function getRepos(username) {
  return axios.get('https://api.github.com/users' + username + '/repos' + param + '&per_page=100');
}
