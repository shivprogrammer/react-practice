var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

var sayAge = function() {
  'use strict';
  console.log(this.age);
}

var me = {
  age: 25
}

sayAge(); // with animal commented out, the "this" that this is referencing applies to the window object, so it returns undefined
window.age = 35;
sayAge(); // now returns 35

sayAge(); // if "use strict" is in place, then this cannot even be called because the "this" function is attached to the window and an error message will pop up
