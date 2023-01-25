// * Pattern Program
// * ---------------

/* // ? 1) Left Triangle
let n = 5;
let i;
let newstring = "";
for (i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    newstring += "* ";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 2) Right Triangle
let n = 5;
let newstring = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    newstring += " ";
  }
  for (let k = 0; k < i; k++) {
    newstring += "*";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 3) Pyramid Pattern
let n = 5;
let newstring = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    newstring += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    newstring += "*";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 4) Reverse Pyramid Pattern
let n = 8;
let newstring = "";
for (let i = 0; i < n; i++) {
  // ? Loop to print spaces on left side only
  for (let j = 0; j < i; j++) {
    newstring += " ";
  }
  // ? printing starts
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    newstring += "*";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 5) Hourglass Star Pattern
let n = 5;
let newstring = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    newstring += " ";
  }
  // printing star
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    newstring += "*";
  }
  newstring += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    newstring += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    newstring += "*";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 6) Reverse Left Triangle
// let n = 8;
// let newstring = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= i; j++) {
//     newstring += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     newstring += "*";
//   }
//   newstring += "\n";
// }
// console.log(newstring); */

/* // ? 7) Inverted Left Triangle
let n = 10;
let i;
let newstring = "";
for (i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    newstring += "*";
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 8) Reverse Hourgalss
let n = 10;
let newstr = "";
let i;
for (i = 1; i <= n; i++) {
  for (j = 0; j < n - i; j++) {
    newstr += " ";
  }
  for (k = 0; k < 2 * i - 1; k++) {
    newstr += "*";
  }
  newstr += "\n";
}
for (let i = 1; i < n; i++) {
  // ? Loop to print spaces on left side only
  for (let j = 0; j < i; j++) {
    newstr += " ";
  }
  // ? printing starts
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    newstr += "*";
  }
  newstr += "\n";
}

console.log(newstr); */

/* // ? 9) Number Increment in Every Row
let i, j;
let n = 12;
let k = 1;
let newstr = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    newstr += " ";
    if (k <= 9) {
      newstr += "0" + k;
    } else {
      newstr += k;
    }
  }
  newstr += "\n";
  k++;
}
console.log(newstr); */

/* // ? 10) Number Increment After Every Number
let i, j;
let n = 14;
let k = 1;
let newstr = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    newstr += " ";
    newstr += k++;
  }
  newstr += "\n";
}
console.log(newstr); */

/* // ? 11) Binary Number
let i, j;
let n = 5;
let newstr = "";
let num;
for (i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    num = 0;
    for (j = 1; j <= n; j++) {
      newstr += num;
      num = num == 0 ? 1 : 0;
    }
  } else {
    num = 1;
    for (j = 1; j <= n; j++) {
      newstr += num;
      num = num == 0 ? 1 : 0;
    }
    newstr += "\n";
  }
}
console.log(newstr); */

/* // ? 12) Hollow Diamond Pattern
let i, j;
let newstr = "";
let n = 5;

for (i = 0; i < n; i++) {
  for (j = 0; j < 2 * n; j++) {
    if (i + j <= n - 1) {
      newstr += "*";
    } else {
      newstr += " ";
    }
    if (i + n <= j) {
      newstr += "*";
    } else {
      newstr += " ";
    }
  }
  newstr += "\n";
}
for (i = 0; i < n; i++) {
  for (j = 0; j < 2 * n; j++) {
    if (i >= j) {
      newstr += "*";
    } else {
      newstr += " ";
    }

    if (i >= 2 * n - 1 - j) {
      newstr += "*";
    } else {
      newstr += " ";
    }
  }
  newstr += "\n";
}
console.log(newstr); */

/* // ? 12.1) Hollow Diamond Pattern Alternative
function diamond5(n) {
  let col = n * 2 - 1;
  for (let i = 1; i < n; i++) {
    let s = "";
    for (let j = 1; j <= col; j++) {
      if (j >= n + 1 - i && j <= n - 1 + i) {
        s += " ";
      } else {
        s += "*";
      }
    }
    console.log(s);
  }
  for (let i = n - 2; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= col; j++) {
      if (j >= n + 1 - i && j <= n - 1 + i) {
        s += " ";
      } else {
        s += "*";
      }
    console.log(s);
  }
}
diamond5(5); */

/* // ? 13) Swastika Pattern
let i, j;
let n = 9;
let mid = parseInt(n / 2 + 1);
let newstr = "";
// console.log(mid);
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    if (
      i == mid || // ? Mid Horizontal Line
      j == mid || // ? Mid Vertical Line
      (i == 1 && j >= mid) || // ? Top Right
      (j == 1 && i <= mid) || // ? Top Left
      (i == n && j <= mid) || // ? Bottom Left
      (j == n && i >= mid) // ? Bottom Right
    ) {
      newstr += "* ";
    } else {
      newstr += "  ";
    }
  }
  newstr += "\n";
}
console.log(newstr); */

/* // ? 14) Pyramid with Alternative Alphabets from A-Z
let row = 18;
let newstring = "";
let large = 97;
let small = 65;
let c = 1;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < row - i; j++) {
    newstring += " ";
  }
  for (let k = 0; k <= i; k++) {
    if (small > 90) {
      small = 65;
      c = 1;
    }
    if (large > 122) {
      large = 97;
      c = 1;
    }
    if (c % 2 == 0) {
      newstring += String.fromCharCode(small) + " ";
      small++;
      large++;
      c++;
    } else {
      newstring += String.fromCharCode(large) + " ";
      small++;
      large++;
      c++;
    }
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 15) Fibonacci Series in Diamond Pattern
let a = 0;
let b = 1;
let row = 5;
let newstring = "";
for (let i = 1; i <= row; i++) {
  for (let j = 0; j < row - i; j++) {
    newstring += "  ";
  }
  for (let k = 1; k <= i; k++) {
    if (a <= 10) {
      newstring += "0" + a + "  ";
      let ans = a + b;
      a = b;
      b = ans;
    } else {
      newstring += a + "  ";
      let ans = a + b;
      a = b;
      b = ans;
    }
  }
  newstring += "\n";
}
console.log(newstring); */

/* // ? 16) Pyramid Pattern (both sides 1 common)
let n = 5;
let newstring = "";
for (let i = 1; i <= n; i++) {
  let x = 1;
  for (let j = i; j <= n; j++) {
    newstring += "  ";
  }
  for (j = 1; j < i; j++) {
    newstring += x++ + " ";
  }
  for (j = 1; j <= i; j++) {
    newstring += x-- + " ";
  }
  newstring += "\n";
}
console.log(newstring); */
