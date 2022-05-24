import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faArrowRight, faMapMarkerAlt, faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Contact() {

    return (
        <React.Fragment>    
            <section className="contact-area pt-80 pb-130">
                <div className="container">
          
                    <div className="row align-items-center pt-30">
                        <div className="col-lg-5">
                            <div className="contact-area-content content-right-spacer">
                                <div className="info-iconic-boxes">
                                    <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <div className="info-icon info-icon-gradient-1">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" color="red" />
                                        </div>
                                        <div className="info-body">
                                            <h5>Our Location</h5>
                                            <p style={{fontSize:'1.7rem'}}>Ideal Trade Center,<br />9th floor,<br /> Shaheed Tajuddin Ahmed Sarani,<br /> Dhaka-1208,<br /> Bangladesh.</p>
                                        </div>
                                    </div>
                                    <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                        <div className="info-icon info-icon-gradient-2">
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" color="blue" />
                                        </div>
                                        <div className="info-body">
                                            <h5>Email Address</h5>
                                            <p style={{fontSize:'1.7rem'}}><Link to="/#">info@esquiretechnology.com</Link></p>
                                         
                                        </div>
                                    </div>
                                    <div className="info-iconic-box wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                                        <div className="info-icon info-icon-gradient-3">
                                            <FontAwesomeIcon icon={faPhone} size="4x" color="green" />
                                        </div>
                                        <div className="info-body">
                                            <h5>Urgent Call</h5>
                                            <p style={{fontSize:'1.7rem'}}><Link to="/#">+880 1841085035</Link></p>
                                          
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form-area content-right-spacer">
                                <div className="section-title mb-40">
                                    <div className="section-heading-tag">
                                        <span className="single-heading-tag">Send Us Message</span>
                                    </div>
                                    <h2>Have Any Questions ? <br className="d-none d-md-block" /> Let’s Start to Talk</h2>
                                </div>
                                <div className="contact-respond">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="fullName" placeholder="Full Name" name="name" required />
                                            <label htmlFor="fullName">Name</label>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" name="phone" required />
                                            <label htmlFor="phoneNumber">Phone</label>
                                        </div>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="emailAddress" placeholder="Email Address" name="email" required />
                                            <label htmlFor="emailAddress">Email</label>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="subject" placeholder="I Would Like  To Discuse" name="subject" required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                        <div className="input-group form-textarea">
                                            <textarea className="form-control" id="message" placeholder="Message" name="message"></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                        <div className="input-group">
                                            <button type="submit" className="filled-btn">Send Message  <FontAwesomeIcon icon={faArrowRight} size="1x" color="white" /> </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="map-area wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="map-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.806488879308!2d90.39840221494207!3d23.75427909454515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89ba95cca17%3A0x46f3e84b1ac630f7!2sIdeal%20Trade%20Centre%2C%20102%20Shaheed%20Tajuddin%20Ahmed%20Ave%2C%20Dhaka%201208!5e0!3m2!1sen!2sbd!4v1623737164122!5m2!1sen!2sbd"
						 width="100%" height="560" allowfullScreen="" loading="lazy" title="map"></iframe>
                </div>
            </div>
        </React.Fragment>
    )


}

export default Contact;