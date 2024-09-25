 //Promise 
let p1 = new Promise((res, rej) => {
    var breakupres = true;
    if (breakupres) res("promise resolved");
    else rej("promise rejected");
});

console.log(p1);

p1.than((value) => {
    // resolved
    console.log(value);
    console.log("sumit breakup with pratiksh and did romance before");
})
.catch((reason) => {
    // rejected
    console.log(reason);
    console.log("sumit breakup not happened and he back stabbed swpni(sune");
})
.finally(() => {
    console.log("any how he did romance");
})