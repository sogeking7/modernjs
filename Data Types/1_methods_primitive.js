// Object Wrappers
// String,
// Number,
// BigInt,
// Symbol,
// Boolean
// They provide different sets of methods

{
  let str = "Hello";
  console.log(str.toUpperCase()); // HELLO
  // 1. The string "str" is primitive.
  // So in the moment of accessing its property
  // a special object is created that knows the
  // value of the string,
  // and has useful methods, like toUpperCase().
  //
  // 2. That method runs and returns a new string
  //
  // 3. The special object is destroyed, leaving
  // the primitive "str" alone.

  // In short, primitives can provide methods, but they
  // sill remain lightweight
}

{
  // Constructos String/ Number/ Boolean
  // in JavaScripts hihghly unrecommended.
  console.log(typeof 0); // number
  console.log(typeof new Number(0)); // object
  let zero = new Number(0);
  if (zero) console.log("zero is truthy?!?");
}

{
  // But using constructors without new is recommended
  // and totally fine.
  console.log(typeof 0); // number
  console.log(typeof Number(0)); // number
  let zero = Number(0);
  if (zero) console.log("zero is truthy?!?");
}
// null and undefined have no methods.