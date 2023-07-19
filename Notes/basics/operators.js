// * Logical Operators

// * AND (&&) , OR (||), NOT (!)

// ? Priorities of Logical Operator
// 1) Not // will be evaluted first
// 2) And, Or from Left to Right
// 3) Parenthesis also works here

// ? Example
let result = (true && true) || (false && !false);
console.log(result);

// * Steps of evalution of this statement

// 1) let result = (true && true) || (false && !false); // last false will become true

// 2) let result = (true && true) || (false && true); // now from left to right, true && true will be evaluted

// 3) let result = true || false && true; // now true || false will be evaluted as left to right

// 4) let result = true && true; // now true && true will be evaluted

// 5) true //final it is true, so result will be true
