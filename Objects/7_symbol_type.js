// By specification only two primitive types may server as a object property key,
// 1. string
// 2. symbol.

// if one uses another type, it gets autoconverted to a string.
// for example,
// obj[1] is the same as obj["1"]
// obj[true] is the same as obj["true"]
// We usually use string, but sometimes symbols are used as keys.

// Symbol
// is a primitive unique value with an optional description.
{
  const id1 = Symbol("id");
  const id2 = Symbol("id");
  console.log(id1 === id2); // false
}

// Symbols don't auto-conver to a string.
{
  const id = Symbol("id");
  // TypeError: Cannot convert a Symbol value to a string
  // console.log("symbol: " + id);
  console.log(String(id)); // Symbol(id)
  console.log(id); // Symbol(id)
  console.log(id.toString()); // Symbol(id)
  console.log(id.description); // id
}

// Use case 1: Symbols as property key
{
  const MY_KEY = Symbol();
  let obj = {};
  let obj2 = {
    [MY_KEY]: 123,
  };
  obj[MY_KEY] = 123;
  console.log(obj[MY_KEY]); // 123
  console.log(obj2[MY_KEY]); // 123
}

// Use case 2: constants representing concepts

const COLOR_RED = Symbol("Red");
const COLOR_YELLOW = Symbol("Yellow");

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_YELLOW; // for example
  }
}

// Symbolic properties do not participate in for..in loop.
// They are just hidden
{
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123,
  };

  for (let key in user) console.log(key); // name, age (no symbols)

  // the direct access by the symbol works
  console.log("Direct: " + user[id]); // Direct: 123
}

//In contrast, Object.assign copies both string and symbol properties:
{
  // “Hidden” object properties.

  let id = Symbol("id");
  let user = {
    [id]: 123,
  };

  let clone = Object.assign({}, user);

  console.log(clone[id]); // 123
}

// Global Symbol
{
  // read from the global registry
  let id = Symbol.for("id"); // if the symbol did not exist, it is created
  let idDescription = Symbol.keyFor(id);

  // read it again (maybe from another part of the code)
  let idAgain = Symbol.for("id");

  // the same symbol
  console.log(id === idAgain); // true
  console.log("idDescription: " + idDescription)
}
