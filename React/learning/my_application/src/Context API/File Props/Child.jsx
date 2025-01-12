import React from "react";
import Child1 from "./Child1"

let contextAPI = React.createContext();

const Child = ({ name, id, Skills }) => {
    return (
        <>
            <contextAPI.Provider value={[name, id, Skills]}>
                <Child1 />
            </contextAPI.Provider>
        </>
    )
}

export default Child;
export { contextAPI }