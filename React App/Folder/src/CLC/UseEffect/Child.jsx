import React, { useEffect } from "react";

const Child = ({ count }) => {

    useEffect(() => {
        console.log("Child")
        return () => {
            console.log("Unmount ")
        }
    }, [])
    return (
        <>
            <h1>Count : {count}</h1>
        </>
    )
}

export default Child