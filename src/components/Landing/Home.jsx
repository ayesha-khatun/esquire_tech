import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import herocurvebg from "../../img/hero/herocurvebg.png";
import particle2 from "../../img/particle/particle2.png";
import particle3 from "../../img/particle/particle3.png";
import particle4 from "../../img/particle/particle4.png";
import particle5 from "../../img/particle/particle5.png";
import gradientcurveshape2 from "../../img/particle/gradientcurveshape2.png";
import flaticonsatisfaction from "../../img/feature/flaticonsatisfaction.png";
import automation from "../../img/esq/automation.png";
import cloud from "../../img/esq/cloud.png";
import devops from "../../img/esq/devops.png";
import docker from "../../img/esq/docker.png";
import monitoring from "../../img/esq/monitoring.png";
import { BsCheckCircleFill} from "react-icons/bs";
import { AiOutlineFileSearch,AiOutlineTeam } from "react-icons/ai";


import { Link } from "react-router-dom";

function Home() {
   


        return (
            <React.Fragment>
                {/* <div className="preloader">
                    <img className="preloader-image" width="60" src={preloader} alt="preloader" />
                </div> */}

                <div className="modal fade" id="search-modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form>
                                <div className="form_group">
                                    <input type="text" className="form_control" placeholder="Search here..." />
                                    <button className="search_btn"><i className="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <section className="hero-area hero-v4" style={{ backgroundImage: `url(${herocurvebg})` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <div className="section-particle-effect d-none d-lg-block">
                                        <img className="particle-1 animate-rotate-me" src={particle2} alt="particle One" />
                                        <img className="particle-2 animate-float-bob-y" src={particle3} alt="particle Two" />
                                        <img className="particle-3 animate-zoominout" src={particle4} alt="particle Three" />
                                        <img className="particle-4 animate-float-bob-y" src={particle5} alt="particle Four" />
                                    </div>
                                    <div className="section-title section-title-mandy">
                                        <h5>Welcome to</h5>
                                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms" style={{ color: "#8C1215" }}>ESQUIRE TECHNOLOGY LIMITED</h2>
                                        <div className="section-button-wrapper section-dual-button wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                                           
                                            {/* <a href="about.html" className="filled-btn bg-purple button-radius">
                                                Learn More <FontAwesomeIcon icon={faArrowRight} />
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="user-profile-card wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                                        <ul>
                                            {/* <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Donald L. Juarez"><a href={() => false}><img src={user1} alt="user one" /></a></li> */}
                                            <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Evan A. Ethridge"><Link to="/"></Link></li>
                                            <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Marcus L. Duncan"><Link to="/"></Link></li>
                                            <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Donald T. Lewis"><Link to="/"></Link></li>
                                            <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Marcus L. Duncan"><Link to="/"></Link></li>
                                            <li className="user-profile" data-toggle="tooltip" data-placement="top" title="Evan A. Ethridge"><Link to="/"></Link></li>
                                            <li className="user-profile sign-up" data-toggle="tooltip" data-placement="top" title="Join Now"><Link to="/"></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="chartboard-image-wrapper">
                                    <img src={automation} alt="chartboard one" className="chartboard-image chartboard-image-main wow fadeInDown animate-float-bob-x" data-wow-delay="100ms" data-wow-duration="1500ms" />
                                    <div className="chartboard-app-preview">
                                        <img src={cloud} alt="app preview one" className="chartboard-image chartboard-app-preview-1 wow fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms" />
                                        <img src={devops} alt="app preview two" className="chartboard-image chartboard-app-preview-2 wow fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms" />
                                        <img src={docker} alt="app preview three" className="chartboard-image chartboard-app-preview-3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" />
                                    </div>
                                    <img src={monitoring} alt="chartboard two" className="chartboard-image chartboard-image-secondary wow fadeInRight animate-float-bob-y" data-wow-delay="900ms" data-wow-duration="1500ms" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="collaboration-area collaboration-area-v1 pt-130 pb-130">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="app-preview-image oval-gradient content-right-spacer">
                                    <div className="app-feature-preview-relative animate-float-bob-y wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <img src={automation} alt="chat activity" />
                                    </div>
                                    <div className="app-feature-preview-main wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <img src={automation} alt="live collaboration" />
                                    </div>
                                    <div className="app-feature-preview-backward animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <img src={automation} alt="mobile view" />
                                    </div>
                                    <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <img src={automation} alt="chat onboard" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="section-title section-title-mirage">
                                  
                                    <h2>Software Services</h2>
                                    <div className="section-title-description">
                                        <p className="mb-13">Our software teams help our customers build customized software - everything from web to desktop to enterprise to mobile and beyond.</p>
                                      
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="design-feature-area overflow-hidden bg-alice-blue pt-130 pb-130">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="section-title section-title-mirage">
                                    
                                    <h2>Network Services</h2>
                                    <div className="section-title-description">
                                        <p>Leverage the Cloud Architecture best practice in combination with Automation to deliver maximum performance while reducing your Cloud monthly costs.</p>
                                    </div>
                             
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="app-preview-image text-center text-lg-right content-left-spacer oval-gradient">
                                    <div className="app-feature-preview-main animate-float-bob-y wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <img src={cloud} alt="connect team one" />
                                    </div>
                                    {/* <div className="app-feature-preview-absolute animate-float-bob-x wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <img src={connectwithteam2} alt="connect team two" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="collaboration-area collaboration-area-v2 pt-148 pb-108 border-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="app-preview-image text-center text-lg-left content-right-spacer oval-gradient animate-float-bob-x wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src={devops} alt="promote your app" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="section-title section-title-mirage">
                                    
                                    <h2>Co Workspace Sharing</h2>
                                    <div className="section-title-description">
                                        <p className="mb-15">Containerize Applications or Deploy a Container Orchestrator such as Docker Swarm or Kubernetes and integrate it into your DevOps workflow.</p>
                                        
                                    </div>
                                    {/* <div className="section-button-wrapper">
                                        <a href="about.html" className="filled-btn bg-mandy button-radius">
                                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="features-area">
                    <div className="container">
                        <div className="section-internal pt-120 pb-75 border-bottom-purple">
                            <div className="section-title mb-126 text-center section-title-mirage">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">How Can Help You</span>
                                </div>
                                <h2>Check Out <span>Exclusive</span> Features</h2>
                            </div>
                            <div className="icon-boxes-wrapper">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-iconic-box iconic-box-v3 exclusive-iconic-box-1 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="iconic-box-icon">
                                                {/* <img src={flaticonheadphones} alt="headphones" /> */}
                                                <BsCheckCircleFill color="#19CB55" size="2em" />
                                            </div>

                                            <div className="iconic-box-body">
                                                <h5 className="iconic-box-title">Quality Assurance</h5>
                                                <p className="iconic-box-content">
                                                Our SQA teams are fanatical about quality. We have extensive experience in both business and fun apps.
                                                </p>
                                                <div className="iconic-box-btn">

                                                    <Link to="/"><FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-iconic-box iconic-box-v3 exclusive-iconic-box-2 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="iconic-box-icon">
                                                <AiOutlineFileSearch color="#1D79FB" size="2em" />
                                                {/* <img src={flaticonshare} alt="share" /> */}
                                            </div>
                                            <div className="iconic-box-body">
                                                <h5 className="iconic-box-title">Monitoring & security</h5>
                                                <p className="iconic-box-content">
                                                One of our passions is monitoring. We have developed custom monitoring tools to keep you informed about your business decisions and infrastructure.
                                                </p>
                                                <div className="iconic-box-btn">
                                                   <Link to="/"><FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-iconic-box iconic-box-v3 exclusive-iconic-box-3 wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="iconic-box-icon">
                                              
                                                <AiOutlineTeam  color="#F95F75" size="2em"/>
                                             
                                            </div>
                                            <div className="iconic-box-body">
                                                <h5 className="iconic-box-title">Training</h5>
                                                <p className="iconic-box-content">
                                                Esquire Technologies training program provides hands-on training using real-world examples and use cases. Our Training program covers Cloud, Containers, and DevOps.
                                                </p>
                                                {/* <i class="fas fa-network-wired"></i> */}
                                                <div className="iconic-box-btn">
                                                <Link to="/"><FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-iconic-box iconic-box-v3 exclusive-iconic-box-4 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="iconic-box-icon">
                                                <img src={flaticonsatisfaction} alt="satisfaction" />
                                            </div>
                                            <div className="iconic-box-body">
                                                <h5 className="iconic-box-title">Download Apps</h5>
                                                <p className="iconic-box-content">
                                                    Sed perspiciatis unde omnis este error voluptate accusant doloremque systems.
                                                </p>
                                                <div className="iconic-box-btn">
                                                <Link to="/"><FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="contact-area pt-50 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-75">
                            <h2>Need Free Consultation to <br className="d-none d-md-block"/>Your Next Project</h2>
                        </div>
                    </div>
                </div> 
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-box-wrapper">
                                    <div className="single-contact-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                        <h4>Ready to Work Together For Better Solutions </h4>
                                        <Link to="/" className="filled-btn btn-bordered bg-royal-blue">
                                            Join with us <i className="fa fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    {/* <div className="single-contact-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1500ms">
                                        <h4>Build A Better Career <br className="d-none d-xl-block"/> With <span>Esquire Technology</span></h4>
                                        <a href="about.html" className="filled-btn btn-bordered bg-royal-blue">
                                            View Our Jobs <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form-area contact-form-area-v2 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1500ms">
                            <div className="contact-respond">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fullName" placeholder="Your Full Name" name="name" required=""/>
                                        <label htmlFor="fullName">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="yourEmail" placeholder="Email Address" name="email" required=""/>
                                        <label htmlFor="emailAddress">Email</label>
                                    </div>
                                    {/* <div className="input-group">
                                        <div className="subject-dropdown">
                                            <select className="nice-select" name="subject">
                                                <option>Subject You Like</option>
                                                <option value="knowsomething">About Us</option>
                                                <option value="sayhello">Say Hello</option>
                                                <option value="askme">Ask Me</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="input-group form-textarea">
                                        <textarea className="form-control" id="message" placeholder="Write Message" name="message"></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <div className="input-group">
                                        <button type="submit" className="filled-btn" >Submit<i className="fa fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section> 
            </React.Fragment>
        );
    
}




export default Home;

