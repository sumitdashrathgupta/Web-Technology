//! It is FBC using State hooks like useState()
import React, { useState } from "react";

const App1 = () => {
    let [ currentstate, updatestate ] = useState("sumit")
    
    setTimeout(()=>{
        updatestate("Ajay")
    },3000)

    return (
        <>
            <h1>{currentstate}</h1>
        </>
    )
}

export default App1;