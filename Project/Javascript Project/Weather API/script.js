let btn1 = document.querySelector(".btn")
let input_value = document.querySelector("#Weather-location")

btn1.addEventListener('click', (e) => {
    if (input_value.value != '' && input_value != null)
        featchdata(input_value.value)
    input_value.value = '';
})


async function featchdata(cityname) {
    try {
        data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=555192fcd9326ed09e6010d04a32b774`);
        Finaldata = await data.json();
        let displayname = document.querySelector('p');
        let displaydgree = document.querySelector('span');
        let image = document.querySelector('img');
        let { name, main, wind, weather } = Finaldata
        displayname.innerHTML = name;
        displaydgree.innerHTML = parseInt(main.temp - 273.15) + "°C";
        image.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    }
    catch (Error) {
        console.log(Error);
    }
}