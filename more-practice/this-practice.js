var sayNameMixin = function(obj) {
  obj.sayName = function() { //uncertain if I've used this notation
    console.log(this.name);
  }
}

var me = {
  name: 'Shiv',
  age: 25
}

var you = {
  name: 'Shazam',
  age: 100
}

sayNameMixin(me); // Shiv
sayNameMixin(you); // Shazam

function Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Stacey'.
      sayName: function() {
        console.log(this.name);
      }
    }
  }
}

var jim = Person('Jim', 42); // notice key word "new" wasn't used
jim.sayName(); // Jim
jim.mother.sayName(); // Stacey
