// ? Palindrome String

// ? Question :- str1 = "madam" ------->>>>>>>> Output :- true
// ? Question :- str1 = "race"  ------->>>>>>>> Output :- false

// * 1st Method
function checkPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("race"));
