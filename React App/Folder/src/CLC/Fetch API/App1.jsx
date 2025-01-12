import { useState, useEffect } from "react";

const App1 = () => {
    let [Data, setData] = useState([])

    useEffect(() => {
        async function Demo() {
            let FetchProduct = await window.fetch('https://dummyjson.com/products')
            let FinalProduct = await FetchProduct.json()
            setData(FinalProduct.products)
            console.log(FinalProduct.products)
        }
        Demo()
    }, [])

    return (
        <>
            {Data.map((v, i) => {
                let { price, title, images,
                    description } = v
                return (
                    <div key={i + 1}>
                        <img src={images[0]} alt={images} />
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <h2>{description}</h2>
                    </div>
                )
            })}
        </>
    )

}

export default App1