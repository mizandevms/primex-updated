import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Capability from '../Capability/Capability';
import Footer from '../Footer/Footer';
import ForYou from '../ForYou/ForYou';
import GetTogether from '../GetTogether/GetTogether';
import Header from '../Header/Header';
import OtherServices from '../OtherServices/OtherServices';
import Portfolio from '../Portfolio/Portfolio';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';
import './Home.css'
const Home = () => {
    return (
        <div className='homeBody'>
            <div className="homeContent">
                <div className="firstBackground">
                    <Header />
                    <ForYou />
                    <Slider />
                </div>
                <OtherServices />
                <AboutUs />
                <Portfolio />
                <Team />
                <Capability />
                <div className="thirdBackground">
                    <GetTogether />
                    <Footer />
                </div>
            </div>

        </div>
    );
};

export default Home;