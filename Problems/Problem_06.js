// * Anagram String
// Both the string contains same number of characters. THey can be in any order, but just contain all the characters in both the String

// ? Question :- str1 = "mary", str2 = "army" ------->>>>>>>> Output :- true
// ? Question :- str1 = "hello", llleh = "army" ------->>>>>>>> Output :- false

// * 1st Method
const str1 = "hello";
const str2 = "lleoh";

const checkAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let strObj = {};
  for (const i of s1) {
    strObj[i] = (strObj[i] || 0) + 1;
  }
  //   console.log("strobj", strObj);
  for (const j of s2) {
    // console.log("s2", strObj[j]);
    if (!strObj[j]) {
      return false;
    }
    strObj[j] -= 1;
  }
  return true;
};
console.log(checkAnagram(str1, str2));

// * 2nd Method
const checkAnagramWithMethods = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let newStr1 = s1.split("").sort().join("");
  let newStr2 = s2.split("").sort().join("");
  if (newStr1 === newStr2) {
    return true;
  } else {
    return false;
  }
};
console.log("Using Sorting", checkAnagramWithMethods("arny", "mary"));
