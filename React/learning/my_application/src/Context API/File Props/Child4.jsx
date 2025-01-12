import React, { useContext } from "react";
import { contextAPI } from "./Child";

const Child4 = () => {
    let Data1 = useContext(contextAPI)
    return (
        <>
            <h3>{Data1[0]}</h3>
            <h3>{Data1[1]}</h3>
            <h3>{Data1[2]}</h3>
        </>
    )
}

export default Child4