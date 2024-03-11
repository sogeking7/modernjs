// global object
// in a browser is window
// in a node js is global

// globalThis

// alert('Hello')
// window.alert('Hello');
// same thing

// In a browser global functions and vairables declare with 'var'
// become the property of the global object
{
  var letG = 5;
  window.currentUser = {
    name: "John"
  };  
  console.log(window.letG); // 5
  console.log(window.currentUser) // must work 
  // we should store values in the global object only if they're truly global for our project.
  // And keep their number at minimum.
}

// The code design where a function gets input variables and produces
// certaint outcome is clearer, and easy to test,, than if it uses outer or global variables


{
  // using polyfills
  // we can add functionst that are not supported, in really old browsers for example
  // if (!window.Promise) {
  // custom implementation
  // window.Promise = ...
  // }
}
