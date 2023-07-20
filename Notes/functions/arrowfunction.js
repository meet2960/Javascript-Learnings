// * Arrow Functions

let exampleArrowFunction = (name) => {
  console.log(`Welcome! ${name} You are Invited`);
  return name;
};
const returnedName = exampleArrowFunction("harry");
console.log("Name", returnedName);
console.log(exampleArrowFunction("meet"));
