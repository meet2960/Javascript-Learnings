// const responseData = "User Tag ID: 28, Doc Share ID: 38";
// const keyValuePairs = responseData.split(/[:,]/);
// console.log("keyValuePairs", keyValuePairs);
// const userTagId = keyValuePairs[1];
// console.log("userTagId", userTagId);

const myName = "      Meet    Ghelani";
const trimmedName = myName.replace(/\s+/g, " ").trim();
console.log(trimmedName);
const getNameInitials = (name) => {
  if (name) {
    const names = name.split(" ");
    console.log("names", names);
    const initials = names
      .map((n) => (n ? n[0].toUpperCase() : ""))
      .slice(0, 2)
      .join("");
    return initials;
  } else {
    return "DT";
  }
};
getNameInitials(trimmedName);
