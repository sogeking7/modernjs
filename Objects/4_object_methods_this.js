("use strict");

// a function that is a property of an object is called its method
{
  const user = {
    sayHi: function () {
      console.log("Say Hi!");
    },
  };
  user.sayHi();
}
{
  // method shorthand
  const user = {
    sayHi() {
      console.log("Say Hi!");
    },
  };
  user.sayHi();
}

// To access the object, a method can use the this keyword.
{
  const user = {
    name: "Jhon",

    sayHi() {
      console.log(this.name);
    },
  };
  user.sayHi();
}

{
  let user = {
    name: "John",
    age: 30,

    sayHi() {
      alert(user.name); // leads to an error
    },
  };

  let admin = user;
  user = null; // overwrite to make things obvious

  // admin.sayHi(); // TypeError: Cannot read property 'name' of null
}

// this
// It can be used in any function, even if it's not a method of an object.
// Calling without an object: this == undefined
{
  function sayHi() {
    console.log(this);
    // In non-strict mode the value of this will be the global object, window in a browser
    // In strict mode, this will be undefined.

    console.log(this.name); //undefined
  }
  // Usually such call is a programming error. If there’s
  //  this inside a function, it expects to be called in an object context.
  sayHi(); // undefined
}

// Arrow functions have no “this”

// Arrow function don't have their own this. They inherit it from the surrounding block.
// It is useful when we actually do not want to have a separate this, but rather to take it from the outer context.
{
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    },
  };

  user.sayHi(); // Ilya
}

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

// Answer: an error
{
  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      },
    };
  }

  let user = makeUser();

  alert(user.ref().name); // John
}

{
  let calculator = {
    // a: null, // no need to declare
    // b: null, // no need to declare
    read() {
      this.a = +prompt("Enter a");
      this.b = +prompt("Enter b");
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
}
