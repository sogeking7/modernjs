let sum = new Function("a", "b", "return a + b");
console.log(sum(1, 2));

// function is created from a string.
// it allows us to turn any string to function.
// for example, we can receive a new function from a server and then execute it.


