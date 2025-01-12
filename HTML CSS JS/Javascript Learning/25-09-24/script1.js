// Promise static method
// Promise.resolve()
// Promise.reject()


let p1 = Promise.resolve("promise resolve");
console.log(p1);

let p2 = Promise.reject("promise reject");
p2.then((value) => {
    console.log(value);
}, (reson) => {
    console.log(reson);
})