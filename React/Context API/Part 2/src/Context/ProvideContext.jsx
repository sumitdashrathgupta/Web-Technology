import { useState } from "react"
import { UsedContext } from "./UserContext"

const ProvideContext = ({ children }) => {
    let [user, setUser] = useState(null)

    return (
        <UsedContext.Provider value={{ user, setUser }}>
            {children}
        </UsedContext.Provider>
    )
}

export default ProvideContext