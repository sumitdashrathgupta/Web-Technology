import React from "react";
import Child3 from "./Child"

const Child2 = (props) => {
    return (
        <>
            <Child3 name={props.name} id={props.id} />
        </>
    )
}

export default Child2;