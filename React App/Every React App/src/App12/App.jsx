
/*controlled Component =>
    -> Form data handled by react state
    -> onchange(event)*/

/*uncontrolled component =>
    -> formdata handled by DOM itself (value proprty)
    -> ref( mandator)*/

//! Uncontrolled Component:

import React, { useRef } from "react";

const App = () => {
    let usernameRef = useRef();
    let passwordRef = useRef();
    let formRef = useRef()
    
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });

        // var formdata = new FormData(formRef.current)
        // var finaldata = Object.fromEntries(formdata)
        // console.log(finaldata);
    }
    return (
        <>
            <form className="form-control" onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="username" id="username" placeholder="Enter User" ref={usernameRef} />
                <input type="password" name="password" id="password" placeholder="Enter password" ref={passwordRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App; 

//? Controlled Component

/*import React, { useState } from "react";

const App = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }
    return <>
        <form className="form-control" onSubmit={handleSubmit} >
            <input type="text" name="username" id="username" placeholder="Enter User" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </>
}

export default App;*/

//! IN CBC

/*import React, { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleusername = (e) => {
        this.setState({ ...this.state, username: e.target.value });
    }
    handlepassword = (e) => {
        this.setState({ ...this.state, password: e.target.value });
    }
    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }
    render() {
        return (
            <>
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="Enter User" onChange={this.handleChange} />
                    <input type="password" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}*/