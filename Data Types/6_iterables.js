// Iterable is a concept that allows to make any
// object useable in a for..of loop.

// If an objects isn't technically an array, but
// represents a a collection (list, set) of something

// Symbol.iterator
{
  // for example we have an object that is not an array.
  let range = {
    from: 1,
    to: 5,
  };
  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  // here we created a custom iterable object
  // So, the iterator object is seperate from the object.
  for (let num of range) {
    console.log(num);
  }
}

// String is iterable.

// Calling iterator explicitly
{
  let str = "Hello World";
  let iterator = str[Symbol.iterator]();
  while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
  }
}

// Example of array like object
{
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
  };
  // for (let num of arrayLike) {
  // console.log(num); // error, no Symbol.iterator
  //}
  // arrayLike is not iterable.

  // to make it work we can use Array.from
  let arr = Array.from(arrayLike);
  for (let num of arr) {
    console.log(num);
  }

  // or another example with string
  let str = "Hello";
  let arrStr = Array.from(str);
  for (let char of arrStr) {
    console.log(char);
  }
}
