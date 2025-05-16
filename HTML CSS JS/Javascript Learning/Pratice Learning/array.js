//* Array

let obj = {
    name: "sumit",
    rollno: 34,
    gender: "male"
}
let arr = [23, "sujdu", null, undefined, "work", 8628]
// console.log(obj);
// console.log(arr);
// console.log(Object.entries(obj));  //It will be conver object to 2D array
// console.log(Object.entries(obj).flat());  //It will be conver object to array
// console.log(Object.keys(obj));  //It will be conver object to array key 
// console.log(Object.values(obj));  //It will be conver object to array value
// console.log(Array.isArray(obj)); // It will be true or false
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr.slice(2,4));
// console.log(arr.join(" ")); //It will be array to string
// console.log(arr.push(34));
// console.log(arr.unshift(45));
// console.log(arr.shift(2,3));
// console.log(arr.pop());

// let a = arr.splice(2, 2, 55, 67); //splice(index,delect count ,add value)
// console.log(a);
// console.log(arr);
// console.log(arr.indexOf(null));
// console.log(arr);
// console.log(arr.concat(arr));


// let arrr = [34, [56], [76, 45], 76] 
// console.log(arrr.flat());
// let arrr = [34, 56, 76, 45, 76]
// console.log(arrr.reverse()); //Array Reverse
let str="javascript"
// console.log(str.split(""))
// console.log(str.split("").reverse().join(""));  // String Reverse
// console.log(str.split(""))

let arrr = [34, 56, 76, 45, 76]
// console.log(arrr.fill(33,2,4));




// console.log(arr.join(" ")); //It will be array to string
// console.log(str.split(""))  //It will be string to array
// console.log(Object.entries(obj).flat());  //It will be conver object to array
let ss=Object.entries(arrr)
console.log(Object.fromEntries(ss)) // It will be convert array to object