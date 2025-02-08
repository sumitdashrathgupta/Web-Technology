import {useState }from "react";
import  DataContext  from "./Context"

const ProvideContext = ({ children }) => {
    let [user, setuser] = useState(null)
    return (
        <DataContext.Provider value={{ user, setuser }}>
            {children}
        </DataContext.Provider>
    )
}

export default ProvideContext