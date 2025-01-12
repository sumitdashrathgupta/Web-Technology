import { useState } from "react";

const App = () => {
    let [data, setdata] = useState(0)

    return (
        <>
            <h1>Count : {data}</h1>
            <button onClick={()=>setdata(data+1)}>INC</button>
            <button onClick={()=>setdata(data-1)}>DEC</button>
            <button onClick={()=>setdata(0)}>Reset</button>
        </>
    )
}

export default App