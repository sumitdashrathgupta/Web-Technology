// let a = "12";
// console.log(typeof parseInt(a));
// let p1 = parseFloat(a);
// console.log(typeof parseFloat(a));
// console.log(p1);


// let a={name:"sumit",rollno:87}
// let b=new Object();
// b.name="sumit"
// b.sys="work"

// console.log(a);
// console.log(b);



function persone(name, id) {
    this.name = name
    this.id = id
    console.log(`My name is ${name} and my id is ${id}`);

}

let objec=new persone('raj',23)
console.log(objec);