// * Destructuring the Arrays

// Example 1
let items = [2, 3, 5, 6];
const [a, b, c, d] = items;
console.log(`a`, a);
console.log(`b`, b);
console.log(`c`, c);
console.log(`d`, d);

// Example 2
// ? Nested Array
const numsArray = [2, 3, [6, 9]];
const [e, f, [g, h]] = numsArray;
console.log(`e`, e);
console.log(`f`, f);
console.log(`g`, g);
console.log(`h`, h);

// * Destructuring Object
const hotel = {
  resturantName: "Taj",
  hotelLocation: "Street 10, Mumbai",
  categories: ["Chinease", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
  },
};
// ? give same name as object properties
const { resturantName, hotelLocation, mainMenu } = hotel;
console.log(`Name`, resturantName);
console.log(`Location`, hotelLocation);
console.log(`mainMenu`, mainMenu);

// ? Set we can set customized name to object Properties
// ? So, new variables names of resturantName is: hotelName, and mainMenu name is : Menu
// ? Left Side original property name, right side customized variable name
const { resturantName: hotelName, mainMenu: Menu } = hotel;
console.log(`Hotel Name`, hotelName);
console.log(`Menu Name`, Menu);
const { openingHours } = hotel;
console.log("opening Hours", openingHours);

// * Again destructuring from previous result
const {
  sunday: { open, close },
  monday,
} = openingHours;
// console.log("Sunday", sunday);
console.log("Monday", monday);
console.log("Sunday open", open);
console.log("Sunday close", close);
