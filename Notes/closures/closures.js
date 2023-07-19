function outerFunction(carName) {
  let name = "John Wick";
  function innerFunction() {
    return `Hi ${name} you car is ${carName}`;
  }
  return innerFunction;
}
const innerFunDefination = outerFunction("mustang");
console.log(innerFunDefination); // returns the function definition
console.log(innerFunDefination()); // returns the function value
console.log("Calling Display Method Outside Directly", outerFunction()()); // using this syntax also, will get same result

// Another Example
let counter = function () {
  let count = 0;
  let innerCounter = function () {
    return (count += 1);
  };
  return innerCounter;
};

let innerCount = counter();
console.log(innerCount()); // 1
console.log(innerCount()); // 2
console.log(innerCount()); // 3
