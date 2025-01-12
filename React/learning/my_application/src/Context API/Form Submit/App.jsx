import React from "react";
import Child from "./Profile/Login"
import Child2 from "./Profile/Profile"
import ContextProvid from "./Context/ContextProvid";

const App = () => {
    return (
        <>
        <ContextProvid>
            <Child />
            <Child2 />
        </ContextProvid>
        </>
    )
}

export default App