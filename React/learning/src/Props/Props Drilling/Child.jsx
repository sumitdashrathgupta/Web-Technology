import React from "react";
import Child1  from "./child1"

const Child=(props)=>{
    return(
        <>
        <Child1 username={props.username} id={props.id}/>
        </>
    )
}

export default Child