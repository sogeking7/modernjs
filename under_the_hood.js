// Javascript is single thread

// 1) Thread of execution

// In computer science, a thread typically refers to a sequence of software code the computer and its CPU must execute.
//  a. Javascript is a single-threaded language
//  b. Single sequential flow of control
//  c. Javascript is a synchronous language with asynchronous capabilities
//  e. A thread has a call stack (last in first out) & memory heap

// 2) Execution Context
// There is a global execution context as well as a function execution context for every function invoked.

// Memory Creation Phase
//  1. Create the global object (browser = window, Node.js = global)
//  2. Create the 'this' object and bind it to the global object
//  3. Setup memory heap for storing variables and function references
//  4. Store functions and variables in global execution context and set to 'undefined'
// Execution Phase
//  1. Execute code line by line
//  2. Create a new execution context for each function call

var x = 100; //
var y = 50;
function getSum(a, b) {
  var sum = a + b;
  return sum;
}
var sum1 = getSum(x, y);
var sum2 = getSum(3, 4);

// Creation Phase

// line 1: x variable is allocated memory and stores undefined
// line 2: y variable is allocated memory and stores undefined
// line 3: getSum function is allocated memory and stores all the code
// line 4: sum1 variable is allocated memory and stores undefined
// line 5: sum2 variable is allocated memory and stores undefined

// Execution Phase

// line 1: Places the value 100 in the x variable
// line 2: Places the value 50 in the y variable
// line 3: Skips the function because there is nothing to execute
// line 4: Invokes the getSum() function and creates a new function execution context

// 3) Asynchronous Javascript

// scope(область видимости) = доступность перемен в функций (глобальный и локаольный)
// переменные обьявленные вне функций но доступные внутри функций - глобальные
// переменные обьявленные внутри функций - локальные
//
// hoisting - поднятие переменных и функций в начало файла
// var, function expression - поднимаются в начало файла
//
// closure - замыкание - это момент когда функция имеет доступ к переменным из вышестоящего scope
// function внутри function / 

