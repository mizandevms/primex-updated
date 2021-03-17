import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ForYou from '../ForYou/ForYou';
import Header from '../Header/Header';
import OtherServices from '../OtherServices/OtherServices';
import './Home.css'
const Home = () => {
    return (
        <div className='homeBody'>
            <div className="homeContent">
                <div className="firstBackground">
                    <Header />
                    <ForYou />
                </div>
                <OtherServices />
                <AboutUs />
            </div>

        </div>
    );
};

export default Home;