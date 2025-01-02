import React from "react";
import Login from "./Components/Login"
import Profile from "./Components/Profile"
// import UserContext from "./Context/UserContextProvider";
import UserContextProvider from "./Context/UserContextProvider";

const App = () => {
    return (
        <UserContextProvider>
            <h1>Context API</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}

export default App;