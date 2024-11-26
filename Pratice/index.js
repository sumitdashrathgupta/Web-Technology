let p1 = Promise.resolve("Is Done")
let p2 = Promise.reject("Is Not Done")

// console.log(p1)
// // console.log(p2)


let p3 = new Promise((res, rej) => {
    let r = true
    if (r) rej("reject promise")
    else res("resolve sromise 2")
});

// p3.then((W) => console.log(W+" Done"),
//     (e) => console.log(e+" Not")
// )


let f1=Promise.all([p1,p2,p3])
console.log(f1)