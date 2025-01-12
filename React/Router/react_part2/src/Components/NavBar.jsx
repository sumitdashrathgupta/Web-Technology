import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  let handleStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "#111",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div>
      <div className="nav">
        <section>
          <ul>
            <li>
              <NavLink to={"/"} style={handleStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"} style={handleStyle}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"} style={handleStyle}>
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink to={"/users"} style={handleStyle}>
                Users
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
