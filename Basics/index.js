// // * Objects in JavaScript
// console.log("Object Example");
// const student = {
//   firstName: "Meet",
//   class: "IT",
//   div: "C",
//   fun: function () {
//     console.log("Inside Object Method : " + this.firstName);
//   },
// };
// student.lastname = "Adding new Key to Object";
// console.log(student);
// console.log(student["class"]);
// student.fun();

// // * Create an object using new variable
// // constructor function
// function Person() {
//   (this.firstname = "John"), (this.age = 23);
// }

// const person = new Person();
// console.log(person);

// // * Arrow Functions
// const fun = () => {
//   console.log("Inside Arrow Function without Parameter");
// };
// fun();

// let greet = (x) => {
//   console.log("Inside Arrow Function with Parameter, " + x);
// };
// greet("Hello");

// let log1 = 10;
// let log2 = 20;
// let log3 = 30;

// const add = () => {
//   let ans = log1 + log2 + log3;
//   return ans;
// };
// console.log(add());
// add();

// ? Merge two array in one main object with key and vallue pair
// var fruits = ["Apple", "Orange", "Banana", "Grapes"];
// var colors = ["red", "Orange", "yellow", "blue"];
// var newObj = {};
// console.log(newObj);
// for (let i in fruits) {
//   newObj[fruits[i]] = colors[i];
//   console.log(newObj);
// }
// console.log(newObj);
// ? Map Example
// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// console.log(persons.map(getFullName));

// function getFullName(item) {
//   return [item.firstname, item.lastname].join(" : ");
// }

/* // * Spread Operator in JS
const obj1 = { foo: "bar", x: 42 };
const obj2 = { fo1: "baz", y: 13 };

const clonedObj = { ...obj1, ...obj2 };
console.log(clonedObj);
function test_same_elements_both_arrays(arra1, arra2) {
  var result = 0;
  var newarray = [];
  for (var i = 0; i < arra1.length; i++) {
    for (var j = 0; j < arra2.length; j++) {
      if (arra1[i] === arra2[j]) {
        newarray[i] = arra1[i];
        result++;
      }
    }
  }
  console.log(newarray);
  return result;
}
console.log(test_same_elements_both_arrays([1, 2, 3, 44, 5], [1, 22, 3, 4, 5])); */

// * UpperCase to Lower and Lower to Uppercase
/* function change_case(txt) {
  var str1 = "";
  for (var i = 0; i < txt.length; i++) {
    if (/[a-z]/.test(txt[i])) {
      str1 += txt[i].toUpperCase();
    } else str1 += txt[i].toLowerCase();
  }
    
  return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));
console.log(change_case("MEET ghelani")); */

/* // * Bubble Sort Algorithm in JavaScript
let newarray = [6, 4, 0, 3, -2, 1, -5, 10, 2, -10, 20, 7, 8];
console.log(newarray);
let temp;
for (i = 0; i < newarray.length; i++) {
  for (j = i + 1; j < newarray.length; j++) {
    if (newarray[i] > newarray[j]) {
      temp = newarray[i];
      newarray[i] = newarray[j];
      newarray[j] = temp;
    }
  }
}
console.log(newarray); */

/* // ? const output = {d:10,e:12}
const input1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 10,
  e: 12,
};
const input2 = {
  a: 2,
  e: 12,
  f: 6,
  d: 10,
};
function check(input1, input2) {
  let newobj = {};
  for (let key in input1) {
    if (input1[key] == input2[key]) {
      newobj[key] = input1[key];
    }
  }
  return newobj;
}
console.log(check(input1, input2)); */

// second largest number from array
/* const input = [1, 2, -2, 11, 7, 1];
function check(input) {
  let max = input[0];
  for (i = 0; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  return max;
}
check(input);
console.log(check(input)); */

// ? Second largest number from array
/* const input = [1, 2, -2, 7, 6, 5, 1];
function check(input) {
  let sorted = input.sort((a, b) => a - b); // Sorting Ascending to Descending
  let seclast = sorted[sorted.length - 1];
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (seclast != sorted[i]) {
      seclast = sorted[i];
      break;
    }
  }
  return seclast;
}
console.log(check(input)); */

/* const input = [1, 2, -2, 7, 7, 6, 6, 5, 1];
function check(input) {
  let sorted = input.sort((a, b) => b - a); // Sorting Ascending to Descending
  console.log(sorted);
  let first = sorted[0];
  console.log(first);
  for (let i = 0; i <= sorted.length - 1; i++) {
    if (first != sorted[i]) {
      first = sorted[i];
      // break;
    }
  }
  return first;
}
console.log("Second Largest from Array is : " + check(input)); */

/* function findThirdLargest(arr) {
  var first = -Infinity,
    second = -Infinity,
    third = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  return third;
}
const newarray = [1, 2, -2, 7, 6, 5, 1];
console.log(findThirdLargest(newarray)); */

/* // ? Third Largest Element from Array
function thirdLargest(arr, arr_size) {
  if (arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  let first = arr[0];
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] > first) {
      first = arr[i];
    }
  }
  console.log(first);
  let second = Number.MIN_VALUE;
  console.log("Second Number is : " + second);
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  let third = Number.MIN_VALUE;
  console.log("Third Number is : " + third);
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > third && arr[i] < second) {
      third = arr[i];
    }
  }
  console.log("The third Largest element is " + third);
}
let arr = [12, 13, 1, 10, 34, 34, 16, 16, 15];
let n = arr.length;
thirdLargest(arr, n);
 */

/* // ? Card Shuffle Game

const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const deckCards = [];

// Creating deck of card, total 56 cards
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    let randomCard = {
      Value: values[j],
      Suit: suits[i],
    };
    deckCards.push(randomCard);
  }
}
console.log(deckCards);
for (let i = deckCards.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deckCards[i];
  deckCards[i] = deckCards[j];
  deckCards[j] = temp;
}

for (let i = 0; i < 3; i++) {
  console.log(`${deckCards[i].Value} : of ${deckCards[i].Suit}`);
}
 */

// ? program to remove duplicate value from an array
function getUnique(arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      console.log(i);
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}
const array = [1, 2, 4, 4, 2, 2, 3, 2, 3];
getUnique(array);
