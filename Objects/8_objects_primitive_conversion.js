"use strict";
// Convert object to primitive.
// 1) toString() and valueOf()
// 2) Symbole.toPrimitive symbol used in object conversion
// 3) toString() and valueOf() can be overridden

// objects can be converted to string, number, and default hints
// conversions are based on the property types of object

let car = {
  model: "Ford",
};

// alert(car.toString()) // [object Object]
// alert(car) // [object Object] same as toString()
// alert(car.valueOf()); // [object Object]

// built-in symbol call Symbol.toPrimitive
let apple = {
  color: "red",
  length: 12,
  // write a function for the conversion based
  // on the hint
  // return the converted type
  [Symbol.toPrimitive](hint) {
    if (hint == "string") {
      return this.color;
    }
    if (hint == "number") {
      return this.length;
    }
    return "apple"; // for default hints
  },
};

// if given an object, try string hint first
// alert(apple); // red
// alert(+apple) // 12
// alert(apple + "!"); // apple!
// alert(apple.toString()); // [object Object]
// alert(apple.valueOf()); // red

// ovverride toString() and valueOf() to convert to
// primitive

let lemon = {
  color: "yellow",
  length: 8,
  toString() {
    return this.color;
  },
  valueOf() {
    return this.length;
  },
};

alert(lemon); // yellow
alert(+lemon); // 8
alert(lemon.toString()); // yellow
alert(lemon.valueOf()); // 8

alert(lemon - 2);
alert(lemon + "!");
