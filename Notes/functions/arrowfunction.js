// * Arrow Functions

let exampleArrowFunction = (name) => {
  // console.log(`Welcome! ${name} You are Invited`);
  return name;
};
const returnedName = exampleArrowFunction("harry");
// console.log("Name", returnedName);
// console.log(exampleArrowFunction("meet"));

const newArrowFunction = () => {
  let username = "javascript";
  console.log(this); // {}
};
newArrowFunction();

// * Implicit Return, no need to write curly braces and return keyword
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));
