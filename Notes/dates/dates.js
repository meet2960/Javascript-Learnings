const newDate = new Date();
console.log(newDate); // Gives both date and time, in original format
console.log(newDate.toString()); // Show date with Time, as IST
console.log(newDate.toDateString()); // Show only date and year
console.log(newDate.toLocaleString()); // date and time in indian format
console.log(newDate.toLocaleDateString()); // Show only current date
console.log(typeof newDate); // object
const customDate = newDate.toLocaleString("default", {
  month: "long",
  year: "numeric",
  weekday: "short",
  day: "numeric",
});
console.log(customDate); // We can define our own type of date
console.log("Time", newDate.getDate()); // Gives current date
console.log("Time", newDate.getTime()); // Gives time in milisecond
