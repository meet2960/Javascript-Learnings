console.log("Exporting Module");
// * Below Function is called Named Export
export let totalProducts = 2000;
let order = function (buyer, item) {
  // while importing, we have to use this same name in that importing file
  console.log(`${buyer} ordered this ${item}`);
};

// * Multiple Values
let laptopPrice = 50000;
let quantity = 5;
export { order, laptopPrice, quantity as quant }; // while importing, we have to use this same name in that importing file
// * We can also rename by using "as" keyword
// * Can be used at importing side also
