import React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import "./Header.css";
import { BsCart2 } from "react-icons/bs"

export default function Header() {
  const navigate = useNavigate();
  const logo = require("../logoImg.svg").default;
  return (
    <div className="header-container">
      <div className="nav-wrapper">
        <img src={logo} alt="logo" className="logo"></img>

        <div className="nav">
          <NavLink to="/" className={({ isActive }) =>
              "nav-item" + (isActive ? " active-nav" : "")}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) =>
              "nav-item" + (isActive ? " active-nav" : "")}>
            About Us
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) =>
              "nav-item" + (isActive ? " active-nav" : "")}>
            Contacts
          </NavLink>
        </div>

        <div className="cart-wrapper">
          <BsCart2 className="cart"/>
        </div>
      </div>
    </div>
  );
}
