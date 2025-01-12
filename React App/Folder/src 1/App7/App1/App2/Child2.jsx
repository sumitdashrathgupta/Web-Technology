
import React from "react";
import Child3 from "./App3/Child3";
const Child2 = ({ name, id }) => {
    return (
        <>
            <Child3 name={name} id={id} />
        </>
    )
}

export default Child2;