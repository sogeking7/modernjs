{
  // let timerId = setTimeout(function tick() {
  //   timerId = setTimeout(tick, 2000);
  //   console.log("tick");
  // }, 2000);
}

// or

{
  // let timerId = setInterval(() => console.log("tick"), 2000);
}

{
  // let delay = 5000;
  // let timerId = setTimeout(function request() {
  //   // ...send request...
  //   // if (request failed due to server overload) {
  //   // increase the interval to the next run
  //   delay *= 2;
  //   // }
  //   timerId = setTimeout(request, delay);
  // }, delay);
}

function func(i) {
  let f =1000000000;
  while(f--) {}
  console.log(i);
}
{
  let i = 1;
  let timeId = setInterval(() => {
    func(i++);
  }, 1000);
  // it is possible that func() execution be longer than we expected and takes more than 1000ms
  // in this case the engine wait fro func() to complete, then checks the scheduler and if the time is up, run it again immediately.
  // In edge case, if the function always executes longer than delay, then the calls will happen  without a pause.
}

{
  // let i = 1;
  // let timeId = setTimeout(function run() {
  //   func(i++);
  //   timeId = setTimeout(run, 1000);
  // }, 1000);
}
