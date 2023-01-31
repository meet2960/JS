// ! Map in JavaScript and its Methods

const map1 = new Map();
// * set(key,value) method :- in map is used to set key value pair in map, we can set values by two method, one by individual and second by chaining the set method in one line. Both will be same
// map1.set("apples", 5).set("bananas", 3).set("oranges", 2).set("pineapple", 400);;
/* map1.set("apples", 500);
map1.set("bananas", 300);
map1.set("oranges", 200);
map1.set("pineapple", 400); */
// console.log("Map1 is : ", map1.size);

// * get(key) method :- is used to get the value of key from the map
// console.log("Value of Apples Key is : ", map1.get("apples"));

// * size property :- is used to get the size of map
console.log("Size of Map1 is : ", map1.size);

// * delete(key) method :- is used to delete a key from the map
// map1.delete("bananas");
// console.log("After Deleting Bananas Key from map1 : ", map1);

// * has(key) method :- is used to check if the passed key is avaliable in the map or not
//console.log("Has Method : ", map1.has("oranges"));

// * clear() method :- is used to clear the map
// console.log(map1.clear());

/* // * Using (For of) loop can be used to iterate over all the keys of map using (keys()) method, and we can also iterate over values using (values()) method in map
const iterator1 = map1.keys();
for (let keys of iterator1) {
  console.log("Keys of Map are : ", keys);
} */

// ! Map in JavaScript Ends Here
