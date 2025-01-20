import { useState } from "react";
import countries from "./country.json";

const App = () => {
    const [country, setCountry] = useState(countries);
    const [Data, SetData] = useState({
        username: "",
        password: "",
        email: "",
        DOB: "",
        skills: [],
        Gender: "",
        Country: ""
    });
    const [submittedData, setSubmittedData] = useState(null);

    const Submithandle = (e) => {
        e.preventDefault();
        setSubmittedData(Data);
        console.log(Data);
    };

    const handleventskills = (e) => {
        const value = e.target.value;
        if (!Data.skills.includes(value)) {
            Data.skills.push(value);
        } else {
            const i = Data.skills.indexOf(value);
            Data.skills.splice(i, 1);
        }
    };

    const handlevent = (e) => {
        const { name, value } = e.target;
        SetData({ ...Data, [name]: value });
    };

    return (
        <>
            <h1>Form Information using Controlled Components</h1>
            <form onSubmit={Submithandle}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    onChange={handlevent}
                    value={Data.username}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={handlevent}
                    value={Data.password}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={handlevent}
                    value={Data.email}
                />
                <br />
                <input
                    type="date"
                    name="DOB"
                    id="DOB"
                    onChange={handlevent}
                    value={Data.DOB}
                />
                <br />
                <label htmlFor="gender"> Gender</label>
                <div id="gender" onChange={handlevent}>
                    <input type="radio" name="Gender" id="male" value="male" /> Male
                    <input type="radio" name="Gender" id="female" value="female" /> Female
                </div>
                <br />
                <label htmlFor="skills">Skills</label>
                <div id="skills" onChange={handleventskills}>
                    <input type="checkbox" name="skills" id="java" value="java" /> Java
                    <input type="checkbox" name="skills" id="js" value="js" /> JavaScript
                    <input type="checkbox" name="skills" id="node" value="node" /> Node.js
                    <input type="checkbox" name="skills" id="PHP" value="PHP" /> PHP
                    <input type="checkbox" name="skills" id="SQL" value="SQL" /> SQL
                </div>
                <br />
                <label htmlFor="country">Select Country</label>
                <select name="Country" id="country" onChange={handlevent}>
                    <option value="">Select a country</option>
                    {country.map(({ name }, i) => (
                        <option value={name} key={i}>
                            {name}
                        </option>
                    ))}
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <p><strong>Username:</strong> {submittedData.username}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Date of Birth:</strong> {submittedData.DOB}</p>
                    <p><strong>Gender:</strong> {submittedData.Gender}</p>
                    <p><strong>Skills:</strong> {submittedData.skills.join(", ") || "None"}</p>
                    <p><strong>Country:</strong> {submittedData.Country || "Not selected"}</p>
                </div>
            )}
        </>
    );
};

export default App;
