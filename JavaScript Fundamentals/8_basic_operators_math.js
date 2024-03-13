// 
//  Unary, Binary operators
//

// What is "Operand" ?
// for example in 2 * 4, 2 and 4 are operands,


// Operator is unary if it has single operand

let x = 5;

x = -x
console.log(x);

x = -x
console.log(x);

// An operator is binary if it has two operands

console.log(1+1);

// unary + converts non-numbers to number
x = "1234";
let y = +x + 1; 
console.log(y) // 1235

x = true; 
x = +x; // true -> 1
console.log(x) // 1

x = false;
x = +x; // false -> 0
console.log(x) // 0 

// Assignment ( = ) returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a) // 3
console.log(b) // 2
console.log(c) // 0

// Chaining assignments

a = b = c = 2 + 2 + 2;

console.log(a) // 6
console.log(b) // 6
console.log(c) // 6

// Increment ++

x++;

// Decrement --

x--;

// Postfix form

x++; // returns previous value and increase by 1

// Prefix form

++x; // increase by 1 and returns the new value

//  Comma
// Why do we need an operator that throws away everything except the last expression?
// Sometimes, people use it in more complex constructs to put several actions in one line.

let p = (1 + 2, 3 + 4);
console.log(p); // 7

p = 1 + 2, 3 + 4; // --> p = (1 + 2), 3 + 4
console.log("p", p); // 3

// parentheses important

// we see comma in these cases, for example in for-loop
for (let i = 1, j = 1, k = i * j; i < 10; i ++) {
  console.log(k)
}

console.log('\n Examles: \n');

console.log("" + 1 + 0) // "10"
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // "9px"
console.log("$" + 4 + 5) // "$45"
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) // "  -9  5"
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(" \t \n" - 2) // -2 

a = 1, b = 1;

c = ++a; // 2
let d = b++; // 1

console.log(c, d) // 2 1