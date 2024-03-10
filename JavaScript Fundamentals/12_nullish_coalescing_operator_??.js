//  ?? - nullish coalescing operator 
// The result of -- "a ?? b"
// 1) when a is defined return a
// 2) when a isn't defined return b

// a ?? b
// (a !== null && a !== undefined) ? a : b;

let user;
console.log(user ?? 'Anonymous')

user = "Jhon";
console.log(user ?? 'Anonymous')

// shows the first defined value:
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// shows the first truthy value:
firstName = null;
lastName = null;
nickName = "Supercoder";
console.log(firstName || lastName || nickName || "Anonymous"); // Su

// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0
console.log(height || 100);
console.log(height ?? 100);

// important: use parentheses

height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 5000

// without parentheses
area = height ?? 100 * width ?? 50;
console.log(area); // 0

// ...works this way (not what we want):
area = height ?? (100 * width) ?? 50;
console.log(area); // 0

// Using ?? with && or ||

// let x = 1 && 2 ?? 3; // Syntax error

const t = null;
const a = 23;
console.log(t ?? "hello")