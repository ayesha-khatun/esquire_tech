import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import esquirelogo from "../../../img/esquirelogo.png";
import esquireText from "../../../img/esq/esquireText.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from "@reach/router";

function Header () {

  


        return (
            <Fragment>
                <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
                    <Navbar.Brand >
                        <Link to="/" >
                            <img src={esquirelogo} alt="logo" width='45' height='45' class="ml-3" /><span className="esquire-font logoText p-2">Esquire Technology Limited</span>
                        </Link>
                    </Navbar.Brand>
                    <br />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0"></ul>
                        <Nav className="me-auto justify-content-between ">
                     
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/products" className="font-weight-bold mr-5" style={{ textDecoration: 'none',fontSize:'1.5rem' }}>PRODUCTS</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/services" className="font-weight-bold mr-5" style={{ textDecoration: 'none',fontSize:'1.5rem'  }} exact activeClassName="active">SERVICES</NavLink></Nav.Link>
                            {/* <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/clients" className="font-weight-bold pr-3" style={{ textDecoration: 'none' }} exact activeClassName="active">CLIENTS</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/contact" className="font-weight-bold pr-3" style={{ textDecoration: 'none' }} exact activeClassName="active">CAREER</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/career" className="font-weight-bold pr-3" style={{ textDecoration: 'none' }} exact activeClassName="active">BLOG</NavLink></Nav.Link> */}
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/contact" className="font-weight-bold mr-5" style={{ textDecoration: 'none',fontSize:'1.5rem'  }} exact activeClassName="active">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{ color: 'red' }} to="/about" className="font-weight-bold mr-5" style={{ textDecoration: 'none',fontSize:'1.5rem' }} exact activeClassName="active">ABOUT</NavLink></Nav.Link>
                            
                        </Nav>
                        <Nav className="justify-content-start pr-5">
                            {/* <Link to="/login"  className="filled-btn bg-mandy button-radius font-weight-bolder p-2">    
                                   
                                        LOGIN  <FontAwesomeIcon icon={faArrowRight} />
                                    
                                </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    
}


export default Header;