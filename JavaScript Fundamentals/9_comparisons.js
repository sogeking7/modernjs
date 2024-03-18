// String comparison, JavaScript uses 'lexicographical' order to compare

console.log("A " + "A".charCodeAt(0));
console.log("B " + "B".charCodeAt(0));
console.log("C " + "C".charCodeAt(0));

console.log("a " + "a".charCodeAt(0));
console.log("b " + "b".charCodeAt(0));
console.log("c " + "c".charCodeAt(0));

console.log("a" < "b");
console.log("ac" > "ab");
console.log("aa" > "a");

// Comparison of different types
// JavaScript converts the values to numbers.

console.log("1" == 1); // true
console.log(" 1 " == 1); // true
console.log(true == 1); // true

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true;

console.log(a == b); // true

// Strict equality ===

console.log(0 === false); // false

// Equality check for null and undefined is defined without conversions, JavaScript rule !!!

// special rule for non-strict ( == ), we don't convert null, undefined to numbers)
console.log(null == undefined); // true;
//

console.log(null === undefined); // false;

console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false

console.log(undefined < 0); // false;
console.log(undefined >= 0); // false
console.log(undefined == 0); // false

// undefined is incomparable

// Examples:
console.log("\nExamples:\n");
console.log(5 > 4); //true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
