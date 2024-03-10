// As we know from the chapter Garbage collection

// Javascript engine keeps a value in memory while it is
// "reachable" and can potentially be used.

// WeakMap
// 1) difference between Map and WeakMap is that keys must be objects,
// not primitive values.
// If we use an object as a key in it , and there are not other references
// to that object, it will be removed from memory (and from the map) automatically

{
  const map = new Map();
  let jhon = { name: "John" };
  map.set(jhon, "I am Jhon");
  jhon = null;
  console.log(map.entries());
  // objecte Jhon still exits in map.
}

{
  const weakMap = new WeakMap();
  let jhon = { name: "John" };
  weakMap.set(jhon, "I am Jhon");
  jhon = null;
  console.log(weakMap.get(jhon)); // undefined
  // jhon is removed from memory!
}

// Use case of WeakMap
// 1) caching - we can store cache "results" from a function, so that
// future calls on the same object can reuse it.

// 1 case, using Map
{
  let cache = new Map();
  function someFunction(obj) {
    if (!cache.has(obj)) {
      let result = obj.name + " " + obj.age;
      cache.set(obj, result);
      return result;
    }
    return cache.get(obj);
  }

  let obj = { name: "John", age: 30 };

  let result1 = someFunction(obj);
  // ... some proessing
  let result2 = someFunction(obj);
  // now later, when the object is not needed any more.
  obj = null;
  console.log(cache.size); // 1
  // the object is still in the cache, taking memory!

  // --------------------------------------------------------------------//

  cache = new WeakMap();

  obj = { name: "John", age: 30 };

  result1 = someFunction(obj);
  // ... some proessing
  result2 = someFunction(obj);
  // now later, when the object is not needed any more.
  obj = null;

  // Can't get cache.size , as it's a WeakMap
  // but it is 0 or soon be 0
  // When obj gets garbage collected, the cached data
  // will be removed as well.
}
