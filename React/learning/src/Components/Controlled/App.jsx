import { useState } from "react";

const App = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const SubmitEvent = (e) => {
        e.preventDefault();
        console.log(
            {
                username:username,
                password:password
            }
        )

    }

    return (
        <>
            <h1>Form Data</h1>
            <form onClick={SubmitEvent}>
                <input type="text" name="username" placeholder="Enter the Username" onChange={(e) => setusername(e.target.value)} />
                <input type="text" name="password" placeholder="Enter the Password" onChange={(e) => setpassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App