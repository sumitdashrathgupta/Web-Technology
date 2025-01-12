import React, { useEffect, useRef, useState } from "react";

const App1 = () => {
    let [Data, SetData] = useState(0)
    let val = useRef(0)

    useEffect(() => {
        val.current = val.current + 1
        console.log(val)
        console.log("Work in Useeffect")
    })

    return (
        <>
            <h1>Count :{Data}</h1>
            <button onClick={() => SetData(Data + 1)}>INC</button>
        </>
    )
}

export default App1

