//? V
// *
// *
// *
// *
/*console.log("*")
console.log("*")
console.log("*")
console.log("*")
console.log("*")*/

//? H  *******
/*process.stdout.write("* ")
process.stdout.write("* ")
process.stdout.write("* ")
process.stdout.write("* ")
process.stdout.write("* ")
process.stdout.write("* ")*/


//! Base Pattern
/*const n=5

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        process.stdout.write(" * ")
    }
    console.log()
}*/

// o/p :
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *


/*
let n=10

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(" * ")
    }
    console.log()
}*/

//  * 
//  *  *
//  *  *  *       
//  *  *  *  *    
//  *  *  *  *  * 


let n=5

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j+ " ")
    }
    console.log()
}