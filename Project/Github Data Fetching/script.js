let user = document.querySelector("#user");
let btn = document.getElementById("btn")

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getData(user.value)
});

async function getData(user) {
    try {
        let data = await window.fetch('' + user);
        let finalData = await data.json();
        console.log(finalData);
        let display = document.querySelector(".display-data");

        if (finalData.status == "404" && finalData.message == "Not Found") {
            display.innerHTML = `<h1>User Details Not Found</h1>`
        }
        else {
            let { name, company, login, location, avatar_url, bio, id, html_url } = finalData
            display.innerHTML = `<img src=${avatar_url} alt=${id}/>
            <p>Name : ${name}</p>
            <p> Company : ${company}</p>
            <p>Location : ${location}</p>
            <button>
            <a href=${html_url}> More Dely</a>
            </button>
            `;
        }
    } catch (error) {
        console.log('error');
    }
}
