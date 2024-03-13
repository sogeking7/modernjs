// 7 types of data

// 1) null
// 2) undefined
// 3) boolean
// 4) number
// 5) string
// 6) object
// 7) symbol
// 8) bigInt

// "" '' - обычные скобки
// `` - литералы

console.log(typeof 0);
console.log(typeof true);
console.log(typeof "javascript");
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof Symbol("JS"));
console.log(typeof null);
console.log(typeof function () {});
console.log(typeof NaN); // number

console.log(1 / 0); // Infinity
console.log(undefined * 1); // NaN

// Строки и числа
console.log(1 + "2"); // '12'
console.log(1 - "2"); // -1
console.log("" - 1); // -1
console.log("3" * "8"); // 24
console.log(4 + 10 + "px"); // 14px
console.log('px' + 5 + 10); // px510
console.log('42' - 60); // -18
console.log('42px' - 2); // NaN
console.log(null + 2); // 2 (null) => 0
console.log(undefined + 42); // NaN, undefined невозможно привести к числу

// == vs ===

console.log(2 == '2') // == пытается привести все к одному типу
console.log(2 === '2') // === не пытается привести
console.log(undefined == null) // true
console.log(undefined === null) // false

console.log('0' == false); // true - пытается все это привести к числу
console.log('0' == 0) // true 
console.log(0 == 0) // true

console.log(false == '')
console.log(false == [])
console.log(false == {}) 