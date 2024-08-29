// It is used pass the unica key inside a object
//symbole are often used to add unigu property key to an object that won't colide with keys any other code might add to the object 

//That enable a from 

let s1 = Symbol("key1")
let s2 = Symbol("key2")
let obj = {}
obj[s1] = "value1"
obj[s2] = "value2"

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));



