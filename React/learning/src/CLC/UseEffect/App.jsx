import React, { useEffect, useState } from "react";
import Child from "./Child"

const App = () => {
    let [count, setcount] = useState(0)

    useEffect(() => {
        console.log("Work Effect")
    },[])

    console.log("Firts")
    return (
        <>
            {/* <h1>Count :{count}</h1> */}
            <h1>{count}</h1>
            {count <= 5 ? <Child count={count} /> : null}
            <button type="button" onClick={() => setcount(count + 1)}>Click</button>
        </>
    )
}

export default App