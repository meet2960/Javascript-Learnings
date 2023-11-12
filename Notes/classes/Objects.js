function multipleByFive(num) {
  return num * 5;
}
multipleByFive.power = 2;
console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// ? Using Prototype we can inject our own customer properties to any object. and we can access that with every instances of that object.

// ? Here we have created a increment property and given a function to that
// ? We have to use this compulsory, because when we try to access this property, js don't know to which context it has to work and execute something. So fot that reason we have to use this to give its current object context.
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// ? Here we created two instances of createUser, and provided some value. and the prototype will also inject the increment and printMe functions in object.
// ? If we try to access the new properties, without using new keyword to create a instance, js will throw an error as Cannot read properties of undefined. Because it don't it any new proerties were added or not
// ? So to tackle this problem, we have to use new keyword and after that each customer properties will also be accessible
const userOne = new createUser("User One", 25);
const userTwo = createUser("User Two", 250);
userOne.printMe();
userOne.increment();
userOne.printMe();
