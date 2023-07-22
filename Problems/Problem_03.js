// ? Example of function chaining and do some operation based on the function provided
// * Function Chaining means calling one function with another and it forms a chain like structure.

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  divide(a) {
    this.total /= a;
    return this;
  },
};

const result = calc.add(100).multiply(5).subtract(250).add(50).divide(2);
console.log(result.total);

// ? Here we are returning this in every object, because everytime the next function is called, we want the updated value of total, so to get that, we are returning this in every function.
