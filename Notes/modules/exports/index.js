// ! Total 3 types of Modules
// ? File Based
// ? Build In
// ? Third Party

// * File Based Modules

const exportedObj = require("./objexport");
const lib = require("./functionexports");
console.log("lib imported", lib);
exportedObj.average(10, 20);
exportedObj.percentage(50, 40);
console.log("Diff", lib.diff(10, 5)); // using direct exports
console.log("Multi", lib.multi(10, 5));
// console.log("Addition", add(10, 10)); // Function exported using module.exports
