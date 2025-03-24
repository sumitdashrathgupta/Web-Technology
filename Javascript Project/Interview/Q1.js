
let Obj = [
    {
        id: 1,
        name: "sumit",
        isActive: true,
        age: 12
    },
    {
        id: 3,
        name: "Amit",
        isActive: true,
        age: 10
    },
    {
        id: 4,
        name: "Javascrip",
        isActive: true,
        age: 30
    },
    {
        id: 2,
        name: "Raj",
        isActive: false,
        age: 5
    },
]


//!level 1

/*let names=[]
for(let i=0;i<Obj.length;i++){
    if(Obj[i].isActive){
        names.push(Obj[i].name)
    }
}
console.log(names)*/

//!Level 2

/*let names=[]
Obj.forEach((v)=>{
    names.push(v.name)
})

console.log(names)*/



// The map() Method returns a new array, whereas the forEach() method does not return a new array .
// The forEach( method is similar to rhe for loop,but it does not have a return value.
// The map() method is similar to the forEach() method,but it return a new array .

// Filter
/*const name1=Obj.filter((v)=>v.isActive).map((v)=>v.name)
console.log(name1)*/
// const name1=Obj.filter((v)=>v.isActive)
// console.log(name1)


//sort Function


const ages = Obj.sort((v) => v.age < v.age ? -1 : 1)
console.log(ages)