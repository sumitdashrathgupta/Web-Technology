import React from "react";
import { useParams } from "react-router-dom";

const UserD=()=>{
    // let Data=useParams()
    let {data}=useParams()
    return(
        <>
            {/* <h1>{Data.data}</h1>    */}
            <h1>{data}</h1>   
            <h2>Information</h2>     
        </>
    )
}

export default UserD