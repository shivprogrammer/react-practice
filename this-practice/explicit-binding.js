var sayName = function() {
  console.log('My name is ' + this.name);
}

var stacey = {
  name: 'Stacey',
  age: 34
}

var languages = ['Javascript', 'Ruby', 'Python'];

sayName.call(stacey); // I've never seen a call method before
// My name is Stacey
