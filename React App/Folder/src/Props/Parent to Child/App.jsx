import React from "react";
import Child from "./Child"

const App = () => {
    const demo=()=>{
        return "demo funcation"
    }
    return (
        <>
            <h4>Parent</h4>
            <Child name={"sumit"} id={23} skills={["java","javascript","python"]} demo={demo()}  />
        </>
    )
}

export default App