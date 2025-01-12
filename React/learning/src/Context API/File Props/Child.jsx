import React from "react";
import Child1 from "./Child"

const Child = (props) => {
    return (
        <>
            <Child1 name={props.name} id={props.id} />
        </>
    )
}

export default Child;