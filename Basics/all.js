// * Variables Types in JavaScript

/* // ? Let Variable in JS
let x = "Hello World";
let y; // ? We can declare let variable without initialization it.
console.log("The value of X Before the function is : " + x);
let x = 10; // ? Let Variable Cannot be redeclare because it is blocked scope variable
function check() {
  let x = 10;
  console.log("The Value of X inside function is : " + x);
}
check();
console.log("The value of X outside the function is : " + x); */

/* // ? Const Variable in JavaScript
const x = 10;
const x;        // ? We cannot declare const type variable without initialization it any value;
x = 10;           // ? We cannot assign any other value to a constant variable.
console.log(x);
function check() {
  const x = 20;
  console.log("First Function : " + x);
  function hello() {
    const x = 30;
    console.log("Second Function : " + x);
  }
  hello();
}
check();
console.log("Outside All Function : " + x); */

/* // ? Var Variable in JS
var x = 20;
var y; // ? We can declare var variable without initialization it.
console.log("\nValue of X outside the function is : " + x);
function check() {
  var x = 100;
  console.log("\nValue of X inside the function is : " + x);
  var x = 200;
  console.log("\nValue of X inside the function is : " + x);
}
check();
console.log("\nValue of X outside the function is : " + x);
var x = 30; // ? We Can also Change Value of Var type Variable later in the same code
console.log("\nValue of X after changing its Value " + x); */
// * Variables Types in JavaScript End

/* // * Simple Function
let x = newfunction(4, 3); // Function is called, return value will end up in x
console.log(newfunction()); // Function called direct, without any variable assignment
function newfunction(a, b) {
  return a * b; // Function returns the product of a and b
}
console.log("Multiplication of Two Number is : ", x); */

/* // * Arrow Function
let sum = (a, b) => {
  return a + b;
};
console.log("Sum of Two Number is : ", sum(5, 10)); */

/* // * Set in JavaScript
// ? A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
const newset = new Set([
  "Car",
  "Bike",
  "Truck",
  "Train",
  "Car",
  "Bike",
  "Truck",
  "Train",
]);
console.log(typeof newset);
console.log(newset); */

/* // * Objects in JS
const obj = {
    name : "Meet",
    enroll : 4008,
    section : "c"
};
obj['lname'] = "Ghelani"
console.log(obj);
console.log("Type of : " + obj); */

/* // * Switch Case in JS
let arg = parseInt(prompt("Enter a value?"));
switch (arg) {
  case 0:
  case 1:
    alert("One or zero");
    break;

  case 2:
    alert("Two");
    break;

  case 3:
    alert("Three !");
    break;

  default:
    alert("An unknown value");
} */

// * Spread Operator

/* // ? Spread Operator in Array, Example to Clone array
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four", "five"];

console.log(arr2);
console.log(arr2.length); */

/* // ? Spread Operator in Object, Example to add propoerties of object to one object

const obj1 = {
  firstName: "Meet",
  lastName: "Ghelani",
};
const obj2 = {
  age: 20,
};
console.log(obj1);
console.log(obj2);
const obj3 = { ...obj1, ...obj2 };
console.log("Properties of Obj1 and Obj2 are added: \n", obj3); */

// * Rest Parameter
/* // ? When spread operator is used as an parameter, it is known as Rest Parameter
let newfunction = (...args) => {
  // z = a + b + c + d + e;
  console.log(args);
};
newfunction(1, 2, 3, 4, 5); */
