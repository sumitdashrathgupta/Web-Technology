// Promise Static method
// 1 all()
// 2 any()
// 3 allsettled()
// 4 race()

let p1 = Promise.resolve("resolve 1")
let p2 = Promise.reject("reject 1")

let p3 = new Promise((res, rej) => {
    let r = true
    if (r) rej("reject promise")
    else res("resolve sromise 2")
});


console.log(p1);
console.log(p2);
console.log(p3);



//static method in promise


//All
// let r1 = Promise.all([p1, p2, p3])
// console.log(r1);
// r1.then(
//     (d) => console.log(d),
//     (e) => console.log("reject error")
// )


//Any
// let r2 = Promise.any([p2, p3])
// r2.then((d) => console.log(d),
//     (e) => console.log(e)
// )


//allSettled
// let r3=Promise.allSettled([p1,p2,p3])
// console.log(r3);


//Race
let p11 = new Promise((res, rej) => {
    setTimeout(() => res("resolve promise 1"), 2000);
    setTimeout(() => rej("reject promise 1"), 4000);
})
let p12 = new Promise((res, rej) => {
    setTimeout(() => res("resolve promise 2"), 500);
    setTimeout(() => rej("reject promise 2"), 1000);
})

let r2 = Promise.race([p12, p11]);
console.log(r2);



//Argument Object


function demo() {
    console.log(arguments);
    console.log(Array.isArray(arguments));
    console.log(...arguments);
    console.log(Array.from(arguments));
}

demo(12, 3, 5, 5, 3, 4);