// Array is to store ordered collections.
// There are two syntaxes for creating an empty array;

{
  let arr = new Array();
}
{
  let arr = [];
}
// To get last element we can use .at()
{
  let arr = [1, 2, 3, 4];
  console.log(arr[arr.length - 1]);
  console.log(arr.at(-1));
}
// Methods pop/push shift/unshift
// A queue is one of the most common uses of an array

// Arrays in JavaScript can work as a queu and stack.
{
  // shift gets an element from the beginning, so that the 2nd element becomes the 1st.
  let arr = [1, 2, 3, 4];
  let first = arr.shift();
  console.log(first, arr);
}
{
  // unshift add the element to the beginning of the array
  let arr = [1, 2, 3, 4];
  arr.unshift(0);
  arr.unshift(999);

  console.log(arr);
}

{
  // Arrays are objects
  let fruits = []; // make an array

  fruits[99999] = 5; // assign a property with the index far greater than its length
  console.log(fruits.length); // 100000
  fruits.age = 25; // create a property with an arbitrary name
  console.log(fruits.age); // 25
  // That’s possible, because arrays are objects at their base. We can add any properties to them.
}
// Performance
// Methods push/pop run fast, while shift/unshift are slow.

{
  // for..of - give access to the elements value
}
{
  // for..in - works as well, because ararys are objects
  // But that’s actually a bad idea. There are potential problems with it:
  // 1) The loop for..in iterates over all properties, not only the numeric ones
  // Generally, we shuold not use for..in for arrays.
}

{
  //A word about “length”

  // The length property automatically updates when we modify the array.
  // To be precise, it is actually not the count of values in the array,
  // but the greatest numeric index plus one.
  let fruits = [];
  fruits[123] = "Apple";

  console.log(fruits.length); // 124
  //Another interesting thing about the length property is that it’s writable
  let arr = [1, 2, 3, 4, 5];

  arr.length = 2; // truncate to 2 elements
  console.log(arr); // [1, 2]

  arr.length = 5; // return length back
  console.log(arr[3]); // undefined: the values do not return

  // So, the simplest way to clear the array is: arr.length = 0;
}

// new Array()
{
  // If new Array is called with a single argument which is a number,
  // then it creates an array without items, but with the given length.
  let arr = new Array(2); // will it create an array of [2] ?

  console.log(arr[0]); // undefined! no elements.

  console.log(arr.length); // length 2
}

// toString
{
  let arr = [1, 2, 3];
  console.log(arr);
  console.log(arr.toString() == "1,2,3"); // true

  // Arrays do not have Symbol.toPrimitive, neither a viable valueOf,
  // they implement only toString conversion, so here [] becomes an
  // empty string, [1] becomes "1" and [1,2] becomes "1,2".
}

// Do not compare arrays with ==
{
  // Two objects are equal == only if they’re references to the same object.
  // If one of the arguments of == is an object, and the other one is a primitive,
  // then the object gets converted to primitive, as explained in the chapter
  // Object to primitive conversion.
  //…With an exception of null and undefined that equal == each other and nothing else.
}

// for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
// for (let item of arr) – the modern syntax for items only,
// for (let i in arr) – never use.
