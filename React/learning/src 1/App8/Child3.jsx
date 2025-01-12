import React, { useContext } from "react";
import { DataContexte } from "./Child1"
const Child3 = () => {
    let Data = useContext(DataContexte)
    return (
        <>
            <h1>Myself :{Data}</h1>
        </>
    )
}

export default Child3