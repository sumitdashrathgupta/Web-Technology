//object

// //  //const obj = {
// //     //  name: "sumit",
// //     //  rollno: 234,
// //     //  clss: "bsc it"
// //  //}

// // //for (const i in obj) {
// //  //     console.log(i);
// //     // console.log(obj[i]);
// //  //}

// const a=[12,22,33,43,56,76]

// for(let i= 0;i<a.length;i++){
// console.log(i);
// }

//static method
// object.assign( target,source)
//1) It is used to merge one or multiple object
// 2)It will tack 2 or mulple argument first argument is target value than other is a source value 


let obj={
    name:"sumit",
    id:233,
    percentage:54
}

let sys={
    roll:345,
    location:"thane"
}

let s=Object.assign(obj,sys)
console.log(obj);
console.log(sys);
console.log(s);








