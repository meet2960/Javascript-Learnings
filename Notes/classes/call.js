// * Practical Usage of call method of JavaScript

function SetUsername(username) {
  // suppose doing some complex calculation
  console.log("calling");
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const newUser = new createUser("Meet", "meet@gmail.com", "meet@123");
console.log("newUser", newUser);
