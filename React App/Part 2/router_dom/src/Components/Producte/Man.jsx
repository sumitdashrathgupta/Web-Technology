import React, { useEffect, useState } from "react";

const Man = () => {
    const [data1, setData1] = useState([]);

    useEffect(() => {
        async function demo() {
            let data = await window.fetch("https://api.escuelajs.co/api/v1/products");
            let finalData = await data.json();
            setData1(finalData);
        }
        demo();
    }, []);

    return (
        <>
            {data1.map((v, i) => {
                const { title, price, images, description } = v;
                return (
                    <div className="contenar-card" key={i+1}>
                        <div className="card">
                            <h3>{title}</h3>
                            <img src={images[2]} alt={title} />
                            <h3>{price}</h3>
                            <h4>{description}</h4>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Man;
