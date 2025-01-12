import React from "react";

const Child = ({ sendData }) => {
    return (
        <>
            <button type="button" onClick={() => { sendData("Sumit") }}>SendData</button>
        </>
    )
}

export default Child