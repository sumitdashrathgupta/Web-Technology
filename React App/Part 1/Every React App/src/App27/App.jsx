import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    let [count, setcount] = useState(0)
    let [value, setvalue] = useState("")

    useEffect(() => {
        console.log("Component mount parent");
    }, [])

    // useEffect(() => {
    //     console.log("Component 2");
    // })

    let demo = () => {
        console.log("Demo function");
        return "demo function"
    }
    
    setTimeout(() => {
        setvalue("react");
    }, 5000)

    return (
        <>

            <h1>Count:{count}</h1>
            <h2>Value{value}</h2>
            <h3>{demo()}</h3>
            <button type="button" onClick={e => setcount((p) => p + 1)}>Inc</button>
        </>
    )
}

export default App;