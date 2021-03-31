import React from 'react';
import './OurClients.css'
import air from '../Images/Clint Logo/air.png'
import bgb from '../Images/Clint Logo/bgb.png'
import doinondin from '../Images/Clint Logo/download.png'
import itv from '../Images/Clint Logo/itvs.org.PNG'
import stc from '../Images/Clint Logo/logo_STCGROUP.png'
import regent from '../Images/Clint Logo/RG-Logo.png'
import synctella from '../Images/Clint Logo/synctella.png'
import usaid from '../Images/Clint Logo/Vertical_RGB_600.jpg'


const OurClients = () => {
    return (
        <div className="ourClientsBody">
            <div className="ourClientsContents">
                <div className="clientsHeader">
                    <h1 className="headerColour">Our</h1>
                    <h1>Clients</h1>
                </div>
                <div className="clientsLogo">
                    <div className="clients">
                        <img src={air} alt="Air Force"/>
                        <img src={bgb} alt="BGB"/>
                        <img src={doinondin} alt="Doinondin"/>
                        <img src={itv} alt="ITv"/>
                    </div>
                    <div className="clients">
                        <img src={stc} alt="STC"/>
                        <img src={regent} alt="Regent Group"/>
                        <img src={synctella} alt="Synctella"/>
                        <img src={usaid} alt="USAID"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;