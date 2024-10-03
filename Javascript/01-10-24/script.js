
// callback quse => settimeout,setinterval
// micro quse=> promise

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






//          web API
// Web api are collection broserse prodir inter face that alwty to javascript to inter with broser
// and profor the task
// eX of web API in javascript or dom , fetch api, timer and local or seccistion staoar

// cell back cube
// => It is cubll of task are excuted after the current the call is by the javascript EventTarget
// after the the task in the micro task cubll

// //micro is like call back but has more all the call back coming throth promise will go inside cubll for ex: fetch method event loops

//Event loops
// conten process event chech of the call back cubbl with the call stack static of the coll back cube
// In the call static is emet yhe event loops first task call back cullb micro back from the and push into call static
// than the call back excuted in the order it was to cube 
