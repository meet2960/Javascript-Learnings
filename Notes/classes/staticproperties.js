// * Basic Usage of (static) keyword in classes

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is :- ${this.username}`);
  }
  static createUniqueId() {
    return `123`;
  }
}

const userOne = new User("Meet");
// console.log(userOne.createUniqueId()); // ? this will throw an error, as the method is created with static keyword

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacherOne = new Teacher("Vikas", "teacher@gmail.com");
console.log(teacherOne);
teacherOne.logMe();
