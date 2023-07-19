// *  Variables In JavaScript
// ! Dont use var type in any case, use const and let only as much as possible

// ! Var
// ! ---
var varValue = 34;
var varValue = 56; // ? It Allows us to Redeclare and also reassign the variable again
varValue = 96; // ? We can also change its Value
console.log("var variable", varValue); // 96
function checkVarValue() {
  console.log("Inside Function", varValue); // undefined, because it is defined again inside function
  var varValue = 100;
  console.log("Value of varValue inside the function is : ", varValue); // 100
  if (varValue) {
    console.log("Inside If value of Var", varValue); // 100
  }
  var varValue = 200;
  console.log(
    "Value of varValue inside the function is updated with : ",
    varValue
  ); // 200
}
checkVarValue();
console.log("Value of varValue outside the function is : ", varValue); // 96, Refer to global scope

// ! Let
// ! ---
// ? Let Varibale is a block scope varible, which means, its accessible within its scope, outside it is dead
let otherLetValue; // ? We can declare let variable without initialization it any value.
let letValue = 23;
// let letValue = 23; // ? We cannot redelcare let type variable again with same name, This will give us error
letValue = 36; // ? We can change its value after decleration
console.log("let variable", letValue); // 36
function checkLetValue() {
  let letValue = 10;
  console.log("The Value of letValue inside function is : ", letValue); // 10
  if (letValue) {
    let letValue = 100;
    console.log("Value of letValue inside if state is", letValue); // 100
  }
  console.log("The Value of letValue again inside function is : ", letValue); // 10
}
checkLetValue();
console.log("The value of variable outside the function is : ", letValue); // 36

// ! Const
// ! -----
const constValue = 10;
// constValue = 10; // ? We cannot reassign value to a const type variable, Error : Assignment to constant variable
// const anotherValue; // ? We cannot declare const type variable without initialization its value, we have to give some value. Error, initialize value to it
console.log("const variable", constValue); // 10
function checkConstValue() {
  const constValue = 20;
  console.log("Inside Parent Function : ", constValue); // 20
  function otherConstValue() {
    const constValue = 30;
    console.log("Inside Child Function : ", constValue); // 30
  }
  otherConstValue();
  console.log("Again Inside Parent Function", constValue); // 20
}
checkConstValue();
console.log("Outside All Function : ", constValue); // 10
