// ! setInterval in JavaScript
// setInterval takes mainly 3 arguments, callbackFunction, delayDuration and List of arguments to pass
function greeting(name) {
  console.log(`Using ${name} Function`);
}
myInterval = setInterval(greeting, 1000, "Simple");
clearInterval(myInterval);
/* setTimeout(() => {
  clearInterval(myInterval);
}, 5000); */

/* // ? Find Error
const message = {
  name: "John",
  greet: function () {
    setInterval(function () {
      console.log("Hey " + this.name + ", How are you");
    }, 1000);
  },
};
message.greet(); */
