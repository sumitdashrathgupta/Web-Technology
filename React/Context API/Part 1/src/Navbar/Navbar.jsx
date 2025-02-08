import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css"

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink className={"f-btn"} to={"/"}>Form</NavLink>
                    <NavLink className={"f-btn"} to={"/profile"}>Profile</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Navbar