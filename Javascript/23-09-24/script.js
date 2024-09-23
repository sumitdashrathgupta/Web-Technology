// This Keyword
// Globle(outside function and block ) => window
//inside function(Except arror)=> window (not using "use strict")
// "   "  => undefind (using use strict)
//inside arror function => parentt scope this keyword value
// inside the constractor => current creating object.
// inside the object,inside the function()=>current object
// addEventListener - anoanymes -> target Element


//              Start



//"use strict"
//                          1)
console.log(this);
console.log(this === window);


//                      2,3,4)


let obj = {
    name: "xyz", id: 45
}
function demo() {
    console.log(this);
    let f1 = () => {
        console.log(this);//!parent scope this keyword value
    }
    f1();
}
let x = demo.bind(obj);
x();

// 5)

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id
        console.log(this);
    }
}

let e1 = new Employee("sumit", 676)
let e2 = new Employee("raj", 986)

// 6)

let std = {
    name: "zxt",
    id: 67,
    skill: ['java', 'js'],
    demo: function () {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
        };
        b();
    },
    arr:()=>{
        console.log(this);
    }
}
std.demo()
std.arr()



//              7)    addEventListener
let check = document.querySelector('.contenar')
check.addEventListener('click', (e) => {
    console.log(this);
    console.log(e.target);
})