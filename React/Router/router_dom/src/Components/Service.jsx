import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const Service = () => {
    return (
        <>
            {/* <h1>Service</h1> */}
            <NavLink to={"man-producte"} >Man</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={"woman-producte"} >Woman</NavLink>
            <br />
            <br />
            <Outlet />
        </>
    )
}

export default Service