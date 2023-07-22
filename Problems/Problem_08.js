// * Two Sum Problem
// Input: nums = [2,7,11,15], target = 9 ,  Output: [0,1]

const nums = [3, 2, 3];
const target = 6;

const twoSums = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSums(nums, target));
