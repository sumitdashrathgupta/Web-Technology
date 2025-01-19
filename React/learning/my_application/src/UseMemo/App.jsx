import React, { useMemo, useState } from "react";

const App = () => {
    let [count, setcount] = useState(0)
    let [input, setinput] = useState("")

    let task = (num) => {
        console.log("Task")
        for (let i = 0; i <= 1000000000; i++) { }
        return num * 2
    }

    let doube = useMemo(() => {
        console.log("USEMOME")
        return task(input)
    }, [input])

    return (
        <>
            <button type="button" onClick={() => setcount(count + 1)}>INCREMENT</button><br />
            <h1>Count : {count}</h1>
            <input type="text" placeholder="Enter the name" value={input} onChange={(e) => {
                setinput(e.target.value)
            }} />
            <h2>Task : {doube}</h2>
        </>
    )
}

export default App