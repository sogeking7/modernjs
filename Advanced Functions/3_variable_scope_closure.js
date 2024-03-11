// JavsScipt is a function oriented language

// We already know that a function can access variables outside it ("outer" variables);

// let and const variables
// let, const (modern)
// var (old)

// for (if, for, while and etc) variables declared in {...} are also only visible inside.

// it can only access outer variables.

{
  const makeCounter = () => {
    let counter = 0;
    return function () {
      return counter++;
    };
  };

  const counter = makeCounter();
  const counter1 = makeCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3

  console.log(counter1()); // 0
  console.log(counter1()); // 1
  console.log(counter1()); // 2
}

{
  function makeCounter() {
    let counter = 0;
    this.up = function () {
      return ++counter;
    };
    this.down = function () {
      return --counter;
    };
  }
  const counter = new makeCounter();
  console.log(counter.up());
  console.log(counter.up());
  console.log(counter.down());
}

// Lexical Environment
// A closure is a function that remembers its outer variables and can access them.
// all functions are naturally closures (only excepetion new Function)

// what is a closure ?
// all functions in JavaScript are closures, and maybe a few more words about technical details.
// the [[Environment]] property and how Lexical Environments work.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }

  var a = 5;
}

sayHi();
console.log(a);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));

{
  console.log("Me:");
  let a = 1;
  function f() {
    console.log(a);
    // let a = 2;
  }
  console.log(f());
}

{
  function inBetween(l, r) {
    return function (x) {
      return x >= l && x <= r;
    };
  }

  function inArray(arr) {
    return function (x) {
      return arr.includes(x);
    };
  }

  /* .. your code for inBetween and inArray */
  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

  console.log(arr.filter(inArray([1, 2, 10])).toString()); // 1,2
}

{
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  // // by name (Ann, John, Pete)
  // users.sort((a, b) => (a.name > b.name ? 1 : -1));

  // // by age (Pete, Ann, John)
  // users.sort((a, b) => (a.age > b.age ? 1 : -1));

  function byField(name) {
    return function (a, b) {
      return a[name] > b[name] ? 1 : -1; // it work for both string and number sorting
      // return a[name] - b[name]; // works for numbers only.
    };
  }

  users.sort(byField("name"));
  console.log(users);
}

{
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let shooter = function () {
        // create a shooter function,
        let index = i;
        return function () {
          console.log(index);
        };
      };

      shooters.push(shooter()); // and add it to the array
      i++;
    }

    // ...and return the array of shooters
    return shooters;
  }

  let army = makeArmy();

  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  console.log(army[0]()); // 10 from the shooter number 0
  console.log(army[1]()); // 10 from the shooter number 1
  console.log(army[2]()); // 10 ...and so on.
}

{
  function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
      // for on each iteration generates a new lexical environment
      let shooter = function () {
        // shooter function
        console.log(i); // should show its number
      };
      shooters.push(shooter);
    }

    return shooters;
  }

  let army = makeArmy();

  console.log(army[0]()); // 0
  console.log(army[5]()); // 5
}
