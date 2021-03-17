import React from 'react';
import './Footer.css'
import youtube from '../Images/youtube.png';
import instagram from '../Images/instragram.png';
import linkedIn from '../Images/linkedin.png';
import fb from '../Images/fb.png';

const Footer = () => {
    return (
        <div className="footerBody">
            <div className="footerContent">
                <span>Level 4, House23/3, Road Jhigatola, Dhaka 1207, Bangladesh</span>
                <div className="socialMedia">
                    <img src={youtube} alt="youtube" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedIn} alt="linkedIn" />
                    <img src={fb} alt="fb" />
                </div>
            </div>
            <div className="footerAddress">
                <div className="addressName">
                    <span>
                        2021 © Primex Information Technology LTD ,
                    </span>
                    <span>
                        All rights reserved.
                    </span>
                </div>
                <div className="addressConditions">
                    <span>Terms of use</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;