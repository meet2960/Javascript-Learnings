// * Pass by Reference and Pass by Value

// ! Pass by Reference
// * For Array
let referenceArray = [1, 2, 3, 4, 5];
let copyReference = referenceArray;
// ? Consider we push some values in copy array
copyReference.push(6);
copyReference.shift();
console.log("Orignal Array", referenceArray);
console.log("Copy Array", copyReference);
// ? By this the value will be added and removed from both the array, as they are pointing same memory location. This is called Pass by Reference

// ! Pass by Value
// * For Array
let valueArray = [1, 2, 3, 4, 5];
let copyValue = [...valueArray];
copyValue.push(6);
copyValue.shift();
console.log("Orignal Array", valueArray);
console.log("Copy Array", copyValue);
// Here we have done push and shift operation on copyValue only, so it will modify that particular array only, because they are individually stored in a memory.
