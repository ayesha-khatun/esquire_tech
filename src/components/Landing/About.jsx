import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import dotspatternbg from "../../img/services/dotspatternbg.png";
import sareq from "../../img/esq/sareq2.jpeg";
import rabbir from "../../img/esq/rabbir.png";
import abir from "../../img/esq/abir.png";
import mehedi from "../../img/esq/mehedi.jpg";
import noyon from "../../img/esq/noyon.jpeg";
import kausar from "../../img/esq/kausar.png";
import nayem from "../../img/esq/nayem.jpeg";
import musaSir from "../../img/esq/musaSir.jpg";
import saddam from "../../img/esq/saddam.jpg";
import ayesha from "../../img/esq/ayesha.jpg";
import md from "../../img/esq/md.png";
import joshef from "../../img/esq/joshef.png";
import imtiyaz from "../../img/esq/imtiyaz.png";
import rokibul from "../../img/esq/rokibul.jpg";
import farhan from "../../img/esq/farhan.jpeg";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { AiFillCompass } from "react-icons/ai";
import { BiFingerprint } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const About = () => {
    const myStyle = {
        width: '100%',
        height: '100%',
    };
    const myStyle1 = {
        width: '487px',
        height: '255px',
        // paddingTop: "20px"

    };
    const myStyle2 = {
        width: '280px',
        height: '250px',
    };
    const myStyle3 = {
        width: '350px',
        height: '300px',
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    

    useEffect(() => {},[isOpen]);
    return (
        <React.Fragment>
            <section className="about-us-area pt-80 pb-30 ">
                <div className="container">               
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center">
                                <div className="section-heading-tag service">
                                    Esquire Technology was founded to share our vision of the cloud with our partners and customers.Esquire Technology was founded after realising that the customer's journey to the cloud was not been fully addressed. We pride ourselves on being Technology Native and not being locked into vendor technologies, but instead provide the best cloud solution for our customers.
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
                                    <span className="single-heading-tag">Our Leader</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-services-content-wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div data-wow-delay="0.1s" data-wow-duration="2000ms">
                                    <div className="iconic-box-body text-center">
                                        <img className="particle-1 " src={md} alt="Ehsanul Habib" style={myStyle} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.3s" data-wow-duration="2000ms">
                                    <div className="text-center">
                                        <h4 style={{fontSize:'1.7rem'}}>Mr. Ehsanul Habib </h4>
                                        {/* <p style={{ color: "rgb(5, 163, 202)" }}>Managing Director</p> */}
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            "We keep improving the quality of our products and services and looking forward to introduce a wider range of products to our customers to meet their needs.Our aim is to unveil our position as one of the unique software company in the world. We are constantly focusing on strengthening our business substances to ensure a strong podium on which we can rely to explore new business opportunities for the development of our core business, widen our revenue base, upsurge the growth potentials and consequently improve the customer satisfaction."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-30">
                            <div className="col-xl-4 col-lg-4">
                                <div data-wow-delay="0.1s" data-wow-duration="2000ms">
                                    <div className="iconic-box-body text-center">
                                        <img className="particle-1 " src={musaSir} alt="Mohammad Musa" style={myStyle3} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 ">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.3s" data-wow-duration="2000ms">
                                    <div className="text-center">
                                        <h5 style={{fontSize:'1.7rem'}}>Mohammad Musa</h5>
                                        {/* <p style={{ color: "rgb(5, 163, 202)" }}>Managing Director</p> */}
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content" style={{ fontSize: 14 }}>
                                            "Nowadays, the fourth industrial revolution—fourth in the sense of its innovative and qualitative nature—is taking place. On the one hand, the quality of the changes can be seen in the fact that the whole production process is managed and supervised in an integrated way, and is combined, yet flexible. In order to remain competitive in a globalized environment, manufacturing companies need to constantly evolve their production systems and accommodate the changing demands of markets.

                                            Esquire Technology is focusing to develop sustainable industrial solution in line with the vision of fourth industrial revolution. We cordially welcome you as our partner in this automation journey."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="our-team-area our-team-area-v2 pt-50 pb-30" style={{ backgroundImage: `url(${dotspatternbg})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-67">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag">Creative Team</span>
                                </div>
                                <h2>We Have Professional <br className="d-none d-md-block" /> Creative Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-3"></div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="2000ms">
                                    <div className="team-member-thumb text-center">
                                        <img src={sareq} alt="team member one" />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Syed Abdul Sarek
                                        </h5>
                                        <p className="team-member-role">
                                             Manager &  <span>Lead, Software Engineering </span>
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                                {/* <Link to="#"> */}
                                                {/* <li><i className="fab fa-facebook-f"></i></li>
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-youtube"></i></li>
                                                <li><i className="fab fa-behance"></i></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3"></div>
                            <div className="col-lg-3 col-md-6 ">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="2000ms">
                                    <div className="team-member-thumb text-center h-25 w-90" >
                                        <img src={rabbir} alt="team member two" />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Md. Rabbir Al-Amin
                                        </h5>
                                        <p className="team-member-role">
                                            Senior Software Engineer
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                                {/* <li><a href={() => false}><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-twitter"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-youtube"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-behance"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                                    <div className="team-member-thumb text-center h-25 w-90">
                                        <img src={nayem} alt="team member six" />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Abu Nayem
                                        </h5>
                                        <p className="team-member-role">
                                            Senior Software Engineer
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                                {/* <li><a href={() => false}><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-twitter"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-youtube"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-behance"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <div className="team-member-thumb text-center">
                                        <img src={noyon} alt="team member three" style={myStyle1} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Noyon Islam
                                        </h5>
                                        <p className="team-member-role">
                                            Senior Software Engineer
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                                {/* <li><a href={() => false}><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-twitter"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-youtube"></i></a></li>
                                                <li><a href={() => false}><i className="fab fa-behance"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb  text-center ">
                                        <img src={saddam} alt="team member four" style={myStyle1} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                        Md. Saddam Hossain
                                        </h5>
                                        <p className="team-member-role">
                                            Software Engineer
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                                {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                                                                <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={joshef} alt="team member five" style={myStyle2} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Joshef Hossain Bappy
                                        </h5>
                                        <p className="team-member-role">
                                            Software Engineer
                                        </p>
                                        <div className="social-links">
                                            <ul>
                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            
                            <div className="col-lg-3 col-md-6">
                                        <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="team-member-thumb">
                                                <img src={imtiyaz} alt="team member two" style={myStyle2} />
                                            </div>
                                            <div className="team-member-bio">
                                                <h5 className="team-member-name">
                                                    Imtiyaz Ahamed Chowdhury
                                                </h5>
                                                <p className="team-member-role">
                                                Software Engineer
                                                </p>
                                                <div className="social-links">
                                                    <ul>
                                                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={ayesha} alt="team member three" style={myStyle2} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                             Ayesha Khatun
                                        </h5>
                                        <p className="team-member-role">
                                             Software Engineer (Frontend)
                                        </p>
                                        <div className="social-links">
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={abir} alt="team member two" style={myStyle2} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Md. Abir Hasan
                                        </h5>
                                        <p className="team-member-role">
                                            SQA Engineer
                                        </p>
                                        <div className="social-links">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-btn-wrapper text-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <Button className="filled-btn bg-ocean-blue firstBtn" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>  { isOpen ? "Hide Members": 'View More Members' } <FontAwesomeIcon icon={faAngleRight} /></Button>
                            <Collapse isOpen={isOpen}>
                                <div className="team-member-content">
                                    <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="team-member-thumb">
                                        <img src={farhan} alt="team member five" style={myStyle2} />
                                    </div>
                                    <div className="team-member-bio">
                                        <h5 className="team-member-name">
                                            Farhan Sadiq Sohan
                                        </h5>
                                        <p className="team-member-role">
                                            Executive
                                        </p>
                                        <div className="social-links">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                            <div className="team-member-thumb">
                                                <img src={kausar} alt="team member three" style={myStyle2} />
                                            </div>
                                            <div className="team-member-bio">
                                                <h5 className="team-member-name">
                                                    Kausar Ahmed
                                                </h5>
                                                <p className="team-member-role">
                                                System & Network Admin
                                                </p>
                                                <div className="social-links">
                                                    <ul>
                                                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                                                    <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="team-member-thumb">
                                                <img src={rokibul} alt="team member two" style={myStyle2} />
                                            </div>
                                            <div className="team-member-bio">
                                                <h5 className="team-member-name">
                                               Md. Rokibul Hassan
                                                </h5>
                                                <p className="team-member-role">
                                                Jr. SQA 
                                                </p>
                                                <div className="social-links">
                                                    <ul>
                                                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-team-member single-team-member-v2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="team-member-thumb">
                                                <img src={mehedi} alt="team member two" style={myStyle2} />
                                            </div>
                                            <div className="team-member-bio">
                                                <h5 className="team-member-name">
                                                Mehedi Hasan Nayeem
                                                </h5>
                                                <p className="team-member-role">
                                                SQA Intern
                                                </p>
                                                <div className="social-links">
                                                    <ul>
                                                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    </div>
                                </div>

                            </Collapse>
                        </div>
                        <div className="team-btn-wrapper text-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">


                            <Button className="filled-btn bg-ocean-blue firstBtn" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>  { isOpen ? "Hide Members": 'View More Members' } <FontAwesomeIcon icon={faAngleRight} /></Button>
                            <Collapse isOpen={isOpen}>

                                <div className="team-member-content">
                                    <div className="row">

                                        

                                    </div>
                                </div>

                            </Collapse>
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
                                    <span className="single-heading-tag">Our focus</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="our-services-content-wrapper">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.1s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-3">
                                        <FiUsers  color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">
                                        <p className="iconic-box-content">
                                            Automation Applications
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.3s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-4">
                                        <AiFillCompass  color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">

                                        <p className="iconic-box-content">
                                            ERP Modules
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-5">
                                        <FontAwesomeIcon icon={faDollarSign}  color="blue" />
                                    </div>
                                    <div className="iconic-box-body">

                                        <p className="iconic-box-content">
                                            Quality Check
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="single-iconic-box iconic-box-v4 wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="2000ms">
                                    <div className="iconic-box-icon iconic-box-gradient-6">
                                        <BiFingerprint  color="blue"/>
                                    </div>
                                    <div className="iconic-box-body">

                                        <p className="iconic-box-content">
                                            Monitoring & Security
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

export default About;