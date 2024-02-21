// Map
// collection of keyed values.
// new Set([[key, value],[key1, value]]<--iterable)
{
  const map = new Map();

  map.set("name", "John");
  map.set("age", 30);
  map.set("b", 1);
  map.set("a", 1);
  map.set("b", 2);

  for (val of map.keys()) {1
    console.log(val);
  }

  for (val of map.values()) {
    console.log(val);
  }

  for (val of map.entries()) {
    console.log(val);
  }

  for (val of map) {
    console.log(val[0]); // key
    console.log(val[1]); // value
  }

  // iteration goes in the same order as the values
  // were insterted. It does not sort like object.
}
// object as a key
{
  const map = new Map();

  const obj = { name: "John" };

  map.set(obj, "Secret value");

  console.log(map.get(obj));
  console.log(map.entries());
}

// Map initialization
{
  // [
  //   [key, value]
  // ]
  const map = new Map([
    [1, "number"],
    ["1", "String"],
    [true, "boolean"],
  ]); // we can pass an array ( or another iterable ) with key-value pairs

  console.log(map.get(1));
  console.log(map.get("1"));
  console.log(map.get(true));
}
{
  let obj = {
    1: "number",
    name: "John",
    age: 30,
  };

  const map = new Map(Object.entries(obj));

  console.log(map.get("name"));
  console.log(map.get("age"));
  console.log(map.get("1"));
  // reverse
  // Object.fromEntries - to get a plain object from a map
  let newObj = Object.fromEntries(map.entries());

  console.log(newObj);
}

// Set
// collection of unique values without keys
// new Set([iterable])
{
  const set = new Set();
}
