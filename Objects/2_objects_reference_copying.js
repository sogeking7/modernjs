// “shallow copy” (nested objects are copied by reference)
// Object assign can't clone nested objects, it copies the reference
// it only can clone the first level of the object (properties)

// (...) spread operator also shallow copy.

const user = {
  name: "Alex",
  age: 19,
  skills: [
    {
      name: "C++",
      level: "advanced",
    },
    {
      name: "Javascript",
      level: "advanced",
    },
  ],
};

// let userCopy = {};
// Object.assign(userCopy, user);
let userCopy = Object.assign({}, user);
// let userCopyt = {...user}

console.log(user);
console.log(userCopy);
console.log(userCopy === user); // false
console.log(userCopy == user); // false

console.log(user.skills === userCopy.skills); // true
console.log(user.skills == userCopy.skills); // true

// Nested clonning
// to make truly sperate objects, we should use a clnoning loop, (deep cloning)
// or (structured cloning)
// “deep cloning” structuredClone
const clone = structuredClone(user);
console.log(clone.skills === user.skills); // false

user.todo = "Learn JS";
user["random"] = "random";
console.log(user);

// structuredClone fails when coming to functions.
// error
// const ex = structuredClone({ // function () {} could not be cloned
//   f: function () {},
// });
// console.log(ex);

// Use loadash library for deep cloning _.cloneDeep(obj), but not to today's topic.

function cloneObj(src, target) {
  for (let key in src) {
    if (typeof src[key] == "function") {
      let funcString = src[key].toString();

      const args = funcString.slice(
        funcString.indexOf("(") + 1,
        funcString.indexOf(")")
      );
      const argsList = args.split(/,\s*/);
      let funcBody = funcString.slice(funcString.search("{") + 1, -1).trim();

      target[key] = new Function(...argsList, funcBody);

      continue;
    } else if (typeof src[key] == "object" && !!src[key]) {
      /* to exclude null (typrof null == object)*/

      target[key] = Array.isArray(src[key]) ? [] : {};

      cloneObj(src[key], target[key]);
      continue;
    } else {
      target[key] = src[key];
    }
  }
}
