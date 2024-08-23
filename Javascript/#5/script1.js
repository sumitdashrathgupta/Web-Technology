var b = 12;
function f2() {
    var b = 13
    console.log(this.b);
    console.log(window.b);
}
f2();