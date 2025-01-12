//SET
// set is inbuilt class
// let s1=new set()
// duplicat value are not allowed


// let arr=[10,20,30,40,10,10,20,50]
// console.log(arr.length);

let s1 = new set([1, 20, 30, "10", 70, "10"]);
// let s1 = new set();

// s1.add(2);
// s1.add(27);
// s1.add(29);
// s1.add("2");
// s1.add(20);
// console.log(s1);

// s1.delete(10)
// console.log(s1.has("10"));
// console.log(s1.size);

// s1.clear();
// let x = s1.value
// console.log(x);

// for (let v of x) {
//     console.log(v);
// }

// let key = s1.key();
// for (let k of key) {
//     console.log(k);
// }


// console.log(s1);

let newset = new set(s1)
console.log(newset);
console.log(...newset);



