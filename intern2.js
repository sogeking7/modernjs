// const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//   // var i создает одну переменную i
//   // let i coздает новую переменную i
//   setTimeout(() => {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }
// for (var i = 0; i < fib.length; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(`fib[${j}] = ${fib[j]}`);
//     }, 1500);
//   })(i);
// }

const result = [];

for (var i = 0; i < 5; i++) {
  // for on each iteration generates a new lexical environment let
  result.push(function () {
    console.log(i);
  });
}

console.log(result[1]());
console.log(result[2]());

const obj = {
  name: "tom",
  foo: function () {
    console.log(this.name);
  },
};

console.log(obj.foo());
