import React from "react";

const App2 = () => {
    return (
        <>
            <h1 onClick={(e) => {
                e.target.style.background = "green"
                e.target.style.color="gray"
                console.log(e)
            }}>Hello world</h1>
        </>
    )
}

export default App2;