// async function demo() {
//     try {
//         console.log("start");
//         let x = 100;
//         let y = x;
//         console.log(y);
//         const c = 10;
//         // c=90
//         console.log(c);
//         return 1000
//     }
//     catch (error) {
//         console.log(error);
//         console.log("erroe");
//     } finally {
//         console.log("finally");
//     }
// }


// demo()


/*This is a than and chetch */

// async function demo() {
//     console.log("start");
//     let x = 100;
//     let y = x;
//     console.log(y);
//     const c = 10;
//     c=90
//     console.log(c);
//     return 1000
// }





// let res = demo()
// res.then((d) => console.log(d),
//     (e) => console.log(e)
// )







//      await
// => await for the Promise to resolve or rejected than the other code will excuted 
// ->prefixed with Promise


let p1 = Promise.reject("promise resolved")

let demo = async () => {
    try {
        console.log("start");
        await p1;
        let y = 100;
        console.log(100);
        console.log("end");
    } catch (e) {
        console.log("error");
    }
}

demo();
console.log("Hello world");
console.log("welcome");