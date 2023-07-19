// OOP in JS

// ! Constructor Function Example
/* // Here Car is Constructor Function
let Car = function (color, model, company) {
  //  properties
  this.color = color;
  this.model = model;
  this.carCompany = company; // we can give any name to property, but not recommeded
  this.login = function () {
    console.log("Inside Login Method");
  };
};
let instanceOfCar = new Car("Red", 2023, "Honda");
let instanceOfAnotherCar = new Car("Blue", 2020);
console.log(instanceOfCar);
console.log(instanceOfAnotherCar);
console.log(instanceOfCar instanceof Car); // Returns true if it is instance of corresponding constructor */

// ! Prototypes
// ? Each object created by "constructor" function have an access to all "methods" present inside that "constructor" prototypes
// ? Simple, it means each object created using this Car constructor will have all the methods or properties defined using prototype. They will not be inside it, but accessible
/* let Car = function (color, model, company) {
  //  properties
  this.color = color;
  this.model = model;
};
Car.prototype.startEngine = function () {
  console.log("This is Start Engine Method");
};
// We can also set "properties" to prototype
Car.prototype.company = "Honda"; //
let instanceOfCar = new Car("Red", 2023, "Honda");
// instanceOfCar.startEngine(); // Calling startEngine Method
console.log(instanceOfCar.__proto__); // Gives all prototype list of that constructor or same as below
console.log(Car.prototype); */

// ! ES6 Classes
// ? They implement prtotypal inheritance behind the scenes
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("This is StartEngine Method");
  }
}
// ? This will work same, and attach this method to prototype of the object
Car.prototype.breakMethod = function () {
  console.log("Inside Break Method of Car");
};

let hondaCar = new Car("Red", 2002);
console.log(hondaCar);
hondaCar.startEngine(); // Calling inside method
// ? Here no need to write prototype for methods, it will automatically attach it to ptototypes bu default

// ? Class are not hoisted
// ? Classes are first class citizens (Pass as an argument or return)
// ? Classes are execute in strict mode
