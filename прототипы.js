// // Prototypes

// {
//   const person = {
//     name: "Aleg",
//     age: 13,
//     greet: function () {
//       console.log("Greet!");
//     },
//   };

//   // console.log(person.sayHello());
//   console.log(person.toString());
// }

// {
//   const person = new Object({
//     name: "Aleg",
//     age: 13,
//     greet: function () {
//       console.log("Greet!");
//     },
//   });

//   Object.prototype.sayHello = function () {
//     console.log("Hello!");
//   };
//   Object.assign(person, { gg: 3 });
//   console.log(person);
// }

// const num = new Number(43);
// console.log(num.__proto__);

// Promise
console.log("Request data...");

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       reject(data);
//     }, 2000);
//   });
// })
// .then((clientData) => {
//   console.log("Data received", clientData);
// })
// .catch((err) => console.log("error: ", err))
// .finally(() => {
//   console.log('finally')
// })

// const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// Promise.all([sleep(2000), sleep(3000)])
// .then(() => {
//   console.log('All promises')
// })

const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms));
delay(2000).then(() => {
  console.log("2 sec");
});

const url = "https://jsonplaceholder.typicode.com/todos/1";

// function fetchTodos() {
//   console.log("Fetch todo started...");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((res) => {
//       return res.json();
//     });
// }

// fetchTodos()
//   .then((data) => {
//     console.log("Data :", { ...data });
//   })
//   .catch((e) => console.error(e));

async function fetchAsyncTodos() {
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data: ", data);
  } catch (e) {
    console.error(e); 
  } finally {
    console.log('finally')
  }
}

fetchAsyncTodos().then(() => console.log('done'))

/// async await is a syntactic sugar for promises