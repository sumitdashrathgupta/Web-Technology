//! Props drilling


import React from "react";
import Child from "./Child"

const App = () => {
    return (
        <>
            <Child name="sumit" id={435} />
            <Child name="Amit" id={7} />
        </>
    )
}

export default App;