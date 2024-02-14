// ( || ) OR
// It gets first truthy value from a list of variables or expressions.

console.log(1 || null)
console.log(null || 1)

// ( && ) AND
// It finds/returns first falsy value from a list of variables or exressions.
// or last value if none were found.

const a = 1 && 2 && null && 3;
console.log(a) // null;

const b = 1 && 2 && 3;
console.log(b) // 3

// Caution !!! 
// do not replace "if" with "&&"

let x = 1;
(x > 0) && console.log('Hello')


// ( ! ) NOT
//  This operator converts value to boolean and returns inverse value

console.log(!1);
console.log(!0)

// double NOT !!
// is sometimes used for converting a value to boolean type.

console.log(!!1);
console.log(!!0);

