import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt ,faHandshake,faAllergies,faCogs,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import products from "../../img/products.png";
import servicetrans2 from "../../img/servicetrans2.png";
import smarttracker from "../../img/esq/smarttracker.png";
import {BsFillCheckCircleFill,BsFillBagFill,BsReverseLayoutTextWindowReverse,BsCurrencyDollar } from 'react-icons/bs';
import { Link } from "react-router-dom";
import {FaRegFutbol } from 'react-icons/fa';

function Products() {
   
    const myStyle1 = {
        width: '100%',
        height: '350px',
    };
    return (
        <React.Fragment>
          
         

            <section className="why-choose-us-area pt-80 pb-130">
            <div className="container">
           
                <div className="row align-items-center pt-30">
                    <div className="col-lg-6">
                        <div className="square-and-oval-image-wrapper content-right-spacer">
                            <div className="image-square">
                                <img src={servicetrans2} alt="why choose one"/>
                                
                            </div>
                            <div className="image-oval animate-float-bob-y">
                                <img src={products} alt="why choose two"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="why-choose-us-content content-left-spacer">
                            <div className="section-title mb-40">
                                <h2>Why Choose Us</h2>
                                <div className="section-title-description">
                                    <p>   Not only do we sell products but we also
                                            offer after sell support. Our Technical team will implement those products as per your requirements.We
                                            have a vast amount of Resources.</p>
                                </div>
                            </div>
                            <div className="iconic-list-wrapper iconic-list-wrapper-v2">
                               
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check" ></i>
                                        
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Web based solution</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Customized Software</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '400ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">QR Based Solution</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Mobile Application Development</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">IT Services</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Training</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Co Workspace Sharing</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms',animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">After Sales Support</h5>
                                    </div>
                                </div>
                                <div className="single-iconic-list iconic-list-v2 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                                    <div className="iconic-list-icon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="iconic-list-body">
                                        <h5 className="iconic-list-title">Always Available for Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section> 


            <section className="our-services border-top-blue pt-50 pb-30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-70">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">Our Software</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-services-content-wrapper">
                        <div className="row">
                        <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow " data-wow-delay="0.1s" data-wow-duration="2000ms">
 
                                    <div className="iconic-box-icon iconic-box-gradient-4">
                                    <FaRegFutbol size="2x" color="blue"/>
                                
                                      
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            ERP System
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow " data-wow-delay="0.1s" data-wow-duration="2000ms">
                                    <div style={{  width: 61}}  className="iconic-box-gradient-4 pb-4">
                                    {/* <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="white" /> */}
                                    <img src={smarttracker} size="sm" className="rounded-circle" alt="smart_tracker" />
                                       
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            Smart Tracker
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.3s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-4">
                                    <FontAwesomeIcon icon={faHandshake} size="1.7x" color="blue"   />
                                
                                      
                                    </div>
                                    <div className="iconic-box-body">

                                        <p className="iconic-box-content">
                                            Help Desk
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-5">
                                    <i className="fab fa-accessible-icon"></i>
                                        <BsFillBagFill  color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            Merchandising
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-6">
                                  
                                    <BsReverseLayoutTextWindowReverse color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            Inventory
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-6">
                                  
                                    <BsReverseLayoutTextWindowReverse color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            Supply Chain
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-6">
                                    <FontAwesomeIcon icon={faCogs} size="1.7x" color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                        Maintenance
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-6">
                                   
                                    <BsCurrencyDollar color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            FIxed Asset
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )


}

export default Products;