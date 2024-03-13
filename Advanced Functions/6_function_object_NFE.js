// In javascript functions are objects.
// action objects, we can not only call them, but also threat them as objects: add/remove properties, pass by reference.

// The 'name' property

{
  function sayHi() {
    console.log("Hi");
  }
  console.log(sayHi.name); // sayHi

  const arr = [function () {}];
  console.log(arr[0].name.length); // "" empty string
}

// The 'length' property

{
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...rest) {}

  console.log(f1.length); // 1 - number of arguments
  console.log(f2.length); // 2
  console.log(many.length); // 2
}

// The 'custom' property

{
  function sayHi() {
    console.log("hi");
    sayHi.counter++;
  }
  sayHi.counter = 0; // initialization

  sayHi();
  sayHi();

  console.log(sayHi.counter);
}

{
  function makeCounter() {
    // instead of -> let counter = 0;
    function counter() {
      return counter.count++;
    }

    counter.count = 0;

    return counter;
  }

  const counter = makeCounter();

  console.log(counter());
  console.log(counter());
  console.log(counter());
}

// Named Function Expressions NFA

{
  let sayHi = function (user) {
    if (user) {
      console.log("Hello, " + user);
    } else {
      sayHi("Guest");
    }
  };

  // when we assign our function to another variable
  let welcome = sayHi;
  sayHi = null;

  // will be error
  // sayHi is not a function
  // welcome();
}

// To fix this
{
  let sayHi = function f(user) {
    if (user) {
      console.log("Hello, " + user);
    } else {
      f("Guest");
    }
  };

  let welcome = sayHi;
  sayHi = null;

  welcome();
  // works!
}

{
  function sum(a) {
    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function () {
      return currentSum;
    };

    return f;
  }

  alert(sum(1)(2)); // 3
  alert(sum(5)(-1)(2)); // 6
  alert(sum(6)(-1)(-2)(-3)); // 0
  alert(sum(0)(1)(2)(3)(4)(5)); // 15
}
