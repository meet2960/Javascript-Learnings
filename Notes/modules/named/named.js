// ! Importing and Exporting ES6 Modules

// * Importing module without value
import { totalProducts, order, laptopPrice, quant as Q } from "./product.js"; // ? to run this, use type="module" in index file
console.log("Importing Module");
console.log("Total Products", totalProducts);
order("jack", "laptop");
console.log("Laptop Price", laptopPrice);
console.log("Laptop Quantity", Q);

import * as singleVariable from "./product.js"; // ? we can also import all the export using single variable
console.log(singleVariable); // ? Now it has all the exported values and function
console.log(singleVariable.laptopPrice);
console.log(singleVariable.quant);
