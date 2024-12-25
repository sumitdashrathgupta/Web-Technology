//! controlled components:

// import React, { useState } from "react";
// import countries from "./country.json";

// const App = () => {
//     let [country, setCountry] = useState(countries);
//     // console.log(country);
//     let [data, setData] = useState({
//         username: "",
//         password: "",
//         email: "",
//         gender: "",
//         skills: [],
//         country: "",
//     })
//     let handleChange = (e) => {
//         // console.log(e.target.value);
//         let { name, value } = e.target;
//         setData({ ...data, [name]: value });
//     };
//     let handleChangeskills = (e) => {
//         // data.skills.push(e.target.value)
//         let value = e.target.value;
//         if (data.skills.includes(value) == false) data.skills.push(value);
//         else {
//             let i = data.skills.indexOf(value);
//             data.skills.splice(i, 1)
//         }
//     }
//     let handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(data);
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="username" id="username" placeholder="username" onChange={handleChange} value={data.username} />{" "}<br />
//                 <input type="password" name="password" id="password" placeholder="password" onChange={handleChange} value={data.password} />{" "}<br />
//                 <input type="email" name="email" id="email" placeholder="email" onChange={handleChange} value={data.email} />{" "}<br />

//                 <label htmlFor="gender">Select Gender</label>
//                 <div id="gender" onChange={handleChange}>
//                     <input type="radio" name="geneder" id="male" value={male} />Male
//                     <input type="radio" name="geneder" id="Female" value={Female} />FeMale
//                     <input type="radio" name="geneder" id="other" value={other} />Other
//                 </div>
//                 <label htmlFor="Skills">Select Skills</label>
//                 <div id="skills" onChange={handleChangeskills}>
//                     <input type="checkbox" name="skills" id="java" value={java} />Java
//                     <input type="checkbox" name="skills" id="javascript" value={javascript} />Javascript
//                     <input type="checkbox" name="skills" id="python" value={python} />python
//                     <input type="checkbox" name="skills" id="sql" value={sql} />sql
//                     <input type="checkbox" name="skills" id="c" value={c} />c
//                 </div>
//                 <label htmlFor="country">Select Country</label>
//                 <select name="country" id="country" onChange={handleChange}>
//                     {country.map(({ name }, i) => {
//                         return (
//                             <option value={name} key={i + 1}>
//                                 {name}
//                             </option>
//                         );
//                     })}
//                 </select>
//                 <button type="submit">Submit</button>
//             </form >
//         </>
//     )
// }


// export default App;


import React, {useState} from "react";
import countries from "./country.json";

const App = ()=>{
    let [country,setCountry] = useState(countries);
    // console.log(country);
    let [data,setData] = useState({
        username: "",
        password: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
    })

    let handleChange = e=>{
        // console.log(e.target.value);
        let {name,value} = e.target;
        setData({...data, [name]: value});
    };

    let handleChangeSkills = (e)=>{
        let value = e.target.value;
        if(data.skills.includes(value) === false) {
            data.skills.push(value);
        }
        else{
            let i = data.skills.indexOf(value);
            data.skills.splice(i,1);
        }
    };

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
    };

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name = "username"
                    id = "username"
                    placeholder="username"
                    onChange={handleChange}
                    value={data.username}
                 />{" "} 
                 <br />
                 <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={handleChange}
                    value={data.password}
                 />{""}
                 <br />
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={data.email}
                 />{""}
                 <br />
                 <label htmlFor="gender">select gender</label>
                 <div id="gender" onChange={handleChange}>
                    <input type="radio" name="gender" id="male" value={"male"} />Male
                    <input type="radio" name="gender" id="female" value={"female"} />{""} female
                    <input type="radio" name="gender" id="other" value={"other"} /> other
                 </div>
                 <label htmlFor="skills">select skills</label>
                 <div id="skills" onChange={handleChangeSkills}>
                    <input type="checkbox" name="skills" id="java" value={"java"} /> java
                    <input type="checkbox" name="skills" id="js" value={"js"} /> js
                    <input type="checkbox" name="skills" id="node" value={"node"} /> node 
                    <input type="checkbox" name="skills" id="PHP" value={"PHP"} /> PHP
                    <input type="checkbox" name="skills" id="SQL" value={"SQL"} /> SQL
                 </div>
                 <label htmlFor="country">select country</label>
                 <select name="country" id="country" onChange={handleChange}>
                    {country.map(({name},i)=>{
                        return(
                            <option value={name} key={i+1}>
                                {name}
                            </option>
                        );
                    })}
                 </select>

                 <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default App;

