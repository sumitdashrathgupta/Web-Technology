import { useState, useEffect } from "react";
import Child from "./Child"

const App = () => {
    let [count, setcount] = useState(0)

    useEffect(() => {
        console.log("UseEffect Work")
    }, [])

    return (
        <>
            <h1>Count : {count}</h1>
            <button type="button" onClick={e => setcount((p) => p + 1)}>Inc</button>
            {count < 5 ? <Child count={count} /> : null}
        </>
    )
}

export default App;
