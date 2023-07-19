// * Loose Equality (==) Vs Strict Equality (===)

// ? Loose Equality (==)
// * In this comparision, it Doesn't check its type, only the values are being compared
let age = 22; //
console.log(age == "22"); // true, as it is Loose Equality

// ? Strict Equality
// * In this comaprision, it will check its value and its datatype
console.log(age === "22"); // false, as it is Strict Equality

// ? Comparison Operator Always Return Boolean Value
// == , ===. !==, !=
// >, >=
// <, <=

// * Some Examples
// ? String and Number
console.log("2" > 1); // true, 2 converted to number
console.log("02" > 1); // true, 2 converted to number

// ? Null Comparision
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true, null converted to 0

// ? Undefined Comparision
console.log(undefined == 0); // false, will give false for every comparision
