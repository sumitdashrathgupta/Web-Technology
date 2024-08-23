console.log("Hello world");



//This is a datd type= primitive data type

var a = 12
var b = "sumit"
var c = true
var d = null
var e
var f = 1233n
var g = Symbol(12)

console.log(typeof a);//number
console.log(typeof b);//String
console.log(typeof c);//boolean
console.log(typeof d);//object
console.log(typeof e);//undefined
console.log(typeof f);//bigint
console.log(typeof g);//symbol



// This is a non primitive data type

var object = {
    name: 'sumit',
    roll_no: 124,
    class: 'bsc IT'
}
console.log(object);
console.log(object.class);


let array_ex=[12,34,'sumit',43535n,true,Symbol(12),null]
console.log(array_ex);

for (const element of array_ex) {
    console.log(element," = ",typeof element);
}