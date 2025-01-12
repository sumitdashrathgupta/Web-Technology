// let a=2;
// function outer() {
//     let a = 12;
//     // console.log(b)
//     function inner() {
//         // let b=13
//         console.log(a)
//     }
//     function inner1() {
//         console.log(a)
//     }
//     inner();
//     inner1();
// }

// outer();

// let a = [112, 3234, 35]

// let arr = new Array(12, 554, 86)
// console.log(arr)

// let x = Array.of(13, 5, 3, 4, 6)
// console.log(x)


// class employee {
//     constructor(name, id) {
//         this.name = name
//         this.id = id
//     }
//     namew(a) {
//         console.log(a)
//     }
//     namew1() {
//         console.log(this.name)
//     }
// }

// let x = new employee('sumit', 675)
// console.log(x)
// // console.log(x.namew(12))
// console.log(x.namew1())


// console.log(obj)
// console.log(obj.name)


// let obj1 = new Object({ name: 'sumit', id: 76 })
// console.log(obj1)

// for (let a of obj) {
//     console.log(a)
// }
// console.log(
//     Object.entries(obj)
// )

// console.log(Object.assign(obj,obj1))

// console.log(Array.from(arr))
// console.log(Array.isArray(obj))

// console.log(str.slice(1,3))
// console.log(arr)


let obj = {
    name: 'sumit',
    id: 45,
    string1: 'obj',
    merrid: null,
    merrid1: undefined
}
let obj1 = {
    name: 'amit',
    id: 45,
    string1: 'yyy',
    merrid: undefined
}

let arr = [32, 65, 'sumit', null]
let str = 'sumit'

let a=arr.splice(1,2,'amit')
console.log(a)
console.log(arr)
