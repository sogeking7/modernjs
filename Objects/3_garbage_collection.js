// We create primitives, objects, functions... all that takes memory.

// A simple example
{
  // a user has a reference to the object
  let user = {
    name: "jhon",
  };

  // if the value of user is overwritten, the reference is lost

  user = null;

  // {
  //   name: "jhon"
  // }
  // Now, this Jhon object becomes unreachable.
  // There is no way to access it, no reference to it. Garbage collecter will junk the data and free the memory.
}

{
  // Two references
  // Now let's imagine we copied  the reference from user to admin;
  let user = {
    name: "Jhon",
  };
  let admin = user;
  // Now if we do
  user = null;
  // Then the object is still reachable via   admin global variable, so it must  stay in memory. If we overwrite admin
  // too, then it can be removed.
}

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}

{
  // Interlinked objects.
  // Now a more complex object.

  let family = marry({ name: "Jhon" }, { name: "Ann" });
  // the function 'marry' marries two objects by giving them references to each other and returns a new object that,
  // contains them both.

  // Now, let's remove two references
  delete family.father;
  delete family.mother.husband;

  // So, Jhon is now unreachable and will be removed from the memory with all its data that also became unaccessible.
}

{
  // Unreachable Island
  // It is possible that the whole island of interlinked objects becomes unreachable and its removed from the memory
  
  let family = marry({ name: "Jhon" }, { name: "Ann" });

  family = null;
  // It is obvious that Jhon and Ann are still linked. both have incoming references. But that's not enough.

  // The former familiy   object has been unlinked from the root, there's no  refrence to it any more, so whole
  // island becomes unreachable and will be removed.
}


// That’s the concept of how garbage collection works. JavaScript engines apply many optimizations to make
// it run faster and not introduce any delays into the code execution.

// Garbage collection performed automatically, we cannot force or prevent it.
// Objects are retained in memory while they are reachable