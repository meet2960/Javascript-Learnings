// Simple Method
exports.diff = (a, b) => {
  return a - b;
};

exports.multi = (a, b) => {
  return a * b;
};

// Or Export whole file using this Syntax
/* const add = (a, b) => {
  return a + b;
};
module.exports = add; */

// We cannot use this type of export without adding type:module in package.json

/* const division = (a, b) => {
  return a / b;
};
export { division }; */
