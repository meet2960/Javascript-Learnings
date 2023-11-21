// * Using getter and setter with functions as classes were not introduced.

// // * Function Based
// function User(email, password) {
//   this._email = email;
//   this._password = password;
//   Object.defineProperty(this, "email", {
//     get: function () {
//       console.log("calling get");
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });
//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const newUser = new User("fnUser", "function@123");
// console.log("function user", newUser.email);

// * Object based Getter and Setter

const User = {
  _email: "user@gmail.com",
  _password: "abc@gmail.com",

  get email() {
    return this._email.toLowerCase();
  },
  set email(value) {
    this._email = value;
  },
};

const objUser = Object.create(User);
console.log(objUser.email);
