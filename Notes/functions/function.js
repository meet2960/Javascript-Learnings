// * Functions in JavaScript
// * ------------------------
// It is Simple a piece of code which we can use in our program as many times as we want.\
// It is just like a variable holding some piece of code

// * Function Declaration
function nameOfFunction() {
  console.log("Inside Name Function");
}
// * Function Call
nameOfFunction();

// * Function Expression
let result = function () {
  // also called anonymous function
  console.log("This is an example of function expression");
};
// * Calling this function
result();

// * Passing values (Arguments and Parameters)
let invitation = function (name = "defaultValue") {
  // Here name is called parameters, it is local variable, not accessible outside the function
  console.log(`Welcome! ${name} You are Invited`);
};
invitation("Harry"); // Here inside brackets are called arguments, we can pass as many arguments as we want
invitation("Lary");
invitation(); // Here the defaultValue will be taken as a parameters values

// * Returning value from function
let ageCalculation = function (currentYear = 2023, birthYear) {
  let age = currentYear - birthYear;
  console.log(`Your Current age is : ${age}`);
  return age;
  // console.log("After return statement no code will be execuated");
};
let returnedResult = ageCalculation(2023, 2002);
console.log("Returned Age is", returnedResult);

// ! Arrow Function
let exampleArrowFunction = (name) => {
  console.log(`Welcome! ${name} You are Invited`);
  return name;
};
exampleArrowFunction("harry");
console.log(exampleArrowFunction("meet"));

// ! Higher order function :- Passing function as an Argument inside another function
// * Method 1
let upperCase = function (str) {
  return str.toUpperCase();
};
let loewrCase = function (str) {
  return str.toLowerCase();
};
let transformer = function (str, fun) {
  return fun(str);
};
console.log(transformer("hello world", upperCase));
console.log(transformer("JAVASCRIPT", loewrCase));

// * Method 2
let displayUser = function (msg) {
  return function (name) {
    console.log(`${msg}${name}`);
    return true;
  };
};
displayUser("How are you? ")("Harry");

// ! IIFE
(function (name) {
  console.log("This function will never execuate again");
})("IIFE");
