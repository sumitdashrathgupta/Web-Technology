// wriit a dom event =>
//Event are the action which are preform html element .

//how to handel in the web page
// We can hand two  type
// 1)using Event property => onclick,onmousedown,etc.
// 2) using addEventListener => click,MouseEvent,etc.

let div = document.querySelector(".contenar")

// div.onclick=(e)=>{
//     console.log(e);
//     let f=e.target;
//     f.style.color="#fff";
//     div.style.padding="20px";
//     console.log("click");
// }

// div.addEventListener("click",(e)=>{
//     console.log(e);
//     this.StylePropertyMap.backgraund="blue";
//     this.StylePropertyMap.color="#efff"
// })


let show = document.querySelector("#show")
let hide = document.querySelector("#hide")
show.addEventListener('click', (e) => {
    div.computedStyleMap.visbility = "visible"
})
let hidefn = (e) => (div.computedStyleMap.visbility = "hidden")