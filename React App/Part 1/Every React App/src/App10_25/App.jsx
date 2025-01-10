import React, { useMemo, useState } from "react";

const App = () => {
    let [value,setvalue]=useState("")
    let [dark,setdark]=useState(false)
    let doubleCount=useMemo(()=>{
        return slowFunction(value)
    },[value])
    return (
       <div>
        
       </div>
    )
}

export default App;