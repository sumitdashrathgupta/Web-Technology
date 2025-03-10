import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import "./Style/Form.css"

const Form = () => {
    const [Show, setShow] = useState(false)
    const [Data, setData] = useState({
        FName: "",
        LName: "",
        Password: "",
        Email: "",
        Phone: ""
    })

    const submithandle = (e) => {
        e.preventDefault()
        console.log(Data)
        setData({
            FName: "",
            LName: "",
            Password: "",
            Email: "",
            Phone: "",
        })

        axios.post('http://localhost:4000/insert', Data)
    }

    const handelform = (e) => {
        let { name, value } = e.target
        setData({ ...Data, [name]: value })
    }
    const isFormValid = Object.values(Data).every((field) => field.trim() !== "");

    const notify = () => toast("Submit SucessFully!");
    return (
        <>
            <div className="form-section">
                <ToastContainer />
                <h1> Information</h1>
                <form onSubmit={submithandle}>
                    <div className="form-data">
                        <label htmlFor="fname">First Name :</label>
                        <input type="text" id="fname" name="FName" value={Data.FName} onChange={handelform} />
                    </div>
                    <div className="form-data">
                        <label htmlFor="lname">Last Name :</label>
                        <input type="text" id="lname" name="LName" value={Data.LName} onChange={handelform} />
                    </div>
                    <div className="form-data">
                        <label htmlFor="password">Password :</label>
                        <input type={Show ? "password" : "text"} id="password" name="Password" value={Data.Password} onChange={handelform} />
                        <span onClick={() => { setShow(!Show) }}> {Show ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                    </div>
                    <div className="form-data">
                        <label htmlFor="email">Email Id :</label>
                        <input type="email" id="email" name="Email" value={Data.Email} onChange={handelform} />
                    </div>
                    <div className="form-data">
                        <label htmlFor="phone">Phone :</label>
                        <input type="number" id="phone" name="Phone" value={Data.Phone} onChange={handelform} />
                    </div>
                    <button type="submit" disabled={!isFormValid} onClick={notify}>Save</button>
                </form>
            </div>
           
        </>
    )
}

export default Form