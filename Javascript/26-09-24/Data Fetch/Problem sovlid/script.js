const Data = fetch("data.json");

Data.then((e) => {
    const userdata = e.json();
    userdata.then((a) => {
        a.map((value, index) => {
            console.log(value)
        })
    }, (rejf) => {
        rejf
    })
},
    (rej) => {
        rej
    })