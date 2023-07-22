const newObj = {
  average: (a, b) => {
    console.log((a + b) / 2);
  },
  percentage: (a, b) => {
    console.log((a / b) * 100);
  },
};

module.exports = newObj;

const anotherObj = {
  name: "BMW",
  model: "5 Series",
};
// exports.data = anotherObj; //
// exports.data = { newObj, anotherObj }; // Export multiple values together
// To import above kind of export, desctructure the data and then we get all the properties from it
exports.thirdObj = {
  name: "Direct Exports",
};
