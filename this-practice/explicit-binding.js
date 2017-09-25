// var sayName = function() {
//   console.log('My name is ' + this.name);
// }

var sayName = function(lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
}

var stacey = {
  name: 'Stacey',
  age: 34
}

var languages = ['Javascript', 'Ruby', 'Python'];

// sayName.call(stacey); // I've never seen a call method before
// My name is Stacey

sayName.call(stacey, languages[0], languages[1], languages[2]);
// My name is Stacey and I know Javascript, Ruby, and Python

sayName.apply(stacey, languages); // Sweet, does the exact same thing as call above but you can just pass in an array without having to pass in each individual element

var newfn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();
