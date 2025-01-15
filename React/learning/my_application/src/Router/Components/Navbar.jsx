import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header>
                <div className="nav">
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/About"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Service"}>Service</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar