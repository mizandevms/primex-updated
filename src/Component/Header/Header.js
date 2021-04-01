import React from 'react';
import './Header.css';
import logo from '../Images/Frame.svg'
// import { Link } from 'react-router-dom';
import ham from '../Images/Ham barg.png';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Header = () => {
    let bool = false;

    const handleClick = () => {
        bool = !bool;
        if (bool) {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "block";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "block";
        }
        else {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "none";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "none";
        }
        // console.log(bool);
    }
    const handleClickBackdrop = () => {
        bool = !bool;
        if (!bool) {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "none";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "none";
        }
        else {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "block";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "block";
        }
    }
    return (
        <div id="home" className="headerBody">
            <div className="headerContent">
                <div className="logo">
                    <div className="logoBody">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="navbarContentDesktop">
                    <div className="navbarContent">
                        
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-100}
                                    duration={500}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Features</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="Services"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={100}
                                    duration={2000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Services</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="Products"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={0}
                                    duration={2000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Our Products</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="Portfolio"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={50}
                                    duration={2000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Portfolio</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={50}
                                    duration={2000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >About</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="Team"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-50}
                                    duration={3000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Team</Link>
                                </a>
                            </div>
                        </div>
                        <div className="buttonBody">
                            <div className="buttonContent">
                                <a href=""><Link activeClass="active"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={50}
                                    duration={3000}
                                    delay={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                >Contact</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="hamburger">
                    <img onClick={handleClick} id="ham" src={ham} alt="" />
                    <div id="hamMenu" className="buttonItems">
                        <div className="navbarContent">
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Features</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Services</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Portfolio</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">About</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Team</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/home">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span onClick={handleClickBackdrop} id="backdrop" className="backdrop"></span>
                <a href="" id="upbtn">
                    <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={3000}
                        delay={500}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >
                        <FaRegArrowAltCircleUp />
                    </Link></a>
            </div>
        </div>


    );
};

export default Header;