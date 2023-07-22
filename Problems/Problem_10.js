// * Find Unique Elements from Array without using Set Method

// 1st Method using IndexOf Method
const numsArr = [12, 1, 1, 35, 35, 1, 10, 34, 1, 35];
const findUnique = (arr) => {
  return arr.filter(
    (items, index, arrayItself) => arrayItself.indexOf(items) == index
  );
};
console.log("Unique Array", findUnique(numsArr));

// 2nd Method using For Loops
const usingForLoop = (arr) => {
  let uniqueArray = [];
  let status = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        status = true;
      }
    }
    count++;
    if (count == 1 && status == false) {
      uniqueArray.push(arr[i]);
    }
    status = false;
    count = 0;
  }
  return uniqueArray;
};
console.log(usingForLoop(numsArr));

// * 3rd Method
const uniqueUsingSet = (arr) => {
  return Array.from(new Set(arr));
};
console.log("Unique Using Set", uniqueUsingSet(numsArr));
