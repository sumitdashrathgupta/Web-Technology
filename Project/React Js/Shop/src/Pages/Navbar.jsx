import React from "react";
import { NavLink } from "react-router-dom";
import './Style/Navbar.css';

const Navbar = () => {
    return (
        <>
            <header className='header'>
                <a href="index.html" className="logo">DigiShop</a>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/product" >Product</NavLink>
                    <NavLink to="/service" >Service</NavLink>
                </nav>
                <a href="login.html" className="Login">Login</a>
            </header>
        </>
    )
}

export default Navbar