import React, { useEffect, useState } from "react";

const Man = () => {
    let [data1, setdata1] = useState({})
    useEffect(() => {
        async function demo() {
            let data = await window.fetch("https://api.escuelajs.co/api/v1/products")
            let finaldata = await data.json()
            setdata1(finaldata)
        }
        demo()
    },[])
    let { title, price, images, description } = data1;
    console.log(data1)
    return (
        <>
            <div className="contenar-card">
                <div className="card">
                    <h3>{title}</h3>
                    <img src={images} alt=""/>
                    <h3>{price}</h3>
                    <h4>{description}</h4>
                </div>
            </div>
        </>
    )
}

export default Man