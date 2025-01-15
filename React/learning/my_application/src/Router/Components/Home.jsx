import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let Navigate = useNavigate();

    let GoToHome = () => {
        Navigate("/")
    }
    let GoToAbout = () => {
        Navigate("/About")
    }
    let GoToService = () => {
        Navigate("/Service")
    }
    return (
        <>
            <h1>Home</h1>
            <button type="button" onClick={GoToHome}>Go to Home</button>
            <button type="button" onClick={GoToAbout}>Go to About</button>
            <button type="button" onClick={GoToService}>Go to Service</button>
        </>
    )
}

export default Home