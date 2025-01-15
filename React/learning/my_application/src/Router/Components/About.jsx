import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    let Navigate = useNavigate();

    let work1=()=>{
        Navigate(-1)
    }
    return (
        <>
            <h2>Hello world</h2>
            <button type="button" onClick={work1}>Go Back</button>
        </>
    )
}

export default About