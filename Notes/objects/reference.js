// * Pass by Reference and Pass by Value

// ! Pass by Reference
let passByRefObj = {
  firstName: "Carlos",
  lastName: "Paul",
  country: "USA",
};
let copyRefObj = passByRefObj;
passByRefObj.city = "NewYork";
console.log("Original Object", passByRefObj);
console.log("Copy Object", copyRefObj);
// ? By this it will add city property to both the object as they are pointing at same memory location.

// ! Pass by Value
let passByValueObj = {
  firstName: "Carlos",
  lastName: "Paul",
  country: "USA",
};
let copyValueObj = { ...passByValueObj };
copyValueObj.city = "NewYork";
console.log("Original Object", passByValueObj);
console.log("Copy Object", copyValueObj);
