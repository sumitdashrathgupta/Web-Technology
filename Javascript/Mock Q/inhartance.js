setTimeout(() => {
    console.log("hello");
}, 0)

let p1 = Promise.resolve("resolve promise");
p1.then((e) => console.log(e),
    (d) => console.log(d)
);

let p2 = new Promise((res, rej) => {
    let r = true
    if (!r) res("resolve promise")
    else rej("reject promise")
})

let demo = async () => {
    try {
        console.log("start");
        await p2;
        console.log("ends");
    }
    catch (error) {
        console.log(error);
    }
}

demo();
console.log("hello world");
console.log("hello world1");

