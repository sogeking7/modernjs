// to remove a property of object use delete

{
  const obj = {
    name: "Alex",
    gender: "male",
  };
  console.log(obj);
  delete obj.gender;
  // delete obj["gender"];
  console.log(obj);
}

{
  const obj = {};
  const key = "name";
  console.log(obj.key); // undefined

  const fruit = "orange";
  const newObj = {
    [fruit]: 10,
  }; // or
  // newObject[fruit] = 10;
  console.log(newObj);
  // square bracets are much powerful than dot notation.
}

{
  // You can use for, let, return js syntaxes as object keys, bot not for variable names.
  // No limitation when giving a property name to an object
  const user = {
    for: 12,
    let: 10,
    return: 1,
  };

  console.log(user.for + user.let + user.return); // 23
}

{
  const obj = {
    0: "test",
    zero: "test2",
    true: "test3",
  };

  // Here number 0 converts to string "0"
  // if we use another type for key, it will be autoconverted to string
  console.log(obj[true]); // test3
  console.log(obj[0]); // test
  console.log(obj["0"]); // test
  // console.log(obj[zero]) // error
}

{
  // __proto__
  let obj = {};
  obj.__proto__ = 9; // assigning some value
  console.log(obj);
  console.log(obj.__proto__); // we can see that assigning some to __proto__ is failed.
}

{
  // Existence test, 'in' operator
  let user = { name: "Hecktor", age: 30, phone: undefined };
  console.log("name" in user); // true
  const key1 = "name";
  console.log(key1 in user); // true
  console.log(user.phone); // undefined
  console.log(user.random); // undefined
  console.log("phone" in user); // true

  // "undefined" should not explicitly be assigned to a property, use null instead.
  // We mostly user "null" for unknown or empty values.

  // for..in loop
  for (let key in user) {
    console.log(key, user[key]);
  }
}

const codes = {
  5: "USA",
  4: "Canada",
  3: "Mexico",
  2: "Brazil",
  "-4": "Kazakhstan",
  "5x": "Almaty",
  "1x": "Argentina",
  "2x": "Chile",
  "0x": "Peru",
  "6": "Bolivia",
};

for (let code in codes) {
  console.log(code, codes[code]);
}

// integer properties are sorted, other are listed in creation order.
// integer property is is a string that can be converted to-and-from an integer without a change.

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number("49")))); // "49", same, integer property
console.log(String(Math.trunc(Number("+49")))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number("-49"))));
console.log(String(Math.trunc(Number("1.2")))); // "1", not same "1.2" ⇒ not integer property

// non-integer properties are listed in the creation order

// There are many other kinds of objects in JavaScript

// Array - to store ordered data collections.
// Date - to store the information about the data and time.
// Error - to store the information about an error.
