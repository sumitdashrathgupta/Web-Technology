import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
    let [data, setData] = useState({
        username: "",
        password: "",
    });

    let { setNewdata } = useContext(UserContext)
    // console.log(setNewdata);
    setNewdata(data);


    let handleChange = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" value={data.username} placeholder="enter username" onChange={handleChange} />
                <input type="text" name="password" id="password" value={data.password} placeholder="enter Password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>

        </>
    )
}

export default Login;