import React from "react";

const Login = (props) => {
    return(
        <>
        <h1>Name: {props.username}</h1>
        <h2>ID : {props.id}</h2>
        </>
    )
}

export default Login