// let a = 11,
//   b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log(a);
// console.log(b);
// console.log(c);


// let b=true
// b++
// console.log(b);

let count = 0;

function increment() {
    count++;  // Modifies external variable
    return count;
}

console.log(increment()); // Output changes each time
console.log(increment()); // Different output than before
