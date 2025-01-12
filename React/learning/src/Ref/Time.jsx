import React, { useRef, useState } from "react";

const Time = () => {
    let [time, settime] = useState(0)
    let Divref = useRef()

    let TimeStart = () => {
        Divref.current = setInterval(() => {
            settime(time => (time + 1))
        }, 1000)
    }
    let TimeStop = () => {
        clearInterval(Divref.current)
    }
    let TimeReset = () => {
        settime(0)
    }
    return (
        <>
            <h1>Seconds : {time}</h1>
            <button onClick={TimeStart}>Start</button>
            <button onClick={TimeStop}>Stop</button>
            <button onClick={TimeReset}>Reset</button>
        </>
    )
}

export default Time