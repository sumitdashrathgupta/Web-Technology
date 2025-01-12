class person {
    demo = "value 1"
    static f1 = "value 2"
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    static add(a, b) {
        console.log("static method");
        return a + b
    }

    getname() {
        console.log(this.name);
    }
}

let p1 = new person("sumit", "mail")
console.log(p1.demo);
console.log(person.f1);
console.log(person.add(100, 200));
p1.getname();


//must use super method acces perent element

class Employee extends person {
    constructor(id, skills, name, gender) {
        super(name, gender);
        this.id = id;
        this.skills = skills;
    }
}
let e1 = new Employee(121, ['js', 'sql', 'react'], "xyz", 'femail')
console.log(e1);
e1.getname();
console.log(e1.demo);