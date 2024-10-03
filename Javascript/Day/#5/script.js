
"use strict";


//variable hoisting
let a = 50
var b = 10
const c = 24


console.log(a, b, c);
demo()
function demo() {
    let x = 12
    var y = 24
    console.log("demo");
    return x + y;
}


// p=8000
//  ReferenceError:p is not define


// uncaught SyntaxError:Duplicate parameter name not allowed in this context
function f1(n, m, m) {
    console.log(n + m);
}

f1(10, 20, 30)