import React, { useState } from "react";
import Child from "./Child"

const Parent = () => {
    let [date, setdata] = useState("test")

    let sendData = (value) => {
        setdata(value)
    }
    return (
        <>
            <h1>Data :{date}</h1>
            <Child sendData={sendData} />
        </>
    )
}

export default Parent