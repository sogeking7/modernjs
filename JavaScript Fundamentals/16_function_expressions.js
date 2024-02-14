'use strict';

// Javascript have 2 types of syntax for creating a function

function sayHi() { // this is a function declaration
  console.log("Hi global");
}

let sayHi2 = function() { // this is a function expression
  console.log("Hi");
};

// we put semicolon on function expression, because we are assigning a function to a variable

// Callback functions
function ask(question, yes, no) {
  if (question) yes()
  else no();
}

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// The arguments show Ok and showCancel are called callback functions or just callbacks

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { console.log("You agreed."); },
//   function() { console.log("You canceled the execution."); }
// );

// they are anonymous functions.


// Function expressions vs function declarations

// Function declaration
// 1) A function declaration can be called earlier than it is defined

// Function expression
// 1) Function Expressions are created when the execution reaches them
// 2) In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.


{
  function sayHi() {
    console.log("Hi local");
  }

  const sayHi3 = function() {
    console.log("Hi3 local");
  };

  sayHi3(); // it will work
  sayHi();
}

// sayHi3(); // in strict mode use can't call this function outside, 
// as it decalared in block scope. Because it is function expression.

