import React, { useEffect } from "react";

const Child = ({ count }) => {
    useEffect(() => {
        console.log("child mounted");
        return () => {
            console.log("component unmountrd");
        }
    }, [])

    return (
        <>
            <h1>Child component -{count}</h1>
        </>
    )
}

export default Child;