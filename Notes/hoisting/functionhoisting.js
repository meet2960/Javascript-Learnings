// * For Functions Declaration
functionDeclaration();
function functionDeclaration() {
  console.log("Example of Hoisted Function Declaration");
}

// * Function Expression or Arrow Function
functionExpression();
let functionExpression = () => {
  console.log("Example of Hoisted Function Expression or Arrow Function");
  // Error : Cannot access 'test' before initialization
};
