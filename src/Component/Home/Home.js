import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Capability from '../Capability/Capability';
import Footer from '../Footer/Footer';
import ForYou from '../ForYou/ForYou';
import GetTogether from '../GetTogether/GetTogether';
import Header from '../Header/Header';
import OtherServices from '../OtherServices/OtherServices';
import OurClients from '../OurClients/OurClients';
import OurProducts from '../OurProducts/OurProducts';
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
                <AboutUs />
                <OurProducts />
                <OtherServices />
                <div className="secondBackground">                   
                    <Portfolio />
                    <Team />
                    <Capability />
                    <OurClients />
                </div>
                <div className="thirdBackground">
                    <GetTogether />
                    <Footer />
                </div>
            </div>

        </div>
    );
};

export default Home;