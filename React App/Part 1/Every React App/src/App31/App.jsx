import React from "react";
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContext from "./Context/UserContextProvider";

const App = () => {
    return (
        <UserContext>
            <h1>Context API</h1>
            <Login />
            <Profile />
        </UserContext>
    )
}

export default App;