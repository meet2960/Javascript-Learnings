// * Math.PI is a constant, ans we cannot changes its value. Even if we try to change its value, we won't be able to change it.
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// ? To get object's property more description
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);
// ? This will provides us a object with 4 properties as : value, writeable, enumerable, configurable

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
