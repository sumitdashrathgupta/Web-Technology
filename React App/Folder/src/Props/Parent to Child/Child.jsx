import React from "react";

const Child=({name,id,skills,demo})=>{
    return(
        <>
        <h4>Child</h4>
        <h2>Name : {name}</h2>
        <h3>ID : {id}</h3>
        <h3>Skills : {skills.map((v,i)=>{
            return <li key={i+1}>{v}</li>
        })}</h3>
        <h3>Funcation : {demo}</h3>
        </>
    )
}

export default Child