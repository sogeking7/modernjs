// # 1
function first() {
  return {
    hello: "world!",
  };
}

function second() {
  return; // JavsScript will automatically insert a semicolon here
  {
    hello: "world!";
  }
}

console.log(first()); // { hello: 'world!' }
console.log(second()); // undefined

// # 2
var a = 5;
var writeA = function () {
  console.log(a);
  
  var a = 10;
};
console.log(writeA()); // undefined

// my answer : 10

// # 3

for (let i = 0; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 600);
}


// # 4
const something = {
  object:  "Javascipt",
  hello() {
    return `Hello, ${this.object}!`;
  },
  // Arrow function does not have its own this
  // this: typeof globalThis or window
  goodbye: () => {
    return `Hello, ${this.object}!`;
  }
}

console.log(something.hello());
console.log(something.goodbye());

// # 5

var a = 1;
function first() {
  // a++;
  var a = 2;
  function second() {
    a ++;
    var a = 3;
    console.log(a);
  }
  second();
}
first(); 
// 3
