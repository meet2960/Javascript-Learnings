// ! Rest Parameters

// * We can pass as many arguments as we want and then use them inside the function using spread operator and it will give us all the arguments in form of an array and then we can do any operation on them.

function calculateCartPrice(...price) {
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += price[i];
  }
  return total;
}
let finalTotal = calculateCartPrice(200, 400, 600, 800);
console.log(finalTotal);
