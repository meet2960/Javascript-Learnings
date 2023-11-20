// * Basic Example of Inheritance in JavaScript

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}
// ? Creating Teacher Object
const newTeacher = new Teacher("Meet", "teacher@gmail.com", "teacher@123");
console.log(newTeacher);
newTeacher.logMe();
newTeacher.addCourse();
console.log("--------------------------------------------");
// ? Creating User Object
const student = new User("Rudra");
console.log(student);
student.logMe();
// student.addCourse(); // It doesn't have access to this method
console.log("--------------------------------------------");

// ? To check if an object is an instance of its own class or any other class, we have instanceof keyword to check
console.log(newTeacher instanceof Teacher); // true
console.log(newTeacher instanceof User); // true, as it is extended in teacher class
console.log(student instanceof User); // true
