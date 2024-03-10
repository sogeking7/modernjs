// Rest parameters ...
// function can be called with any number of arguments. not matter how it is defined.
// There will not be error because of 'exsessive' arguments.

// Me: i think we use rest parameters ...rest, in function arguments mostly.
{
  function getSum(...args) {
    let res = 0;
    for (let arg of args) res += arg;
    return res;
  }
  console.log(getSum(1, 2, 3, 4, 5));
}

// The rest paremeter must be at the end
// ...rest must be always last;
{
  // function hello(a, ...rest, b) { // syntax error
  //   console.log(a);
  //   console.log(rest);
  //   console.log(b);
  // }
  // console.log(hello(1, 2, 3))
}

{
  function showName() {
    // arguments - special array like object
    // contains all arguments by their index
    console.log(arguments);
    for (let arg of arguments) {
      console.log(arg);
    }
  }
  showName("tom", "jerry", 123);
}
// in old times , the rest parameters did not exist in the language.
// and using arguments was the only way to get all arguments of the function.
// Arrow functions don't have arguments, only in normal fucntions.

// Spread syntax

// Now we know how to get array from the list of parameters.
// And now we want to do it reverse.

{
  let arr = [1, 2, 3, 4];
  console.log(Math.max(1, 2, 3, 4)); // 4
  console.log(Math.max(arr)); // NaN
  // Math.max expext list of numberic arguments. not a "single array"
  console.log(Math.max(...arr));
}

{
  const str = "hello";
  console.log(...str);
  for (char of str) {
    console.log(char);
  }
  // The spread syntax internally uses iterators to gather elements, the same way
  // of for..of does.
}

// So, spread syntax works only with "iterables"

{
  const obj = {
    name: "Anton",
    age: 123,
  };

  // console.log(...obj); // TypeErro: Spread syntax requires ...iterables
  console.log(Array.from(obj));
  // The same situation, Array.from() can work with iterables and array-likes.
}

{
  const arr = [1, 2, 3, 4];
  const copyArr = [...arr];
  if (JSON.stringify(arr) === JSON.stringify(copyArr)) {
    console.log("equal");
  }
  console.log(arr === copyArr); // not same reference
}

{
  const arr = { a: 1, b: 2 };
  const copyArr = { ...arr };
  if (JSON.stringify(arr) === JSON.stringify(copyArr)) {
    console.log("equal");
  }
  console.log(arr === copyArr); // not same reference
}

// Summary
// Rest paremeters are used to create functions that accept any number of arguments
// The Spread syntax is used to pass an array to function that normally require a list of many arguments.

// arguments - old style, array-like iterable object.
