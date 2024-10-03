// const obj={
//     name:"Sumit",
//     Id:567,
//     student:function(){
//         console.log(`My name is ${this.name}`);
//         console.log(this);
//         return this.Id;
//     }
// }

// console.log(obj.student());
// console.log(this);



// let a = (x) => {
//     console.log("This value is a IIF " + x);
// }


// let a = () => {
//     let x = 22
//     let y = 90
//     console.log("hello world");
//     name()
//     function name() {
//         let age = 18
//         console.log("other thing");
//         name1()
//         function name1() {
//             console.log(x);
//             name2()
//             function name2() {
//                 console.log(y);
//                 console.log(age);
//             }
//         }
//     }
//     return "done"
// }

// const ok=a();
// console.log(ok);


//clouer
/*function outer() {
    var a = 12
    function inner() {
        console.log(a);
    }
    return inner;
}
let b = outer();
console.log(b());*/

(function sum(x,y){
    console.log(x+y);
})
(2,4);