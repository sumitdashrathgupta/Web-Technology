// Map object
// -> strore the value in the form of key and value pair
// ->key can any datatype



// let obj = {
//     name: "sumit",
//     id: 321
// }
// obj.key1 = "value";
// console.log(obj);

// console.log(Object.keys(obj));



let arr = [10, 20, 30]
// let m = new Map([[arr, "array value"], [100, "number value"], [true, "boolean value"], ["name", "sumit"],[arr, "array value"]]);
let m = new Map();
m.set(arr, "array value")
m.set(100, "number value")
m.set("name", "sachin")

// console.log(m.size);
// console.log(m)
// console.log(m.get("name"));
// console.log(m.get([10, 20, 30]));
// console.log(m.delete("name"));
<<<<<<< HEAD
// console.log(m.has(100));
=======
// console.log(m.has('name'));
console.log(m);
>>>>>>> 9691a6cb47fdc544799a6c7c02d6c43d897b08cc
// m.clear()
console.log(m);


// m.forEach((v, i, a) => {
//     console.log(v);
//     console.log(i);
//     console.log(a);
// })

// let key = m.keys();
// console.log(key);

// for (let k of key) console.log(k);
// for (let v of m.values()) console.log(v);