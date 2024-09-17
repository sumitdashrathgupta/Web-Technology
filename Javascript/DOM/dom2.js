//classList property=>

//Elementname.classlist.add()=> add atribute value mutiple 
// remove()=> It remove the class name in a html element and return type is void . wecan pass it will remove all the      class name.
// contents( 1 arument)=> retun a boolen valur T/F
// toggle(1 argument), => IT is used to any value is not present class than toggle add and give return true , than any value is present class value than remove and give return falue.

let h1=document.getElementsByTagName('h1')
// h1.setAttribute("class","demo")
h1.className="active"
h1.id="hii"
h1.title="dom 2"

h1.classList.add("dome","f12","active","link")
h1.classList.remove("f12","link")

let r1=h1.classList.content("12")
console.log(r1);
let r2=h1.classList.content("demo")
console.log(r2);

// let r3=h1.classList.toggle("toggle")
// console.log(r3);

let r4=h1.classList.toggle("demo")
console.log(r4);
