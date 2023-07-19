// ! setTimeOut in JavaScript

// setTimeout accepts basic 3 parameters, callbackfunctio, delayDuration and list of arguments seperaed by comma

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
