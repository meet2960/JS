// ! Objects and its Methods in JavaScript

const object1 = {
  firstname: "Meet",
  lastname: "Ghelani",
  age: 20,
};
console.log(object1);
/* // * Add New Key/Value Pair to the object by name the key and then its value
object1.gender = "Male";
console.log(object1); */

/* // * Edit Existing Value using its key and set new value to it
object1.age = 21;
console.log(object1); */

/* // * To Access value of object, use object name and then key name, two ways we can do that
console.log("Value of Firstname is : ", object1.firstname);
console.log("Value of Firstname is : ", object1["firstname"]); */

/* // * freeze() :  Freeze editing the object using freeze(object_name) method.
Object.freeze(object1);
object1.dept = "I.T";
console.log(object1); */

/* // * keys() : returns an array of a given object's all keys.
let keyarray = Object.keys(object1);
console.log(keyarray); */

/* // * values() : returns an array of a given object's all values .
let valuearray = Object.values(object1);
console.log(valuearray); */

/* // * entries() : using entries method on object, we can iterate over key and value pair using for of loop.
let iteratable = Object.entries(object1);
for (let [key, val] of iteratable) {
  console.log(`${key} : ${val}`);
} */

// ! Iteration on Objects
/* // ? (For in): loop is used in object to iterate over the keys of an object
for (let keys in object1) {
  console.log("Keys of an Object are : ", keys);
  // if (keys === "ID") {
  //   console.log("ID is Avaliable in Object1");
  // } else {
  //   console.log("ID is not Avaliable in Object1");
  // }
} */
