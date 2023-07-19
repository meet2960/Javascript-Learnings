// ! String Methods
// ! --------------

let demoString = "Hello World";

// * 1 String Length
console.log(demoString.length);
// ? String is a combination of characters, which works as a array.
// ? We can access any character using its index
console.log(demoString[2]);

// * 2 Change Cases
console.log(demoString.toLowerCase());
console.log(demoString.toUpperCase());

// * 3 IndexOf
console.log(demoString.indexOf("o"));
console.log(demoString.lastIndexOf("o"));
// ? Similary lastIndexOf return the char last index if there are multiple
// ? If particular char is not present in the string then it will return -1
// ? It is Case sensitive also

// * 4 Trim Method
// ? Used to trim unnecessary white spaces from the string
let hobbiesString = "   coding reading running      hihih";
console.log(hobbiesString);
let trimResult = hobbiesString.trim();
console.log(trimResult);

// * 5 Includes Method
// ? Returns true of particular string exist inside our main string, else false
console.log(demoString.includes("Hello"));

// * 6 Slice Method
// ? Takes 2 parameter, Start index and End Index to be sliced
// ? String after 5th index is excluded and return the sliced string
// ? It will Return the new string
let languageName = "javascript";
let slciedString = languageName.slice(0, 4);
console.log(slciedString);

// * 7 Split Method
// ? Created an array based on the condition given inside the method
let favouriteColors = "Black Blue Red Green";
let arrayColors = favouriteColors.split(" ");
console.log("Array of Colors", arrayColors);
