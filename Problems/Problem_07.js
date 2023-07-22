// * Running Sum Problem (LeetCode and Codedamn)
// Input: nums = [1, 2, 3, 4] Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const nums = [1, 2, 3, 4];

// * 1st Method
const runningSumOne = (arr) => {
  let answerArray = [];
  answerArray[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answerArray[i] = answerArray[i - 1] + arr[i];
  }
  return answerArray;
};
console.log(runningSumOne(nums));

// * 2nd Method
const runningSumTwo = (nums) => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};
console.log(runningSumTwo(nums));

// * 3rd Method
let runningSumThree = (nums, val = 0) => nums.map((items) => (val = val + items));
console.log(runningSumThree(nums));
