function Employee(name,id){
    this.enmae=name;
    this.eId=id;
}

let e1=new Employee("sumit",24);
console.log(e1);
console.log(e1.enmae);
console.log(e1.eId);


// static methods in object
// freeze(),seal(),isFrozen(),isSealed(),keys(),values(),entries(),assign()



const obj = {
    name: "sumit",
    last: "gupta",
    rollno: 235,
    bro: {
        key: "value",
        int: 345
    }
}

// console.log(obj);
// console.log(obj.name);
// obj.name = "amit"
// console.log(obj);
// console.log(obj);
// Object.seal(obj);
// Object.freeze(obj)
// obj.name = "amit"
// console.log(obj);
// delete obj.bro
// console.log(obj);




