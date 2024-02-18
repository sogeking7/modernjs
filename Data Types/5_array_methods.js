// delete
{
  const arr = [1, 2, 3, 4];
  delete arr[1];
  console.log(arr); // [1, empty, 3, 4]
  console.log(arr.length); // 4
  console.log(arr[1]); // undefined

  // That is natural, because delete obj.key removes a value by the key.
}

// splice - swiss army knife for arrays.
// arr.splice(start, [, deleteCount, elem1, elem2, ..., elemN])
// return the array of removed elements.

{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1); // [1]
  console.log(arr);
}
{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 1); // [1, 3, 4, 5]
  console.log(arr);
}
{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(0, 3, ...[1, 1, 1]);
  console.log(arr); // [1, 1, 1, 4, 5]
}
{
  const arr = [1, 2];
  arr.splice(2, 0, ...[3, 4]);
  console.log(arr);
}
{
  const arr = [1, 2, 5];
  arr.splice(-1, 0, ...[3, 4]);
  console.log(arr);
}

// slice
// arr.slice([start], [end])
// returns a new array copying to it all items from index start to end.

{
  const arr = [1, 2, 3, 4, 5];
  const arr1 = arr.slice(0, 2); // [1, 2]
  console.log(arr1);
}

// Concat
{
  const arr = [1, 2];
  console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
}

// Iterate: forEach
{
  const arr = [1, 2, 3];
  let sum = 0;
  arr.forEach(function (item, index, array) {
    sum += item;
  });
  console.log(sum);
}

// Searching in Array
{
  let arr = [1, 0, false];

  console.log(arr.indexOf(0)); // 1
  console.log(arr.indexOf(false)); // 2
  console.log(arr.indexOf(null)); // -1

  console.log(arr.includes(1)); // true
}
// use includes instead of indexOf
{
  const arr = [NaN];
  console.log(arr.indexOf(NaN)); // -1 (wrong, should be 0)
  console.log(arr.includes(NaN)); // true (correct)
}

// sort
{
  let arr = [1, 2, 15];

  // the method reorders the content of arr
  arr.sort();

  console.log(arr); // 1, 15, 2
  // The items are sorted as strings by default.
  function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }

  [1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
  });
  // Actually, a comparison function is only required to return a
  // positive number to say “greater” and a negative number to say “less”.

  //That allows to write shorter functions:
  arr.sort((a, b) => a - b);
}

// reverse

{
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();

  console.log(arr); // 5,4,3,2,1
}

// split() / join()

// Array.isArray
{
  console.log(typeof {}); // object
  console.log(typeof []); // object
  console.log(Array.isArray({})); // false
  console.log(Array.isArray([])); // true
}

// thisArg
{
  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    },
  };

  let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

  // find users, for who army.canJoin returns true
  let soldiers = users.filter(army.canJoin, army);

  console.log(soldiers.length); // 2
  console.log(soldiers[0].age); // 20
  console.log(soldiers[1].age); // 23
}
