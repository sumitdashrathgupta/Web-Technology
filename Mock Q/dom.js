let a = document.getElementsByTagName("span")
let b = document.getElementById("work")
let c = document.getElementsByName("h1")
let d = document.getElementsByClassName("h11")
let e = document.querySelector("span")
let x = document.querySelectorAll("span")


// a.color='red'
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(x)

// console.log(a)
// console.log(b)
// b.forEach((v,i)=>{
//     console.log(v)
// })
// console.log(Array.isArray(a))
// let convert=Array.from(a)
let convert=Array.prototype.slice.call(a)
console.log(convert)
console.log(Array.isArray(convert))