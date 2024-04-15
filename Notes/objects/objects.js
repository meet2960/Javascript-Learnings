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
let delObj = {
  prop1: "value1",
  prop2: "value2",
};
console.log("delObj", delObj);
delete delObj.prop2; // it will delete whole property with its value , and delete always return true
console.log("delObj", delObj);

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
let simpleFunObj = {
  name: "JavaScript",
  getName: function () {
    console.log(`Person name in Simple Function ${this.name}`);
    return this.name;
  },
};
console.log(`Returned From Normal Function ${simpleFunObj.getName()}`);

// * Using Arrow function with this, will always refer to window obj or the top global scope, not the person object
let arrowFunObj = {
  name: "John",
  getName: () => {
    console.log(`Person Name in Arrow Function is ${this.name}`);
    return this.name;
  },
};
console.log("Returned From Arrow This", arrowFunObj.getName()); // undefined

// * Iteration on Object
let iterationObj = {
  company: "BMW",
  model: "5 Series",
  color: "Black",
};
console.log("Car object is : ", iterationObj);
// ? To Iterate on this object, we can use for in loop
for (let key in iterationObj) {
  console.log("Key : ", key); // Get all the key
  console.log("Value : ", iterationObj[key]); //  Get all the values
}

// * If We want to add an Symbol to our Obj, we can do by this syntax :-
const mySymbol = Symbol("Key1");
const newSymObj = {
  name: "Symbol Object Addition ",
  [mySymbol]: "mySymbolKey1",
};
console.log("newSymObj", newSymObj);

// * Merging Objects or Combine Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2); // This gurantees that the final result will be only object, so we have to use {} in assign function  , not used this method mostly
console.log("Combined using Assign", obj3);
const combinedObj = { ...obj1, ...obj2 }; // used widley in production
console.log("Combined using Spread", combinedObj);

// * Create object using constructor (also called singleton object)
const twitterUserObj = new Object();
twitterUserObj.id = 111;
twitterUserObj.name = "Constructor Object";
twitterUserObj.isLoggedIn = false;
console.log("twitterUserObj", twitterUserObj);

console.log("Keys", Object.keys(twitterUserObj)); // Returns all keys in form of array

console.log("Values", Object.values(twitterUserObj)); // Returns all values in form of array

console.log("Entries", Object.entries(twitterUserObj)); // Returns whole object as array and key and value as an array to

console.log("Check Property", twitterUserObj.hasOwnProperty("isUser")); // Returns true if property exist inside object and return false if property doesn't exist inside object

// * Object Creation methods
// const myNewObject = Object.create()
const newObject = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orders: function () {
    console.log("this is function inside object, which will not be iterated");
  },
};
console.log(Object.getOwnPropertyDescriptor(newObject, "name"));
Object.defineProperty(newObject, "name", {
  writable: false,
  enumerable: false,
});
Object.defineProperties;
// ? Using the function we can change the values of getOwnPropertyDescriptio values like writeable, enumerable, configurable values by our own values.

console.log("After", Object.getOwnPropertyDescriptor(newObject, "name"));

for (let [key, value] of Object.entries(newObject)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// ? The above loop won't print name proeprty and its value as its enumerable is set to false. To set all the properties false, we have define all the properties of obejct with defineProperty or for mulriple use defineProperties to see the new changes.
