// ! Array and its Methods in JavaScript

// const newarray = ["java", "cpp", "c", "javascript", "python"];
const newarray = [10, 20, 30, 40, 50];
console.log("Original Array is : ", newarray);
// * Update any ELement of Array using its index and change the value
// newarray[0] = 100;
// console.log(newarray);

// * Access any Element of Array using its index
// console.log("First Element of Array is : " + newarray[0]);

// * Length : Find Length of the array
// let a = newarray.length;
// console.log("Length of Array is : ", a);

// * Push(): Add new element to End of the Array
// newarray.push(6);
// console.log(newarray);

// * Pop(): Removes last element from the Array
// newarray.pop();
// console.log(newarray);

// * Shift(): Removes First element of Array
// newarray.shift();
// console.log(newarray);

// * Unshift(): Adds new element to the Beginning of Array
// newarray.unshift(0);
// console.log(newarray);

// * Splice(): Method, takes total 2 parameters and after that all the elements to be inserted
// console.log(newarray);
// newarray.splice(2, 2); // ? This will delete array from index [2] and delete 2 elements from there.
// newarray.splice(2, 2, 10, 20); // ? This will delete array from index [2] and delete 2 elements from there and insert 2 elements at empty space
// console.log(newarray);

// * Slice(): Method, It will not remove any element from source array, instead store removed element to new variable
// console.log(newarray);
// const deleted = newarray.slice(2); // ? This will slice 0,1 element from the array and store remaining array values inside deleted array.
// const deleted = newarray.slice(1, 3); // ? This will slice array from 1 index and slice it to 3, but will not include 3 in it i.e it will slice elements at index[1,2] but not 3.
// console.log(deleted);
// console.log(newarray);

/* // * Map() :  Method, creates a new array filled with elements which are result from the array with some specific function on it, and it will not alter the original array, instead create new array from the original array and there will be same length of array as original array have.
const map1 = newarray.map((element) => element > 2); // ? using this function, all the element will be multiplied by 5
console.log(map1);
console.log(newarray); */

/* // * Filter(): Method, creates a new array filled with elements which are result from the array with some specific function on it, and it will also not alter the original array, instead create a shallow copy.
const newfilter = newarray.filter((element) => element >= 25);
console.log("Element > 25 are : ", newfilter); */

/* // * Find() : Method, returns only one first element which satisfy the conditon provided in function, use find method when you expect only a single element to be returned from the array.
const found = newarray.find((element) => element > 35);
console.log(found); */

// ! Iteration on Array
/* // ? Simple (For) loop for iteration over array
for (let i = 0; i < newarray.length; i++) {
  console.log(newarray[i]);
} */
/* // ? (For in) : used to get index's of the elements of array
for (let index in newarray) {
  console.log(index);
} */
/* // ? (For of) : used to get the elements value of the array
for (let value of newarray) {
  console.log("Elements of Array are : ", value);
  console.log(value * 2);
}
console.log(newarray); */
/* // ? For Each in array in Js
newarray.forEach((Element, index, array) => {
  console.log("Index : " + index + " Value : " + Element);
}); */

// ! Simple Concepts to Understand
/* // ? When we assign arr1 to arr2, they both refer to same object reference, so when we add or remove any element from any of the array, both the array get affected, so we we need to use spread operator to clone array.

const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.pop();
arr1.push(4);
console.log(arr1);
console.log(arr2); */
