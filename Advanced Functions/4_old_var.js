// "use strict";
// Variables declared with var are either function-scoped or global-scoped
{
  if (true) {
    var test = true;
  }
  if (true) {
    if (true) {
      if (true) {
        var hello = "hello";
      }
    }
  }
  console.log(test);
  console.log(hello);
}

// var ignores code blocks. we've got global variable.

{
  for (var i = 0; i < 10; i++) {
    var hello = "mocki";
  }
  console.log(i);
  console.log(hello);
}

// If a code block is inside a  function , then var   becomes a function-level variable.

{
  function sayHi() {
    // function
    if (true) {
      // code block
      var phrase = "Hello";
    }
    console.log(phrase);
  }

  sayHi();
  // console.log(phrase);
}

// In past times in JavaScript, blocks had no Lexical Environments, and var is ignored all scoped
{
  let user = "Jhon";
  // let user = 'Max'; // error

  console.log(user);
}
{
  var user = "k";
  var user = "Jhon";

  console.log(user);
}

{
  console.log("Hoist 1");
  // Declaration are hoisted, but assigment are not.
  function sayHi() {
    phrase = "Hello";
    if (false) {
      var phrase;
    }
    console.log(phrase);
  }
  sayHi();
}

{
  console.log("Hoist 2");
  function sayHi() {
    console.log(phrase);
    var phrase = "Hello";
  }
  sayHi();
}

// IIFE - immediately invoked function expression

{
  // Tries to declare and immediately call a function
  // function() { // <-- SyntaxError: Function statements require a function name
  //   var message = "Hello";
  //   console.log(message); // Hello
  // }();
  // syntax error because of parentheses below
  // function go() {
  // }(); // <-- can't call Function Declaration immediately
}

{
  // Ways to create IIFE

  (function () {
    console.log("Parentheses around the function");
  })();

  (function () {
    console.log("Parentheses around the whole thing");
  })();

  !(function () {
    console.log("Bitwise NOT operator starts the expression");
  })();

  +(function () {
    console.log("Unary plus starts the expression");
  })();
}
