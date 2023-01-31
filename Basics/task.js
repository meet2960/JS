// ! ALL JavaScript Task List
// ! ------------------------

// ? O/p = { color: 'red', share: 'circle' }
/* // * 1) Using Simple For Loop
const data = [
  { key: "color", value: "red" },
  { key: "share", value: "circle" },
];
const newdata = {};
for (i = 0; i < data.length; i++) {
  newdata[data[i].key] = data[i].value;
  console.log(newdata);
} */

/* // * 2) Using For in Loop
const data = [
  { key: "color", value: "red" },
  { key: "share", value: "circle" },
];
let newdata = {};
for (const i in data) {
  newdata[data[i].key] = data[i].value;
  // console.log(newdata);
}
console.log(newdata); */

// ? Find the sum of all digits in a given string.

/* // * 1) Using Common Conditions Example
let string1 = "ab3cd45e1g";
let newStr1 = "";
let sum = 0;
for (let i = 0; i < string1.length; i++) {
  if (string1[i] >= "0" && string1[i] <= "9") {
    newStr1 = newStr1 + string1[i];
  }
}
console.log("digit from string=", newStr1);
for (x = 0; x < newStr1.length; x++) {
  sum = sum + parseInt(newStr1[x]);
}
console.log(sum); */

/* // * 2) By Converting String to Array using isNaN Method
let str = "ab3cd45e1g";
let numsarray = []; // To Store number from the string inside this array
let sum = 0;
for (let i = 0; i < str.length; i++) {
  if (!isNaN(Number(str[i]))) {
    numsarray.push(Number(str[i]));
  }
}
console.log(numsarray);
for (let i = 0; i < numsarray.length; i++) {
  sum = sum + numsarray[i];
}
console.log(sum); */

/* // * 3) Using Simple Function Method with isNaN Method
let str = "ab3cd45e1g";
function numberAdd(str) {
  let str1 = str.split("");
  let sum = 0;
  for (i = 0; i < str1.length; i++) {
    if (!isNaN(str1[i])) {
      sum += parseInt(str1[i]);
    }
  }
  return sum;
}
console.log("Sum of Digit is : " + numberAdd(str)); */

/* // * 4) Using Arrow Function
const str = "ab3cd45e1g";
const sumStringNum = (str) => {
  const strArr = str.split("");
  let res = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (+strArr[i]) {
      res += +strArr[i];
    }
  }
  return res;
};
console.log(sumStringNum(str)); */

/* // * 5) Using Regular Expression
function sum(digitstr) {
  var total = 0;
  for (var i = 0; i < digitstr.length; i++) {
    if (/[0-9]/.test(digitstr[i])) total += parseInt(digitstr[i]);
  }
  return total;
}
console.log("Sum of Digit is : " + sum("ab3cd45e1g")); */

/* // *? Number to Word
function convertToWords(num) {
  var ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  var tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  var numString = num.toString();
  var numLength = numString.length;
  if (numLength === 1) {
    return ones[num];
  } else if (numLength === 2) {
    if (num < 20) {
      return ones[num];
    } else {
      return tens[numString[0]] + " " + ones[numString[1]];
    }
  } else if (numLength === 3) {
    return (
      ones[numString[0]] +
      " hundred " +
      convertToWords(parseInt(numString.slice(1)))
    );
  } else if (numLength === 4) {
    return (
      ones[numString[0]] +
      " thousand " +
      convertToWords(parseInt(numString.slice(1)))
    );
  }
}
let num = 12233;
console.log(num + " : " + convertToWords(num)); */

// * 17/01/2023

/* // ? 1) Fibonacci Series
let a = 0;
let b = 1;
let ans,
  n = 5;
console.log(a);
console.log(b);
for (i = 0; i <= n; i++) {
  ans = a + b;
  console.log(ans);
  a = b;
  b = ans;
} */

/* // ? 2) Palindrome String in js
let str = "radar";
let revstr = "";
let i;
for (i = str.length - 1; i >= 0; i--) {
  revstr += str[i];
}
if (str === revstr) {
  console.log("Both the Strings are Same");
} else {
  console.log("Strings are not Same");
} */

/* // ? 2.1) Palindrome Number in Js
function checkPalindromeNumber(number) {
  let remainder;
  let reversedNumber = 0;
  let temp = number;
  while (number > 0) {
    remainder = number % 10;
    number = parseInt(number / 10);
    reversedNumber = reversedNumber * 10 + remainder;
  }
  if (reversedNumber == temp) {
    console.log("The given number is Palindrome");
  } else {
    console.log("The given number is not palindrome");
  }
}
checkPalindromeNumber(121); */

/* // ? 3) String Matching in JS (First one, basic only)
let str1 = "mary";
let str2 = "aamy";
let newstr = "";
let count = 0;
if (str1.length === str2.length) {
  //   console.log("Lenght of Both Strings are Same i.e : " + str1.length);
  for (let i = 0; i <= str1.length - 1; i++) {
    for (let j = 0; j <= str2.length - 1; j++) {
      if (str1[i] === str2[j]) {
        console.log("Both have same Alphabets");
      }
    }
  }
} else {
  console.log("Length is not Same");
} */

/* // ? 3) Matching two String Each Character using inbuilt methods (Correct)
let str1 = "meet";
let str2 = "teme";

if (str1.length == str2.length) {
  let newstr1 = str1.split("").sort().join("");
  let newstr2 = str2.split("").sort().join("");
  if (newstr1 === newstr2) {
    console.log("Both Strings have same alphabets");
  } else {
    console.log("Both Strings don't have same alphabets");
  }
} else {
  console.log("Length is Not Same");
} */

// * 19/01/2023

/* // ? Check Property of Both Objects
const a = {
  name: "abc",
  age: 20,
};

const b = a;
console.log(b);
b.name = "xyz";
console.log(a);
console.log(b);
console.log(a.name); */
