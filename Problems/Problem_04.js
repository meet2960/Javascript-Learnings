// * Custom Array Flatten Method, without using inbuild method to flatten the given array

const arr = [0, [1, 2], [3, 4], [5, 6, [7, 8], 9], [10, 11, 12]];

function customFlat(arr, depth = 1) {
  let resultArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      resultArr.push(...customFlat(element, depth - 1));
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
}

const flattenedArray = customFlat(arr, 2);
console.log(flattenedArray);

// Here we are checking condition for each element of array by using isArray methods, which returns true if that element is array or return false if it is not array. Then we are calling the function again with the next element in the array works recursively for all the elements of array.
