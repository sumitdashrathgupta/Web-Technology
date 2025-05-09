/*let a=12
let b=2
console.log("The sum of a and b is "+a+b);
console.log("The sum of a and b is "+(a+b));*/

//! Type Coercion
console.log("1" + 1); //11
console.log("1" - 1); //0
//? it will be converted in "1" into number 1 internal that means type coercion
console.log("2" * 1); //2
console.log("1" / 1); //1

//! Type casting

// let age = Number(prompt("Enter the age"));
//? age=Number(age)
// console.log(age);

//! Swap two variable via 3 method

let a = 12;
let b = 20;
let c;
console.log(a, b);
c = a;
a = b;
b = c;
console.log(a, b);

//! Swap two variable via 2 method

let x = 10;
let y = 20;

console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);


x = x + y; //30
y = x - y; //10
x = x - y;

console.log(x, y);


