// BIND

{
  function hello() {
    console.log("Hello", this);
    // this -> window object
  }
  // console.log(hello());
}

{
  const person = {
    name: "Vola",
    age: 13,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
      console.group(`${this.name} info:`);
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Job is ${job}`);
      console.log(`Phone is ${phone}`);
      console.groupEnd();
    },
  };

  const lena = {
    name: "Elena",
    age: 23,
  };

  // bind - передаем контекст

  person.logInfo.bind(lena, "Frontend", "8-999-123-12-23")();
  person.logInfo.call(lena, "Frontend", "8-999-123-12-23");
  person.logInfo.apply(lena, ["Frontend", "8-999-123-12-23"]);

  // console.log(person.sayHello());
  // console.log(person.sayHelloWindow());
}

// CAll

{
  function ee(...args) {
    console.log(arguments);
  }
  console.log(ee(1, 2, 3));
}
