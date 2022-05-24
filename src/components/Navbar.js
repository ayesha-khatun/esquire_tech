import React, { useState } from "react";
import "./navbar.css";
import esquirelogo from "../img/esquirelogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav navbar" >
        {/* 1st logo part  */}
        <div className="logo p-2">
            <Link to="/" >
                <img src={esquirelogo} alt="logo" width='40' height='40' /><span className=" esquire-font logoText p-2">Esquire Technology Limited</span>
            </Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">about</NavLink>
            </li>
          <li>
              <NavLink to="/header" activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">header</NavLink>
            </li>
             {/*  <li>
              <NavLink to="/footer" activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">footer</NavLink>
            </li> */}
            <li>
              <NavLink to="/products" activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">products</NavLink>
            </li>
            <li>
              <NavLink to="/services " activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={{ color: 'red' }} style={{ textDecoration: 'none'}} exact activeClassName="active">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">


          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
