// setInterval()  at 1 or setTimeout() at multiple
// => Used to property some task after time delay

/*=> Both method and 2 or multiple argument 
1) - callback function -> Will excute after the time delay
2) - time delay(in ms)
3) - argument for parametria for the callback funcation

((a,b)=>{
    clg()
    },
    5000,
    a,
    b)

- Both are present inside the window object

-> stop - cleartimeout()
        - clearinterval()
 */


let STD = window.setTimeout(
    (a, b) => {
        console.log("hello world");
        console.log(a, b);
    }, 5000, 100, 200
)
console.log(STD);

let SI = (
    () => {
        console.log("Hello world");
        document.write("hello world" + "<br>")
    }, 1000);
console.log(SI);
console.log("str");


setTimeout(() => {
    clearInterval(SI)
}, 10000)