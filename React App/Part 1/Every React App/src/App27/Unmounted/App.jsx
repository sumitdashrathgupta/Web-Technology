//!unmounting Phase:

import React, { useEffect, useState } from "react";
import Child from "./Child"

const App = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Parent Mounted");
    }, []);
    return (
        <>
            <h1>{count}</h1>
            <button type="button" onClick={(e) => setCount((p) => p + 1)}>INC</button>
            {count < 5 ? <Child count={count} /> : null}
        </>
    )
}

export default App;