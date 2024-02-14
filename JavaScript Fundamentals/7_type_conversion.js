// alert() - automatically converts any value to a string to show it.
// 
// Mathematical operations convert values to numbers.

console.log("6" / "2") // 3, strings are converted to numbers
// Only case when operation is + , then strings are concatenated

console.log("6" / "2a") // NaN, "2a" is not a number

// String(), Number(), Boolean()

// 1) Number() - Numeric conversion

console.log(Number(undefined))  // => Nan
console.log(Number(null)) // => 0
console.log(Number(" \t 123 \n" )) // => 123

// 2) Boolean() - Boolean conversion

console.log(Boolean("")) // -> false
console.log(Boolean(undefined)) // -> false
console.log(Boolean(null))  //-> false
console.log(Boolean(NaN)) // -> false
console.log(Boolean(0))// -> false

console.log(Boolean("0")) // -> true
