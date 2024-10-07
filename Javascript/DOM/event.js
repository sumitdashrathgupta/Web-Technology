// wriit a dom event =>
//Event are the action which are preform html element .

//how to handel in the web page
// We can hand two  type
// 1)using Event property => onclick,onmousedown,etc.
// 2) using addEventListener => click,MouseEvent,etc.

// let div = document.querySelector(".contenar")
//                                                                  click Event
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


// let show = document.querySelector("#show")
// let hide = document.querySelector("#hide")
// show.addEventListener('click', (e) => {
//     div.computedStyleMap.visbility = "visible"
// })
// let hidefn = (e) => (div.computedStyleMap.visbility = "hidden")



//                                                          Mouseover & mouseout

// const mousevent=document.querySelector(".box")


// mousevent.addEventListener('mouseover',()=>{
//     mousevent.style.background="blue";
// })
// mousevent.addEventListener('mouseout',()=>{
//     mousevent.style.background="green";
// })

//                                                              Keybord Event

// const input = document.querySelector('#text')

// input.addEventListener('keyup',(e)=>{
//     console.log(e);
// })

// input.addEventListener('keydown',(e)=>{
//     console.log(e);
// })

// input.addEventListener('keypress',(e)=>{
//     console.log(e);
// })

// input.addEventListener('keydown', () => {
//     let random = Math.floor(Math.random() * (9999 - 1000) + 1000);
//     document.body.style.background = ` #${random} `
// });

// Submit Event => Submit event will be apply only for the form tag . Submit event will be trager wen user submit the form.
// sumit event will return the event object as  event .


// const forme = document.getElementsByClassName("form-control");
// const user = document.getElementById('username');
// const pass = document.getElementById('password');

// forme.addEventListener("submit", function (e) {
//     e.prevenDefault();
//     console.log(user.value);
//     console.log(pass.value);
// });

