import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
    let Navigate = useNavigate(-1);
    let work = () => {
        Navigate(-1)
    }
    return (
        <>
            <h1>Service</h1>
            <button type="button" onClick={work}>Go Back</button>
            <Outlet/>
        </>
    )
}

export default Service