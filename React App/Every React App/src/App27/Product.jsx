//! How to perform side effects using useeffect hook:

import React from "react";
import { useState } from "react";
import { useEffect } from "react";



const Product = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        console.log("mounted");
        async function fetch() {
            let d = await window.fetch("https://dummyjson.com/products")
            let fd = await d.json()
            setData(fd.products)
            console.log(fd);
        }
        fetch();
    }, [])

    return (
        <>
            <div className="container">
                <article>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Discription</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v, i) => {
                                let { id, title, description, thumbnail, price } = v;
                                return (
                                    <>
                                        <tr key={i + 1}>
                                            <td>{id}</td>
                                            <td>{title}</td>
                                            <td>{description}</td>
                                            <td>{thumbnail}</td>
                                            <td>{price}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </article>
            </div>
        </>
    )
}


export default Product;