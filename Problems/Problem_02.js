// * Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)(5)());

// This will check repeadetly if the last value is empty or not, and add to it according.
