import React, { useState } from "react";
import UserContext from "./UserContext"

const UserContextProvider = ({ children }) => {
    let [newData, setNewdata] = useState(null)
    return (
        <>
            <UserContext.Provider value={{ newData, setNewdata }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;