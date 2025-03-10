import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { IoIosSunny } from "react-icons/io";
import "../Style/Navbar.css"

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img className="c-logo" src={Logo} alt="" srcset="" />
                </div>
                <nav className="navbar">
                    <NavLink  to={'/'}>Home</NavLink>
                    <NavLink to={'/features'}>Features</NavLink>
                    <NavLink to={'/Pages'}>Page</NavLink>
                    <NavLink to={'/support'}>support</NavLink>
                </nav>
                <div className="login_system">
                    <button className="btn btn-lo">Sign In</button>
                    <button className="btn btn-up">Sign Up</button>
                    <IoIosSunny  className="icon"/>
                </div>
            </header>
        </>
    )
}

export default Navbar