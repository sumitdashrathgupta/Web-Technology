// "use strict"
// console.log(age);
// console.log("hello");
// let age=12
// let func = function sayhello(){
//     console.log("hello world");
// }
// func();
// var age=34


function rev(str){
    if(str===""){
        return "";
    }
    else{
        return rev(str.substr(1))
         + str.charAt(0);
    }
}

console.log(rev("hello"));
var j="sumit"
console.log(j.substring(-1));