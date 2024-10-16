let username = document.querySelector('#input1')
let search = document.querySelector('.btn')
let display_data = document.querySelector('.section2')

search.addEventListener('click', (e) => {
    e.preventDefault();
    calldata(username.value);
    username.value = '';
})


async function calldata(data) {
    try {

        user = await fetch(` https://api.github.com/users/` + data)
        finaldata = await user.json();
        if (finaldata.status == '404') {
            display_data.innerHTML = ` 
            <h1>404</h1>
            <p>User Not Found</p>`
        }
        else {
            let { avatar_url, name, id, location, html_url, bio, company } = finaldata
            display_data.innerHTML = `
                <div class="image">
                    <img src=${avatar_url} alt="user Image"> 
                </div>
                <div class="information">
                   <p>Name : ${name}</p>
                   <p>Company : ${company}</p>
                   <p>Id : ${id}</p>
                   <p>Bio : ${bio}</p>
                   <p>Location : ${location}</p>
                   <p><a href=${html_url} target='_blank' >More Details ..</a>  </p>
                </div>
        `
        }
    }
    catch (error) {
        console.log(error)
    }
}
console.log(display_data)