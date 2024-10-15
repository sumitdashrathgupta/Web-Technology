const tbody = document.querySelector("tbody")
const Data = fetch("data.json");

Data.then((a) => {
    let userdata = a.json();
    userdata.then((x) => {
        x.map((value, index) => {
            const { id, name, mobile, payment, status } = value;
            tbody.innerHTML += `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${mobile}</td>
            <td>${payment}</td>
            <td>${status}</td>
            </tr>`
        })
    }, (e) => {
        e
    })
},
    (rej) => {
        rej
    })