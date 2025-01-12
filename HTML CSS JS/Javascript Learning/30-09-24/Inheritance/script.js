let parent = {
    name: "sumit",
    id: 564,
    getName() {
        console.log(this.name);
    },
    setName(n) {
        this.name = n;
    }
}

let child = {
    name: "raj"
};

child.__proto__ = parent;
// child.setName("anaya")
console.log(child.name);
console.log(child.id);
child.getName();