import React from 'react';
import './Header.css';
import logo from '../Images/Frame.svg'
import { Link } from 'react-router-dom';
import ham from '../Images/Ham barg.png';

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
        console.log(bool);

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
        <div>
            <div className="headerBody">
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

                </div>
            </div>
        </div>

    );
};

export default Header;