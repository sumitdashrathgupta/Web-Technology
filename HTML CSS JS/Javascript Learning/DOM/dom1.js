// Dom 
// document(inbuilt object) -> chila of window 
//ID is not present than return give null 
//class is not present in html than return empty html collection is length is 0.
//inertext => Pass text content html element 
//inerhtml => pass text content and also we can pass the child element  
//all the value shouht  be string

// document.getElementById("")=>Id in form of string
// document.getElementsByClassName("")=>class in form of string
// document.getElementsByTagName("")=>tagname in form of string
// document.querySelector("")=>It used target html element with help ID ,class, tag name. which is a first match element give 
// document.querySelectorAll("")=> It used target html element with help ID ,class, tag name. All match element give


let dav1 = document.getElementById("active")
console.log(dav1);

let s1 = document.getElementsByClassName("s1");
console.log(s1);

console.log(Array.isArray(s1));
let convert = Array.from(s1)
console.log(convert);

let [p, q, r] = convert
p.innerHTML = "hello "
q.innerText = "ok"

let para = document.getElementsByTagName("p")
console.log(para);

let se = document.querySelector(".s1")
console.log(se);

let p1 = document.querySelector("p")
console.log(p1);


