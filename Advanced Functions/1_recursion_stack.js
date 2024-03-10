// Recursion is a programming pattern that is useful when
// a task can be split into several tasks of the same kind. but simpler.

{
  function pow(x, n) {
    if (n == 1) {
      return n;
    } else {
      return x * pow(x, n - 1);
    }
  }
  // recurstion depth is N
  // The maximal recursion depth is limity by JavaScript engine
  // we can rely on being 10000 10^4, some engines allow more 100000 10^5 (it is maximum)

  // There are automatic optimizations that help simplify (Tails calls optimization)
}

{
  let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 1600 },
    ],
    development: {
      sites: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      internals: [{ name: "Jack", salary: 1300 }],
    },
  };
  // function sumSalaries (prop) {
  //   if (Array.isArray(prop)) {
  //     const sum = prop.reduce()
  //   } else {

  //   }
  // }
}
