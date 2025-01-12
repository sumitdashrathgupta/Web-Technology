import React, { createContext } from "react";
import Child2 from "./Child2"

let DataContexte = createContext();

const Child1 = (props) => {
    return (
        <>
            <DataContexte.Provider value={props.name}>
                <Child2 />
            </DataContexte.Provider>
        </>
    )
}

export default Child1
export {DataContexte}