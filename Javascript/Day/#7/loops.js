// console.log("hello world");
// for(let i=1;i<=10;i++)
// {
//     console.log("2 X "+ i+" = ",i*2);
// }

//object

const obj = {
    name: "sumit",
    rollno: 234,
    clss: "bsc it"
}

for (const i in obj) {
    console.log(i);
    console.log(obj[i]);
}
// for (const value of obj) {
//     console.log(value);
// }


//array

var a = [12, 34, 5, 4, 4, 88]
console.log(a);

for (const key in a) {
    console.log(key);
}

for (const element of a) {
    console.log(element);
}

//String

let c = "hello"
for (const key in c) {
    console.log(key);
}

for (const el of c) {
    console.log(el);
}