// The 'non-existing property' problem

let user = {};

// console.log(user.address.street); // TypeError: Cannot read property 'street' of undefined
// to avoid this error,
console.log(user.address ? user.address.street : undefined); // undefined
// or
console.log(user.address?.street); // undefined (no error)

// Do not overuse optional chaining.
// We should use '?' only where it's ok that something doesn't exist.
// For example, if according to our code logic 'user' must exist.
// but address is optional, then we should write user.address?.street
// but not user?.address?.street

// The optiona chainging works for declared vairables.

{
  // someUser?.address; // error
}

// Short-circuiting
// optional chaining '?' immediately stops the evaluation if the left part doesn't exist.
{
  let user = null;
  let x = 0;
  user?.sayHi(x++);
  console.log(x); // 0, value not incremented
}

// Other variants: ?.[], ?.()

// ?.() - checks the left part: if the function exists (null or undefined)
{
  let userAdmin = {
    admin() {
      console.log("I am admin");
    },
  };
  let userGuest = {};
  userAdmin.admin?.(); // I am admin
  userGuest.admin?.(); // nothins happens (no such method)
}

{
  let user1 = {
    firstName: "John",
  };
  let user2 = null;
  console.log(user1?.firstName);
  console.log(user2?.firstName);
  console.log(user1?.["firstName"]);
  console.log(user2?.["firstName"]);
}

// Also we can use ? with delete

{
  let user = null;
  // delete user.name if user exists
  delete user?.name;
}

// We can use optional chaining for safe reading and deleteing
// not for writing.
{
  let user = null;
  // SyntaxError: Invalid left-hand side in assignment
  // user?.name = "John"; // error
}
