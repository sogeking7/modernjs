showMessage(); // undefined
showMessage('Hello'); // Hello

function showMessage(txt) {
  console.log(txt);
}


// Local variables 

let userName = 'Alex'; // global variable 
function printHello() {
  // The outer variable is only used if there’s no local one.
  let userName = 'Alex'; // declare a local variable
  console.log('Hello World');
}

// Parameters - is the variables that are listed inside function parentheses (declaration time)
// Arguments - is the values that are passed to the function when it is called (call time)
// the given values are copied to local variables

function f1(from, text) { // parameters: from, text
  console.log(from + ': ' + text);
}

f1('Anna'); // Anna: undefined
f1('Anna', 'Hello!'); // Anna: Hello!

// Default parameters
function f2(from, text="Hi!") {
  console.log(from + ': ' + text);
}

f2('Jhon'); // Jhon: Hi!

// Evaluation of default parameters: for example
function f3(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// Default parameters in old javascript
function f4(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }
  // text = text || 'no text given'; // or shorter way

  console.log( from + ": " + text );
}

// A function with an empty return or without it returns undefined

function doNothing() { /* empty */ }
function doSomething() {return;}

console.log(doNothing() === undefined); // true
console.log(doSomething() === undefined); // true

// One function one action
// ultra short function names, like $, _ 