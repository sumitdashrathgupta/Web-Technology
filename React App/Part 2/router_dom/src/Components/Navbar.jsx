import React from "react";
import { NavLink } from "react-router-dom";
// import "./Style/Navbar.css"

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to={"/"}> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/service"}>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}> Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/user"}> User</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar