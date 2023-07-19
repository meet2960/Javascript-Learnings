// ! Array Methods in details
// ! -------------------------

const newArray = [10, 20, 30, 40, 50];

// ! Non Mutating Array Methods
// * Join Method
console.log(newArray.join(" "));
// ? Used to Combine Elements of Array into one single string, can be seperated by giving valid parameter in join method. It Will Not mutate the original array

// * IndexOf
console.log("Index of Element 20 ", newArray.indexOf(20));
// ? This will return the index of element which is given as a parameter.
// ? If Specific Element is not present in array, it will give us -1.

// * Concat Array : Here orignial array is not modified
const singleArray = [1, 2, 3, 4, 5];
const doubleArray = [10, 20, 30, 40, 50];
const concatedArray = singleArray.concat(doubleArray);
console.log("Concated Array", concatedArray);

// * Slice() : Used to Extract part of Array
// ? Syntax : Array.slice(startIndex, lastIndex(excluded))
// ? Returns new Array of extracted elements
const slicedArray = newArray.slice(1, 4);
console.log("Original Array", newArray);
console.log("Sliced Array", slicedArray);

// * Splice() : Used to Add new Element into Array, and also remove some elements from that array.
console.log("Array ", newArray);
const splicedArray = newArray.splice(1, 3, 2, 3, 4);
console.log("Modified Array", newArray);
console.log("Deleted Elements Array", splicedArray);

// * at() Method : Returns value at specific index given as a parameter, can be used with string also.
let newIndex = newArray.at(1);
let negativeIndex = newArray.at(-1);
console.log("Value at Index 1 is", newIndex);
console.log("Value at End is", negativeIndex);

// * Map() method : Used to do some task on the array and produce new array from it.
const multipliedArray = newArray.map((elements, index) => elements * 2);
console.log("Multiplied Array", multipliedArray);
// ? Example 2
const salaries = [3000, 5000, 8000, 6000, 9000];
const increasedSalaries = salaries.map((items) => {
  let incrementedAmount = items / 2;
  return items + incrementedAmount;
});
console.log("Incrementd Salary", increasedSalaries);

// * Filter() Method : it will filter elements based on condition and return elements which passes that condition.
const numArray = [50, 10, 40, 20, 30, 80, 60];
const filteredNums = numArray.filter((items) => {
  if (items < 50) {
    return items;
  }
});
console.log("filteredNums", filteredNums);
// ? Example 2
const gifts = [
  "Watch",
  "Rings",
  "Chocolates",
  "Teddy-Bear",
  "Watch",
  "Chocolates",
  "Bands",
  "Rings",
];
let filteredGifts = gifts.filter((items) => {
  if (items == "Watch" || items == "Rings") {
    return items;
  }
});
console.log("FilteredGifts", filteredGifts);

// * Reduce() Methods : Runs some reducer function for each element of array element
// ? Syntax : Array.reduce(function(total,currentValue),initialValue);
// ? It will return single value
const numsArray = [1, 5, 8, 3, 9];
const sum = numsArray.reduce((total, currentvValue) => {
  return total + currentvValue;
}, 0);
console.log("Sum of Number", sum);

// * Find() : Find first element we are finding in array based on some condition.
// ? If element is not found then it will return undefined.
// ? if multiple element satisfies the condition, it will return first element from that.
// ? If we want to found from array of object, use this method only,as it is more convinent.
const arrayNums = [5, , 6, 20, 35, 20, 65, 10, 11];
const findElement = arrayNums.find((items, index) => {
  return items > 20;
});
console.log("FindElement", findElement);

// * Some Method : If any return true if any of the array element pass the test provided to them. Similar to OR operator
const scores = [25, 34, 67, 65, 80, 92];
const someResultScore = scores.some((items) => {
  return items > 50;
});
console.log("Some Method Result", someResultScore);

// * Every Method : it will return true if all the elements pass the test provided to them. Similar to AND Operator.
const newScores = [54, 65, 58, 75, 81, 76];
let everyResult = newScores.every((items) => {
  return items > 50;
});
console.log("Every Method Result", everyResult);

// ! Mutating Array Methods
// * Push(): Add new element to End of the Array
newArray.push(6);
console.log(newArray);
// ? Push method returns length of array after updating the array
let newArrayLength = newArray.push(60, 70, 80);
console.log("After Length", newArrayLength);

// * Pop(): Removes last element from the Array
newArray.pop();
console.log(newArray);
// ? Pop method returns the popped value from the array
let removedElement = newArray.pop();
console.log("After Length", removedElement);

// * Shift(): Removes First element of Array
newArray.shift();
console.log(newArray);
// ? Shift method returns the removed value from first index
let shiftedValue = newArray.shift();
console.log("Updated Array", newArray, "shiftedValue", shiftedValue);
console.log(newArray);

// * Unshift(): Adds new element to the Beginning of Array
newArray.unshift(0);
console.log(newArray);
// ? Unshift method returns the length of new array after updating the array
const unshiftedValue = newArray.unshift(0);
console.log("unshifedValue is : ", unshiftedValue);
console.log(newArray);

// * Reverse(): Reverse elements of array, it will change the original array to, its result is also reversed.
newArray.reverse();
console.log("Reversed Array", newArray);
