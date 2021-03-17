import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbarBody">
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
    );
};

export default Navbar;