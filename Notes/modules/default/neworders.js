// * Default Export/Import

// ? We use default export only one time in a file to export anything.
let order = function (buyer, item) {
  console.log(`${buyer} ordered this ${item}`);
};

let laptopPrice = 50000;
let quantity = 5;

export default order; // default export the function
// * We can also write like this
/* export default function (buyer, item) {
  console.log(`${buyer} ordered this ${item}`);
} */
