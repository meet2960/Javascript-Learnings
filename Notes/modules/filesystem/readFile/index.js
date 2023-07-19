const fs = require("fs");
// async function
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
console.log("This will print, as above function is async function");

// Sync function
const a = fs.readFileSync("./sample.txt", "utf-8");
console.log(a);
console.log("This will wait for above function to complete");
