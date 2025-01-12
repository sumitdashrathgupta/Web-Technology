// call , apply , bind () method
// Set the value for this keyword inside the function (named function)
// fn_name.call(object,mulitplay pass)
//             }Set the value from this ,and alsoit will excute the function
// fn_name.apply(object,pass array [])
// fn_name.bind(object refrance)=>set the value obj return function to pass

let obj = {
    name: 'xyz',
    id: 23
}

function f1(a, b) {
    console.log(a, b);
    console.log("start");
    console.log(this);
    console.log("End");
}

// f1().call(obj,200,300)
// f1.apply(obj,[200,600])
let x = f1.bind(obj)
x(300, 600);
console.log(x);