// * Find Second Largest from the Array
// Input: [12, 35, 1, 10, 34, 1]  -------->>>>>>>> Output: 34
// Input: [10, 5, 10]             -------->>>>>>>> Output: 5

// * Simple Soultion
const numsArr = [12, 35, 1, 10, 34, 1];

// 1st Solution
const secondLargest = (arr) => {
  const uniqueArray = Array.from(new Set(arr)); // Time_Complexity: O(n)
  uniqueArray.sort((a, b) => b - a); // Time_Complexity: O(nlogn)
  if (uniqueArray.length >= 2) {
    return uniqueArray[1];
  } else {
    return false;
  }
};
console.log("Using InBuild Methods", secondLargest(numsArr)); // Time_Complexity: (O(nlogn))

// 2nd Method
const secondLargestOptimized = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  // Time_Complexity: O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
console.log("Using Optimized Solution", secondLargestOptimized(numsArr));
// Time_Complexity: O(n)
// Space Complexity: O(1) // Cause returining only 1 value, and not creating new array
