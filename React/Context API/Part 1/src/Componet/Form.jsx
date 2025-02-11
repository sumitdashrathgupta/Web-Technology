import React, { useContext, useState } from "react";
import "../Style/Formstyle.css";
import UserContext from "../context/Context";

const Form = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        date: "",
        address: "",
        img: ""
    });

    const { setuser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser(data);
        console.log(data);
    };

    return (
        <>
            <main className="contenar">
                <h1>Form Data</h1>
                <form onSubmit={handleSubmit}>
                    <div className="dataform">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter the Username"
                            id="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="dataform">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter the Password"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="dataform">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={data.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="dataform">
                        <label htmlFor="address">Address</label>
                        <textarea
                            className="area"
                            name="address"
                            id="address"
                            placeholder="Enter the address"
                            value={data.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input type="file" name="file"
                        value={data.img}
                        onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
};

export default Form;
