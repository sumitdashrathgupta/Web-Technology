let username = document.querySelector('#input_data')
let search = document.querySelector('#btn')
let display_data = document.querySelector('.section2')

search.addEventListener('click', (e) => {
    e.preventDefault();
    calldata(username.value);
    username.value = '';
})


async function calldata(data) {
    try {

        user = await fetch('https://dummyjson.com/products/search?q=' + data)
        finaldata = await user.json();
        if ((finaldata.status == '404') && (finaldata.message == `Product with id ${data} not found`)) {
            display_data.innerHTML = ` 
            <h1>404</h1>
            <p>User Not Found</p>`
        }
        else {
            let { title, description, category, price, thumbnail, id } = finaldata
            display_data.innerHTML = `
               <div class="first">
                    <img src=${thumbnail} alt="product  Image">
                </div>
                <div class="second">
                    <p><strong>ID :</strong> ${id}</p>
                    <h2> <strong>Title :</strong> ${title}</h2>
                    <p><strong>price :</strong>₹ ${price} </p>
                    <p><strong>category :</strong> ${category} </p>
                    <p><strong>description :</strong> ${description}</p>
                </div>
        `
        }
    }
    catch (error) {
        console.log(error)
    }
}
