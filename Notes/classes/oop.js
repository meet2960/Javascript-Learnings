// * This is also called object literals

const user = {
  username: "JavaScript",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(`Username : ${username}`); // This won't work, because it don't know which context is being refered
    // console.log(`Username : ${this.username}`); // This will work
    console.log(this); // this will refer to its current object means, its own object
  },
};
console.log(user.getUserDetails());
// console.log(this); // Nothing inside global context

// * Consider using a function to create a multiple instaces
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this; // we don't write return this, then also it will return by defult, as it is defined implicitly
}

const userOne = User("Hello", 12, true);
const userTwo = User("World", 24, false); // Creating Second Instance
console.log("userOne", userOne); // Ignore other properties, but other than that, properties we defined are also added in this
// ? If we console userOne after creating userTwo, we can see that the values of userOne are replaced by userTwo values. So this will create a problem, everytime we create a new object, its previous values will be overwritten

// ? Here  we have used constructor function, then it will give use a new copy everytime we invoke it. So this will be very beneficial, then the simple function method

// * Modified Code
const userThree = new User("Hello", 12, true);
const userFour = new User("World", 24, false); // The new keyword will also remove all unwanted mess properties, and only provide us the properties which we created
console.log("userThree", userThree); //
console.log("userThree", userThree.constructor); // Conctructor is actually a reference of its own function or its own context
console.log("Instance of", userThree instanceof User); // It will return true, cause we created this object with that Constructor function
console.log("userFour", userFour); //
