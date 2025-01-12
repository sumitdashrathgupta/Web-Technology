import React, { useState } from "react";

const App = () => {
    let [username, setusername] = useState("")
    let [password, setpassword] = useState("")

    let submithandle = (e) => {
        e.preventDefault();
        console.log({
            user:username,
            pass:password
        })
    }

    return (
        <>
            <h1>Form Data</h1>
            <form onSubmit={submithandle}>
                <input type="text" name="username" placeholder="Enter the username" onChange={(e) => setusername(e.target.value)} />
                <input type="password" name="password" placeholder="Enter the password" onChange={(e) => setpassword(e.target.value)} />
                <button type="submit">Click</button>
            </form>
        </>
    )
}

export default App