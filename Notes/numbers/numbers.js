// * Numbers
// * -------
// ! Simple Example
let a = 3.14;
let b = 5;
let c = a + b;
console.log("Addition", c); // 8.14

// ! JavaScript will try to convert strings to numbers in all numeric operations, except + operator, in that case it will concate both the string and return new concated string
let d = "100";
let e = "10";
let f = d / e;
console.log("f", f); // 10

// ! Precendency Example
let points = 50;
let calculate = points * 2 + 4 * 3 - ((8 / 2) % 4);
console.log(calculate); // 112
// Priority and Precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * / % (From Left to Right)
// 4 + - (From Left to Right)

// ! Concatination of Number to String
let newString = "hello";
let newResult = newString + 22;
console.log("Number + String : ", newResult); // hello22
// ? Here number 22 will be converted to string by js itself

// ! NaN - Not a Number
// ? NaN is a JavaScript reserved word indicating that a number is not a legal number.
// ? Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
let x = 10 / "hello";
console.log(x); // NaN
let y = 100 / "10";
console.log(y); // 10
// ? We can use isNan(value) function to check if it Nan or not

// ! Number Method
const score = 400;
console.log(score); // 400
const balance = new Number(200); // Give access to prototypes
console.log(balance); // [Number: 200]
console.log(balance.toString()); // now we can use all string methods also

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 gives in indian standard of numbers

let numStr = "26";
let numberStr = Number(numStr);
console.log("Number String", numberStr); // 26
let nameStr = "hello";
let convertStr = Number(nameStr);
console.log("Name String", convertStr); // NaN
// ? We can convert number string to number using number Contsructor, but we cannot convert string to number, it will return NaN for that

// ! Number Rules
let age = 0;
let booleanValueOfAge = Boolean(age);
console.log(booleanValueOfAge); // false
// ? If the value of number is greater than 0, it is considered as true, and if the value number is 0 or less than, it is considered as false

// ************* MATH Object *************
console.log(Math);
console.log(Math.abs(-5)); // 5, change Negative to Positive
console.log(Math.round(4.6)); // 5, round off based on value
console.log(Math.ceil(4.2)); // 5, rounds to highest integer based on decimal
console.log(Math.floor(4.8)); // 4, rounds to lowest integer based on decimal
console.log(Math.min(4, 3, 6, 8)); // 3,
console.log(Math.max(4, 3, 6, 8)); // 8

// * Math Random
// ? Always return value from 0 to 1
console.log(Math.random() * 10 + 1); //  to shift one digit left, so we get one decimal value and rest as fractions, and +1 so we dont get 0 and can be wrap up with floor or ceil
console.log(Math.floor(Math.random() * 10 + 1)); // 0-10 any value, to floor the value and remove fraction points

// ? To generate Random number from sppecific range, here it will always give us value from 10 to 20 only
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10-20, any random value
