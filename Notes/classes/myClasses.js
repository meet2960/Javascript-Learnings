// * Example of Classes in JS

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `new${this.password}encrypted`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("admin", "admin@gmail.com", "admin@123");
console.log("userOne", userOne);
console.log("encrypted", userOne.encryptPassword());
console.log("changeUser", userOne.changeUsername());

// ? Behind the Scenes, if classes were not exists,
// ? This is how it was when classes were not introduced.

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `new${this.password}encrypted`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const withFnUserOne = new User("user", "user@gmail.com", "user@123");
console.log("userOne", withFnUserOne);
console.log("fn encrypted", withFnUserOne.encryptPassword());
console.log("fn changeUser", withFnUserOne.changeUsername());
