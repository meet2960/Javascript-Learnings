// * Panagram String
// All the alphabet of of English Language should appear inside the one sentence.
// Means All the characters from a-z should be inside the whole sentence and if any one is not present, string is not panagram

const panagramString = "The quick brown fox jumps over a lazy dog";

function checkPanagram(str) {
  const arr = new Array(26).fill(false);
  let currentIndex;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      currentIndex = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      currentIndex = str.charCodeAt(i) - "a".charCodeAt(0);
    } else {
      continue;
    }
    arr[currentIndex] = true;
  }

  for (const key in arr) {
    if (arr[key] === false) {
      return false;
    }
  }
  return true;
}

const result = checkPanagram(panagramString);
console.log(result);

// Here we are creating an empty array of 26, to store each char occurance. If all the character appeared in the given string, we will make each value true, and check that all the 26 value are true, then our string is panagram or else it is not panagram.
