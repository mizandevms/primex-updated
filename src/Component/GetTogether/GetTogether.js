import React from 'react';
import './GetTogether.css';
import primexLogo from '../Images/Group 8.png';

const GetTogether = () => {
    return (
        <div className="getTogetherBody">
            <div className="getTogetherContent">
                <div className="getHeader">
                    <h1 className="lets">Let's</h1>
                    <h1>Create Together</h1>
                </div>
            </div>
            <div className="getForm">
                <div className="getInputs">
                    <input type="text" placeholder="Your Mail" />
                    <textarea name="massage" id="" cols="30" rows="10" placeholder="Massage"></textarea>
                </div>
                <div className="getSubmits">
                    <img src={primexLogo} alt="Logo" />
                    <button type="submit"> Ask Us</button>
                </div>
            </div>
            
        </div>
    );
};

export default GetTogether;