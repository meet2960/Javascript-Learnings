// ! setTimeOut in JavaScript

// setTimeout is available in browser's window object. It is not available in nodejs.

// SetTimeout function will execute a function inside it after given time in the function, it will only run after the time is completed.

// setTimeout accepts basic 3 parameters, callbackfunction, delayDuration and list of arguments seperaed by comma

// To Clear a timeout set by using setTimeout, we can use the clearTimeout function, which will clear the timout explicitly.

// We have to pass a reference to the clear timeout function.

// The setTimeout method returns a id

function withoutClearTimeout(name) {
  console.log(`Using ${name} Function`);
}
setTimeout(withoutClearTimeout, 2000, "Simple");
setTimeout(
  (name) => {
    console.log(`Using ${name} Function`);
  },
  4000,
  "Arrow"
);

// Example to show how clearTimeout Works.
function withClearTimeout(name) {
  console.log(`Using ${name} Function`);
}
setTimeout(withClearTimeout, 2000, "Simple"); // 2000ms, simple is argument
setTimeout(
  (name) => {
    console.log(`Using ${name} Function`);
  },
  4000,
  "Arrow"
);
myTimeout = setTimeout(withClearTimeout, 2000, "cleartimeout");
clearTimeout(myTimeout);
