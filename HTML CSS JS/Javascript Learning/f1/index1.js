let f1 = (i) => {
    let a = 12
    console.log(i);
    demo();
    function demo() {
        let s = 13
        console.log(s);
        console.log(a);
        // console.log(d);
        demo1()
        function demo1() {
            // let d = 45 you not access in goble
            console.log(s);
            console.log(i);
        }
    }
}

// f1(2)


function work(){
    let g=14;
    function run(){
        console.log(g);
    }
    return run();
}


let d=work()
console.log(d);

