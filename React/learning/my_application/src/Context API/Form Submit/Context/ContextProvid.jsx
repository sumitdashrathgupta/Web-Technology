import React, {useState } from "react";
import { ContextApi1 } from "./ContextApi";

const ContextProvid = ({ Children }) => {
    let [newData, setnewData] = useState(null)

    return (
        <>
            <ContextApi1.Provider value={{ newData, setnewData }}>
                {Children}
            </ContextApi1.Provider>
        </>
    )
}

export default ContextProvid