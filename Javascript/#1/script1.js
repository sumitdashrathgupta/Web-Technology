// class and contructor

let a = 10
var b = 20;

class Employee {
    static name = "sumit";
    constructor(name, id) {
        this.ename = name;
        this.eId = id;
    }
    static demo(a, b) {
        var x = 10;
        console.log(a, b);
        console.log("hello world");
        return x;
    }
    f1() {
        console.log("non-static method");
        console.log(this.eId);
    }
}

var e1 = new Employee("raj", 22);
console.log(e1);
var e2 = new Employee("joy", 11);
console.log(e2);
var e3 = new Employee("amit", 33);
console.log(e3);

console.log(Employee.demo(2,3));
console.log(Employee.name);