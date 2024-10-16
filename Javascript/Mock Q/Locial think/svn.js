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
// std.demo()
std.arr()