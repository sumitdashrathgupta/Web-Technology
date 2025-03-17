import React, { useContext, useState } from "react";
import "../Style/Formstyle.css"
import { UsedContext } from "../Context/UserContext"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Form = () => {
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UsedContext)

  const Submithandle = (e) => {
    e.preventDefault();
    setUser({ username, password })
    console.log({ username, password })
    setUsername('')
    setPassword('')
  }
  return (
    <div className="contenar">
      <h1>Form</h1>
      <form onSubmit={Submithandle} className="formdata">
        <input className="divd" type="text" required name="username" placeholder="Enter the username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="divd" type={show ? "text" : "password"} required name="password" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span onClick={() => setShow(!show)}>{show ? <FaRegEyeSlash /> : <FaRegEye />}</span>
        <button className="divd" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form