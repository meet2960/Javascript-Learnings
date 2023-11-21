// ? Getters and Setters (Notes)
// ? By default every class havve getters and setters
// ? If we define any getter, then compulsoryly we have to define its setter, no matter what.

// ? while using set function, we cannot use the already declared variable, as it wil create a error called (Maximum call stack exceeded). This means, our constructor is also trying to set the value of that proerty and the setter function is also trying to set the value. This confuses javascript which value should it use. So its best practices to use same value name, just add (_) before the variable you want to set, it will create a new variable but will have value of our original variable.

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const newUser = new User("user@gmail.com", "user@123");
console.log(newUser.email);
console.log(newUser.password);
