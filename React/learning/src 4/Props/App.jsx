//! This is a parent to child
/*import React from "react";
import Child from "./Child"
const App = () => {
    return (
        <>
            <Child name={"sumit"} id={323} />
            <h1>Hello world</h1>
        </>
    )
}

export default App;*/

//! This is a child to parent

import React, { useState } from "react";
import Child from "./Child"

const App = () => {
    let [data, setdata] = useState("text")
    let SendData=(value)=>{
        setdata(value)
    }
    return (
        <>
            <h1>Data: {data}</h1>
            <Child sendData={SendData}/>
        </>
    )
}

export default App;