// * Datatypes in JavaScript

// ? Total 7 types

// ? 1 String :- Store any type of string.
// Example - "hello world", "27"
let newStr = "Hello World";
console.log("String", newStr);
console.log(typeof newStr); // string

// ? 2 Number :- Example - 34, 25.26, 228
let newNumber = 35;
console.log("Number", newNumber);
console.log(typeof newNumber); // number

// ? 3 Boolean :- true/false
let isValid = true;
console.log("Boolean", isValid);
console.log(typeof isValid);

// ? 4 Null :- Intentionally absence of value/ Standalone value
let score = null;
console.log("Null", score);
console.log(typeof score); // object

// ? 5 Undefined :- Created automatically if we declare any variable without any initialization
let points;
console.log("Undefined", points);
console.log(typeof points); // undefined

// ? 6 Object :- it is complex datastructure
// * 1 array
const carsArray = ["Saab", "Volvo", "BMW"];
console.log("Array", carsArray);
console.log(typeof carsArray); // object

// * 2 object
const personObj = {
  firstName: "Rahul",
  lastName: "Sharma",
  age: 50,
  eyeColor: "blue",
};
console.log("Object", personObj);
console.log(typeof personObj); // object

// * 3 Functions
const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof myFunction); // function

// ? 7 Symbols :- Find uniqueness
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false, as both are unique

// ! When adding a number and a string, JavaScript will treat the number as a string.
// ! JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let bigIntValue = BigInt("123456789012345678901234567890");

// ! Datatype Conversion
// ?  For Number Conversion
/* let score = "33";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33 */

/* let score = "33abc";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN */

/* let score = null;
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 0 */

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 / false => 0

// ? For Boolean Conversion
/* let isLoggedIn = 1;
let booleanisloggedIn = Boolean(isLoggedIn);
console.log(booleanisloggedIn); // true
console.log(typeof booleanisloggedIn); // boolean */

// 1 => true / 0 => false
// "" => false
// "hello" => true

// ? For String
/* let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string */

// 33 => "33"

// ******************** Operations ********************

/* let value = 3;
let negValue = -value;
console.log(negValue); // -3 */

// ? Basic Operations
/* console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 */

/* console.log(+true); // 1
console.log(+""); // 0 */

/* let counter = 100;
counter++; // post
console.log(counter); // 101
--counter; // pre
console.log(counter); */
