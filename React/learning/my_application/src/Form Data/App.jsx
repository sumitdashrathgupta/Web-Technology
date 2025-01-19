import { useState } from "react";

const App = () => {
    let [Data, SetData] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        Dob: ""
    })

    let SubmitForm = (e) => {
        e.preventDefault();
        console.log(Data);
    }
    let HandelEvent = (e) => {
        let { name, value } = e.target
        SetData({ ...Data, [name]: value })
    }

    return (
        <>
            <h1>Fill The Form</h1>
            <form onSubmit={SubmitForm}>
                <input type="text" name="username" placeholder="Enter the username" value={Data.username} onChange={HandelEvent} />&nbsp;&nbsp;
                <input type="password" name="password" placeholder="Enter the passeord" value={Data.password} onChange={HandelEvent} />&nbsp;&nbsp;
                <input type="email" name="email" placeholder="Enter the email" value={Data.email} onChange={HandelEvent} />&nbsp;&nbsp;
                <input type="number" name="age" value={Data.age} onChange={HandelEvent} />&nbsp;&nbsp;
                <input type="date" name="Dob" value={Data.Dob} onChange={HandelEvent} />&nbsp;&nbsp;
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App