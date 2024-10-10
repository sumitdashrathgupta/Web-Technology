const data = window.fetch("first.json");

data.then((e) => {
    let jsondata = e.json();
    jsondata.then((a) => {
        let tbody = document.querySelector("tbody");
        // console.log(tbody)
        a.map((value, index) => {
            let { name, id, address, number } = value
            // console.log(value)
            tbody.innerHTML += `
       <tr>
       <td>${name}</td>
        <td>${id}</td>
         <td>${address}</td>
          <td>${number}</td>
       </tr>`
        });
    }, (rej) => {
        rej
    })
},
    (resong) => {
        resong
    })