import React, { Component, Fragment } from "react";
import esquirelogo from "../../../img/esquirelogo.png";
import esquireText from "../../../img/esq/esquireText.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaBehance } from 'react-icons/fa';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ScrollTopArrow from '../../Landing/main/ScrollTopArrow';

import { Link } from "react-router-dom";

function Footer() {
 
        return (
            <Fragment>
                <footer className="footer-area footer-area-v3">
                    <div className="container">
                        <div className="footer-area-internal border-bottom-purple">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="footer-logo">
                                                <img src={esquirelogo} alt="logo" width='30' height='30' /><span className="text-danger esquire-font logoText"><img src={esquireText} alt="text logo" width='250' height='250' /></span>
                                            </div>
                                            <div className="footer-copyright">
                                                <p>© 2021 <Link to="/#">Esquire Technology.</Link> <span>All Rights Reserved</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="single-footer-widget footer-text-widget">
                                        <h5 className="widget-title" style={{fontSize: '1.7rem'}}>Address: </h5>
                                        <p>Ideal Trade Center,<br />9th floor,<br /> Shaheed Tajuddin Ahmed Sarani,<br /> Dhaka-1208,<br /> Bangladesh.</p>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="single-footer-widget">
                                        <h5 className="widget-title" style={{fontSize: '1.7rem'}}>Resources</h5>
                                        <div className="footer-widget-menu">
                                            <ul>

                                                <li> <Link to="/products" ><FontAwesomeIcon icon={faAngleRight} /> Products</Link></li>
                                                <li> <Link to="/services" ><FontAwesomeIcon icon={faAngleRight} /> Services</Link></li>
                                                <li> <Link to="/about"><FontAwesomeIcon icon={faAngleRight} /> About</Link></li>
                                                <li> <Link to="/contact"><FontAwesomeIcon icon={faAngleRight} /> Contact</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="single-footer-widget">
                                        <h5 className="widget-title" style={{fontSize: '1.7rem'}}>Social Links</h5>
                                        <div className="footer-social-links">
                                            <ul>
                                                <li><Link to="/#" ><FaFacebookF /></Link></li>
                                                {/* <li><Link to="/#" ><FaTwitter /></Link></li>
                                                <li><Link to="/#" ><FaYoutube /></Link></li>
                                                <li><Link to="/#" ><FaBehance /></Link></li> */}
                                                <li><Link to="/#" ><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </footer>
                {/* <a href="#" data-target="html" class="scroll-to-target scroll-to-top bg-red"><FontAwesomeIcon icon={faAngleUp} size="2x" /></a> */}

                <ScrollTopArrow />
            </Fragment>
        );
    
}


export default Footer;