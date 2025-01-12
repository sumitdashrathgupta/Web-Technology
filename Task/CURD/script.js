const button_btn = document.querySelector(".btn");
const data = document.querySelector("#input_name");
const name_add = document.querySelector(".section_s2");
const para=document.getElementsByTagName("p");

button_btn.addEventListener('click', () => {
    let finaldata = data.value;
    name_add.innerHTML += ` <div class="list">
                    <p>${finaldata}</p>
                </div>`               
    data.value = ' ';
})

para.addEventListener('click',(e)=>{
    const removedata=e.target;
    removedata.remove();
})





