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
