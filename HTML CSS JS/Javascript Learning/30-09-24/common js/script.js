// Modules
// -> common js Modules => server 
// -> ES6 Modules => broser

// -> default export - 1 data
// -> named export - multiple data

let add = (a, b) => {
        return a+b;
};

let sub = (a, b) => {
        if (a > b) console.log(a - b);
        console.log(b - a);
};

let data = [10, "str", 100n, true, () => "arr", null]

module.exports = {
        add, sub, data
};