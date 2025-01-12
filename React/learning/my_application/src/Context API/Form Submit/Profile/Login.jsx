import React, { useContext, useState } from "react";
import { ContextApi1 } from "../Context/ContextApi";

const Login = () => {
    let [Data, setData] = useState({
        username: "",
        Password: ""
    })

    let { setnewData } = useContext(ContextApi1)

    let SubmitEvent = (e) => {
        e.previtDefault()
        setData(Data)
        setnewData(Data)
        // console.log(Data);
    }

    let OnchangeEvent = (e) => {
        let { name, value } = e.target
        setData({ ...Data, [name]: value })
    }
    return (
        <>
            <form onSubmit={SubmitEvent}>
                <input type="text" name="username" placeholder="Enter the username" value={Data.username} onChange={OnchangeEvent} />
                <input type="password" name="password" placeholder="Enter the password" value={Data.Password} onChange={OnchangeEvent} />
                <button type="submit">Submit</button>t
            </form>
        </>)
}

export default Login