// Sometimes we need to create many similar objects

// Constructor function
// 1) They are named with capital letter first.
// 2) They should be executed only with 'new' operator.

// any function (except arrow functions) can be a constructor function
// and capital letter should be used for them.

{
  function User() {
    this.name = "Joh";
    this.isAdmin = false;
  }
  let user = new User();
  console.log(user);
}

{
  // implicity = неявность
  function User(name) {
    // this = {}; (implicitly)
    this.name = name;
    this.isAdmin = false;
    // return this; (implicitly)
  }
  console.log(User("John")); // undefined
}

{
  let user = new (function () {
    this.name = "John";
    this.isAdmin = false;
  })();
}

{
  // Constructor mode test

  // Inside a function , we can check whether it was called with 'new' or withuot it,
  // using a special new.target property.

  // It is undefiend for regular calls
  // and equals the function if called with new

  function User() {
    console.log(new.target);
  }
  // without 'new'
  User(); // undefined
  // with 'new'
  new User(); // function User { ... }
}

{
  function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
    this.name = name;
  }
  let john = User("John"); // redirects call to new User
  console.log(john);

  // this approach is sometimes used in libraries to the syntax more flexible.
  // So that people may call the function with or without new, and still workds.
}