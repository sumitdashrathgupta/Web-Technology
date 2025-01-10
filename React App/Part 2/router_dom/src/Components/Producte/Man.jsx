import React, { useEffect, useState } from "react";

const Man = () => {
    let [data1, setdata1] = useState([])
    useEffect(() => {
        async function demo() {
            let data = await window.fetch("https://api.escuelajs.co/api/v1/products")
            let finaldata = await data.json()
            setdata1(finaldata)
            console.log(finaldata)
        }
        demo()
    }, [])
    return (
        <>
            {data1.map((v, i) => {
                let { title, price, images, description } = v;
                return (
                    <div className="contenar-card" key={i + 1}>
                        <div className="card" >
                            <h3>{title}</h3>
                            <img src={images[1]} alt={title}  className="imgside"/>
                            <h3 className="pric">{price}</h3>
                            <h4 className="desc">{description}</h4>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Man