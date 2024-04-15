// ! setTimeOut in JavaScript

// ? SetTimeout function will execute a function inside it after given time in the function, it will only run after the time is completed.
// ? setTimeout accepts basic 3 parameters, callbackfunction, delayDuration and list of arguments seperaed by comma.
// ? To Clear a timeout set by using setTimeout, we can use the clearTimeout function, which will clear the timout explicitly.
// ? We have to pass a reference to the clear timeout function.
// ? The setTimeout method returns a id, which we can use to clear the timeout.

// function withoutClearTimeout(name) {
//   console.log(`Using ${name} Function`);
// }
// setTimeout(withoutClearTimeout, 2000, "Simple");
// setTimeout(
//   (name) => {
//     console.log(`Using ${name} Function`);
//   },
//   4000,
//   "Arrow"
// );

// // Example to show how clearTimeout Works.
// function withClearTimeout(name) {
//   console.log(`Using ${name} Function`);
// }
// setTimeout(withClearTimeout, 2000, "Simple"); // 2000ms, simple is argument
// setTimeout(
//   (name) => {
//     console.log(`Using ${name} Function`);
//   },
//   4000,
//   "Arrow"
// );
// myTimeout = setTimeout(withClearTimeout, 2000, "cleartimeout");
// clearTimeout(myTimeout);

// * Interview Question
// * ------------------

// * 1st Question
// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout Called");
// }, 0);
// consol0e.log("End");

// * 2nd Question
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Value of I :-", i);
  }, 1000);
}
