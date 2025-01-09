import React from "react";
import { useParams } from "react-router-dom";

const Userditels = () => {
    let {data} = useParams(" ");
    console.log(data)
    return (
        <>
            <h1>data : {data}</h1>
        </>
    )
}

export default Userditels