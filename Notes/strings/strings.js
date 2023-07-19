// * String and Its Method with Example

let firstString = "Meet";
let secondString = "Ghelani";
console.log(firstString, secondString);

// ! String Concatination
// ! --------------------
let firstName = "Tom";
let lastName = "Cruise";

// * 1 Using + operator
let fullNameOne = firstName + lastName;
console.log(fullNameOne);

// * 2 Using Template Literals
// ? Widely used now a days, and it is more readable
let fullNameTwo = `My fullNameTwo is ${firstName} ${lastName}`;
console.log(fullNameTwo);

// * 3 Using Concat method
let fullNameThree = firstName.concat(" ", lastName);
console.log("Concated String", fullNameThree);

// ! String are Immutable
let str = "hello";
str[0] = "a";
str[1] = "b";
console.log(str);
// ? By This we can understand that string are immutable, i.e we cannot change it value

// ! String Constructor method
let numStr = 34;
let convertedStr = String(numStr);
console.log("String value is", convertedStr, "Type is : ", typeof convertedStr);

// ! String Rules
// ? If there is one empty string, it is considered as false, and if there is some content inside string, it is considered as true
let nameStr = "hello";
let booleanValueOfName = Boolean(nameStr);
console.log(booleanValueOfName);
