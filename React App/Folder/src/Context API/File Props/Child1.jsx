import React from "react";
import Child2 from "./Child"

const Child1 = (props) => {
    return (
        <>
            <Child2 name={props.name} id={props.id} />
        </>
    )
}

export default Child1;