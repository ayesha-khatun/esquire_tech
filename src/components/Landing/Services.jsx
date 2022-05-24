import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import newsletterbg from "../../img/particle/newsletterbg.png";
import particle1 from "../../img/particle/particle1.png";
import particle2 from "../../img/particle/particle2.png";
import particle3 from "../../img/particle/particle3.png";
import particle4 from "../../img/particle/particle4.png";
import particle5 from "../../img/particle/particle5.png";
import particle7 from "../../img/particle/particle7.png";
import gradientcurveshape2 from "../../img/particle/gradientcurveshape2.png";
import faqimage from "../../img/faq/faqimage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineSend } from "react-icons/ai";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Services() {

    return (
        <React.Fragment>
            
          
            <section className="our-services pt-80 pb-30">
                <div className="container">
              
                    <div className="our-services-content-wrapper pt-30">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-feature-box single-feature-box-v3 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">

                                    <div className="feature-box-content">

                                        <p>Our software teams help our customers build customized software - everything from web to desktop to enterprise to mobile and beyond.We hire only the best. Our culture helps us retain our talents and our skill development programs ensure that we are always on the top of recent developments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-feature-box single-feature-box-v3 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">

                                    <div className="feature-box-content">

                                        <p>We have been building software for various industries since 2020.We have worked with many technology platforms and have collaborated with many teams over these years.Our clients get a team of their own – it is as simple as that. There is no red tape – the team adapts to the working process of the client and are there as one of their own.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="section-title section-title-mirage">
                                    <div className="section-heading-tag">
                                        <span className="single-heading-tag">What Does Our Services Include?</span>
                                    </div>

                                    <div className="section-title-description">
                                        <p>We don’t specialize in particular
                                            technologies, but we are definitely proficient and experienced with a wide array of tools and systems.
                                            Every product is unique and we try to fit the right team with the right skills for that particular
                                            product.</p>
                                    </div>
                                    <div className="section-list-style list-style-v2">
                                        <ul>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Ideation</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Wireframe/Mockups</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Prototype</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Development</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Data/Content</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Quality Assurance</li>
                                            <li><FaCheckCircle color="#E25C6A" fontSize="1.5em" /> Delivery</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/*  <div className="col-md-6">
                                <div className="single-feature-box single-feature-box-v3 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <i className="flaticon-diamond-1"></i>
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Creative design</h4>
                                        <p>Quis autem veleum iure reprehende quin voluptate velit esse quam molesti conseqtur velillum dolorem eum fugiate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-feature-box single-feature-box-v3 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <AiFillSafetyCertificate size="5x" color="#473BF0" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Well documentation</h4>
                                        <p>But I must explain to you how mistaken idea of denouncing pleasure and praisinge pain was born and complete</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-feature-box single-feature-box-v3 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <FontAwesomeIcon icon={faLink} size="5x" color="#473BF0" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Quick linkup</h4>
                                        <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-area bg-white-lilac pt-50 pb-30">
                <div className="container">
                    <div className="section-internal">
                        <div className="section-particle-effect d-none d-md-block section-particle-effect-v2">
                            <img className="particle-2 animate-float-bob-y" src={particle1} alt="particle Two" />
                            <img className="particle-1 animate-rotate-me" src={particle2} alt="particle One" />
                            <img className="particle-2 animate-float-bob-y" src={particle3} alt="particle Two" />
                            <img className="particle-3 animate-zoominout" src={particle4} alt="particle Three" />
                            <img className="particle-4 animate-float-bob-y" src={particle5} alt="particle Four" />
                            <img className="particle-2 animate-float-bob-y" src={particle7} alt="particle Two" />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-content content-right-spacer">
                                    <div className="section-title mb-45">
                                        <div className="section-heading-tag">
                                            <span className="single-heading-tag">Our Strength</span>
                                        </div>
                                        <h2>Grow Your Business With Esquire Technology</h2>
                                    </div>

                                    <div className="">
                                        <div className="" data-scroll="stagger">
                                            <ul className="service">
                                                <li className="">
                                                    <span className=""><img
                                                        src="https://d33wubrfki0l68.cloudfront.net/0b8948e1f154596feea94be9f80d39f8ece03acf/fa5d0/static/icons/check.svg"
                                                        alt="" /></span>
                                                    <span className="pl-3"> Opportunity for beginners</span>
                                                </li>
                                                <li className="">
                                                    <span className=""><img
                                                        src="https://d33wubrfki0l68.cloudfront.net/0b8948e1f154596feea94be9f80d39f8ece03acf/fa5d0/static/icons/check.svg"
                                                        alt="" /></span>
                                                    <span className="pl-3">  Provide strong customer service</span>
                                                </li>
                                                <li className="">
                                                    <span className=""><img
                                                        src="https://d33wubrfki0l68.cloudfront.net/0b8948e1f154596feea94be9f80d39f8ece03acf/fa5d0/static/icons/check.svg"
                                                        alt="" /></span>
                                                    <span className="pl-3">  Resolved customer issues</span>
                                                </li>
                                                <li className="">
                                                    <span className=""><img
                                                        src="https://d33wubrfki0l68.cloudfront.net/0b8948e1f154596feea94be9f80d39f8ece03acf/fa5d0/static/icons/check.svg"
                                                        alt="" /></span>
                                                    <span className="pl-3">  Scheduled follow-up call.</span>
                                                </li>
                                                <li className="">
                                                    <span className=""><img
                                                        src="https://d33wubrfki0l68.cloudfront.net/0b8948e1f154596feea94be9f80d39f8ece03acf/fa5d0/static/icons/check.svg"
                                                        alt="" /></span>
                                                    <span className="pl-3">  Always Available for Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-right-image animate-float-bob-y wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
                                    <img className="particle-1 animate-float-bob-y" src={faqimage} alt="faq" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-area pt-50 pb-30">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <h5 className="plan-title bg-ocean-blue-gradient">Software Services</h5>
                                <ul className="service">
                                    <li> <AiOutlineSend color="#F95F75" size="1em" /> Overview (Architecture and concepts)</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  Install a Local Development Environment</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  Kubectl CLI overview</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  Kubernetes Pods</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  Deployment (Scaling, labelling, checks)</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  On demand ERP</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" />  On demand Softwares</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <h5 className="plan-title bg-ocean-blue-gradient">Network Services</h5>
                                <ul className="service">
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Introduction to Docker,Cloud Native</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Docker Overview</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Docker CLI Overview</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Web apps and Docker</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Write Dockerfiles</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Build a monitoring stack</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Deploy apps to Swarm</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Create a Docker Build pipeline</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Docker Swarm & Kubernetes</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Sponsor Labs</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <h5 className="plan-title bg-ocean-blue-gradient">Co-Workspace Sharing</h5>
                                <ul className="service">
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Cloud Native Overview</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Modern application Concepts</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> CNCF Landscape</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Native tooling in the cloud</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Your Cloud Native Journey</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-table starter-plan wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <h5 className="plan-title bg-ocean-blue-gradient">On Demand ERP</h5>
                                <ul className="service">
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Cloud Native Tooling</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> CI/CD Pipelines</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Infrastructure Automation</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Cloud Platform Services</li>
                                    <li><AiOutlineSend color="#F95F75" size="1em" /> Best Practices</li>
                                </ul>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="subscribe-newsletter-area bg-white-lilac pt-50 pb-30" style={{ backgroundImage: `url(${newsletterbg})` }}>
                <div className="container">
                    <div className="section-internal">
                        <div className="section-particle-effect d-none d-md-block section-particle-effect-v4">
                            <img className="particle-1 animate-rotate-me" src={particle2} alt="particle One" />
                            <img className="particle-2 animate-rotate-me" src={gradientcurveshape2} alt="particle Two" />
                            <img className="particle-3 animate-zoominout" src={particle4} alt="particle Three" />
                            <img className="particle-4 animate-float-bob-y" src={particle5} alt="particle Five" />
                        </div>
                        <div className="row text-center justify-content-center">
                            <div className="col-xl-7 col-lg-10">
                                <div className="subscribe-newsletter-content">
                                    <div className="section-title mb-35">
                                        <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                            <span className="single-heading-tag">Our Newsletter</span>
                                        </div>
                                        <h2 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Subscribe Our Newsletter <br className="d-none d-md-block" />To Get More Update</h2>
                                    </div>
                                    <div className="newsletter-form newsletter-form-v2 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" name="email" id="emailAddress" className="form-control" placeholder="Enter Your Email Address" />
                                                <button type="submit" name="submit" value="Go" className="filled-btn">Subscribe Now <i className="fa fa-arrow-right"></i></button>
                                            </div>
                                        </form>
                                        <div className="newsletter-notice">
                                            <p>On the other hand, we denounce with righteous</p>
                                        </div>
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

export default Services;