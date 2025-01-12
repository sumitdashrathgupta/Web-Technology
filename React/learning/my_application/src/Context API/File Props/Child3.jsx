import React, { useContext } from "react";
import { contextAPI } from "./Child";

const Child3 = () => {
    let Data = useContext(contextAPI)
    return (
        <>
            <h1>Name:{Data[0]}</h1>
            <h1>Id : {Data[1]}</h1>
            <h1> {Data[2].map((v, i) => {
                return <li key={i + 1}>{v}</li>
            })}</h1>
        </>
    )
}

export default Child3;