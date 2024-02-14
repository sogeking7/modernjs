// // Labels for break / continue;

// outer1: for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(j);
//     if (j == 5) {
//       break outer1;
//     }
//   }
//   console.log('\n')
// }

// console.log ("\n");

// outer2: for (let i = 0; i < 1; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(j);
//     if (j == 5) {
//       continue outer2;
//     }
//   }
//   console.log('\n')
// }
// console.log ('\n')

let i = 0;
while (i ++ < 5) console.log(i); // 1 2 3 4 5 
console.log ('\n')

i = 0;
while (++ i < 5) console.log(i); // 1 2 3 4 
console.log ('\n')

for (let i = 0; i < 5; i++) console.log(i) // 0 1 2 3 4 
console.log ('\n')

for (let i = 0; i < 5; ++i) console.log(i) // 0 1 2 3 4 