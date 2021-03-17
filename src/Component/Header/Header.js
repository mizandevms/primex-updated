import React from 'react';
import './Header.css';
import logo from '../Images/Frame.svg'
import Navbar from '../NavBar/Navbar';

const Header = () => {
    return (
        <div>
            <div className="headerBody">
                <div className="headerContent">
                    <div className="logo">
                        <div className="logoBody">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>

    );
};

export default Header;