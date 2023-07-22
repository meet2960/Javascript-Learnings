// * Arrays
// * ------

const newArray = [10, 20, 30, 40, 50];
// ? Array can contain any type of value, like number or string anything.

const languagesArray = ["Javascript", "C", "Java", "Python"];

// ! Array Common Properties
// ! -----------------------

// * Reading of Array value
console.log("Value are Index 2", newArray[2]);

// * Length
console.log(newArray.length);

// ! Iteration on Array
// ! -------------------
// ? Simple (For) loop for iteration over array
for (let i = 0; i < newArray.length; i++) {
  console.log("Value", newArray[i]);
}

// ? (For in) : used to get index's of the elements of array
for (let index in newArray) {
  console.log("Index", index); // Get all Index
  console.log(newArray[index]); // Get all Values
}

// ? (For of) : used to get the elements value of the array
for (let value of newArray) {
  console.log("Elements of Array are : ", value);
}

// ? For Each in array in Js
// ? For Each take one call back function with three parameter, one is elements of array, second index, third is array itself

newArray.forEach((items, index, array) => {
  console.log("Index : " + index + " Value : " + items);
});
