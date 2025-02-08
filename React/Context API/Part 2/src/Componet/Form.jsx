import React, { useContext, useState } from "react";
import "../Style/Formstyle.css"
import { UsedContext } from "../Context/UserContext"


const Form = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UsedContext)

  const Submithandle = (e) => {
    e.preventDefault();
    setUser({ username, password })
    console.log({ username, password })
  }
  return (
    <div className="contenar">
      <h1>Form</h1>
      <form onSubmit={Submithandle} className="formdata">
        <input className="divd" type="text" required name="username" placeholder="Enter the username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="divd" type="password" required name="password" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="divd" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form