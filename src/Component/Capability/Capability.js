import React from 'react';
import { Link } from 'react-router-dom';
import './Capability.css'

const Capability = () => {
    return (
        <div className="capabilityBody">
            <div className="capabilityContent">
                <div className="primex_capability">
                    <h4>Primex Capability</h4>
                    <article>
                        Capability of PRIMEX infosys is a leading pro vider of end-to-end IT services and solutions for Global companies.Our offshore software outsourcing services and solutions are designed with a focus on secure, scalable, expandable and reliable business systems. Through our low cost, high quality and reliable offshore software services, we serve our clients giving the m value for money and thus client satisfaction.
                    </article>
                    <h5>Our Value</h5>
                    <ul>
                        <li> Striving for 100% client satisfaction at all times.</li>
                        <li> Exceeding Customer’s expectation.</li>
                        <li> Honesty, Integrity and Transparency.</li>
                        <li> Innovation.</li>
                        <li> Experience, learn and Share – that’s the philosophy for teams.</li>
                        <li> Customer centric processes and approach.</li>
                        <li> Responsiveness.</li>
                    </ul>
                </div>
                <div className="skillsBody">
                    <div className="skills">
                        <div className="skillsContents">
                            <h5>OUR SKILLS</h5>
                            <div className="skillPercentBody">
                                <div className="skillPercentContent">
                                    <span className="percent">94%</span>
                                    <div className="skillPercent1">
                                        <span>Web Development</span>
                                    </div>
                                    <div className="skillPercent12"></div>
                                </div>
                                <div className="skillPercentContent">
                                    <span className="percent">80%</span>
                                    <div className="seo1">
                                        <span>Seo</span>
                                    </div>
                                    <div className="seo"></div>
                                </div>
                                <div className="skillPercentContent">
                                    <span className="percent">93%</span>
                                    <div className="skillPercent1">
                                        <span>Web Design</span>
                                    </div>
                                    <div className="skillPercent12"></div>
                                </div>
                                <div className="skillPercentContent">
                                    <span className="percent">90%</span>
                                    <div className="Graphics1">
                                        <span>Graphics Design</span>
                                    </div>
                                    <div className="Graphics"></div>
                                </div>
                                <div className="skillPercentContent">
                                    <span className="percent">80%</span>
                                    <div className="seo1">
                                        <span>Print Graphics</span>
                                    </div>
                                    <div className="seo"></div>
                                </div>
                                <div className="skillPercentContent">
                                    <span className="percent">94%</span>
                                    <div className="skillPercent1">
                                        <span>Apps</span>
                                    </div>
                                    <div className="skillPercent12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/home">Get PRICEING -></Link>
                </div>
            </div>
        </div>
    );
};

export default Capability;