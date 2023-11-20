// ! Create a new method which will remove all the white spaces and then return its length. We can do this with trim and then length, but we will create our own methd to do this stuff manual.

// ! Method name will be (trueLength())
let myName = "Meet Ghelani            ";
// console.log(myName.trueLength);

let anotherUserName = "JavaScript       Python";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is : ${this.trim().length}`);
  return this.trim().length;
};
anotherUserName.trueLength();
let newLength = "meet     ".trueLength();
console.log("newLength", newLength);

// ! Example to understand The prototypes with example
let myHerosArray = ["thor", "spiderman"];
let heroPowers = {
  thor: "hammer",
  spiderman: "sling",
  getSpidyPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};
// ? In Below code, we have added new property inside Object level, this means now every object, array etc have access to this customProperty
Object.prototype.customProperty = function () {
  console.log("Meet is Present in all Object");
};

// ? Here we have only given this new property to Array only,which means now only Array has access to this proerty, but object, string have no access
Array.prototype.customArrayProperty = function () {
  console.log("Array has now customArrayProperty");
};

// heroPowers.customProperty();
// myHerosArray.customProperty();
// myHerosArray.customArrayProperty();
// heroPowers.customArrayProperty(); // throw an error as, it has no access

// * Inheritance in JavaScript

const User = {
  name: "Demo User",
  email: "demo@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
// ? here __proto__ is a by default injected property in object, which means we can borrow or provide one obejct properties to another object
// ? Here we have used this with Teacher has now access to all properties of user
// ? This is outdated
// console.log("Teacher", Teacher);

// Modern Access
Object.setPrototypeOf(TeachingSupport, Teacher);
// ? This is modern method and behind the seen it works like __proto__ only. It takes two parameters, (from object) and (to object). From which object To which object we have to assign properties

// ! Example to understand The prototypes with example
