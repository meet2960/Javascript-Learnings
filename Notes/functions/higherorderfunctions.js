// ! Higher order function :- Passing function as an Argument inside another function

// * Example 1
let upperCase = function (str) {
  return str.toUpperCase();
};
let loewrCase = function (str) {
  return str.toLowerCase();
};
let transformer = function (str, fun) {
  return fun(str);
};
console.log(transformer("hello world", upperCase));
console.log(transformer("JAVASCRIPT", loewrCase));

// * Example 2
let displayUser = function (msg) {
  return function (name) {
    console.log(`${msg}${name}`);
    return true;
  };
};
displayUser("How are you? ")("Harry");
