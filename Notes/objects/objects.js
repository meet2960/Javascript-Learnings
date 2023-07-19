// * Objects

let carObj = {
  company: "BMW",
  model: "5 Series",
  color: "Black",
};
console.log("Car object is : ", carObj);

// * Accessing Object Properties
console.log("Company", carObj["company"]); // Pass key as a string
console.log("Model", carObj.model); // Most common and easy to use

// * Modify Object Properties values
carObj.color = "white";
carObj["model"] = "7 Series";

console.log("New obj", carObj);

// * Delete any properties of object
let newObj = {
  prop1: "value1",
  prop2: "value2",
};
console.log("NewObj", newObj);
delete newObj.prop2; // it will delete whole property with its value // delete always return true
console.log("NewObj", newObj);

// * Object with methods,
let personObj = {
  name: "JavaScript",
  ageCalculator: function (birthYear = 2000) {
    let age = 2023 - birthYear;
    return age;
  },
};
console.log(`Current age is ${personObj.ageCalculator()}`);

// * This keyword
let personThisObj = {
  name: "JavaScript",
  getName: function () {
    // console.log(`Hello ${name} Welcome to Party !!!`);
    console.log(`Hello ${this.name} Welcome to Party !!!`);
    return this.name;
  },
};
console.log(`Access Name ${personThisObj.getName()}`);

// * Using Arrow function with this, will always refer to window obj, not the person object
let myPerson = {
  name: "John",
  getName: () => {
    console.log(`Person Name is ${this.name}`);
    return this.name;
  },
};
myPerson.getName();

// * Iteration on Object
let newCarObj = {
  company: "BMW",
  model: "5 Series",
  color: "Black",
};
console.log("Car object is : ", newCarObj);
// ? To Iterate on this object, we can use for in loop
for (let key in newCarObj) {
  console.log("Key : ", key); // We get all the key
  console.log("Value : ", newCarObj[key]); // we get all the values
}
