// * Guess the Output
function map(f, a) {
  let result = [];
  let i;
  for (let i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
    return result;
  }
}

const f = function (x) {
  return x * x * x;
};

let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube); // [0]

// * 2nd - Guess the output
// ? Below example is an example of Closure
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1);
