import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let handlestyle = ({ isActive }) => {
        return {
            color: isActive ? "blue" : "#111",
            textdecoration: isActive ? "underline" : "none"
        }
    }
    return (
        <>
            <div className="dev">
                <section>
                    <ul>
                        <li>
                            <NavLink to={"/"} style={handlestyle}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/product"} style={handlestyle}>
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about_us"} style={handlestyle}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}


export default Navbar