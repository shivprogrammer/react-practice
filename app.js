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
