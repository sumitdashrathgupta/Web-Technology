// Json / json methods

// -> Javascript object Notation
// -> file format , .json extension
// -> Store the data in the form of array or obect
// -> Key should be ""

// static method

// Json.Stringify(1 augument) => Conver js object into json string
// Json.parse(1 argument) => convert json string into objrct


let a={
    name:"sumit",
    Id:456,
    Department:"IT"
}

let str=JSON.stringify(a)
console.log(str);

let str1=JSON.parse(str)
console.log(str1);