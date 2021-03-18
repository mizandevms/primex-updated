import React, { useEffect } from 'react';
import './Portfolio.css';
import img1 from '../Images/portfolio/adena.png';
import img2 from '../Images/portfolio/atom.png'
import img3 from '../Images/portfolio/flat.png'
import img4 from '../Images/portfolio/ipad.jpg'
import img5 from '../Images/portfolio/ket.jpg'
import img6 from '../Images/portfolio/mentum.png'
import img7 from '../Images/portfolio/modern-phone.jpg'
import img8 from '../Images/portfolio/sven.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    useEffect(() => {
        Aos.init({ durations: 2000 })
    }, [])


    window.onload = function () {
        let hamburgerArea0 = document.getElementById("web");
        hamburgerArea0.addEventListener("click", function () {
            const hamburgerMenuArea0 = document.getElementById("webImg");
            hamburgerMenuArea0.style.display = "block";
            const backdropArea0 = document.getElementById("allImg");
            backdropArea0.style.display = "none";
            const backdropArea01 = document.getElementById("graphicsImg");
            backdropArea01.style.display = "none";
            const backdropArea02 = document.getElementById("templatesImg");
            backdropArea02.style.display = "none";
            const backdropArea03 = document.getElementById("appsImg");
            backdropArea03.style.display = "none";
        })
        let hamburgerArea1 = document.getElementById("all");
        hamburgerArea1.addEventListener("click", function () {
            const hamburgerMenuArea1 = document.getElementById("allImg");
            hamburgerMenuArea1.style.display = "block";
            const backdropArea11 = document.getElementById("webImg");
            backdropArea11.style.display = "none";
            const backdropArea12 = document.getElementById("graphicsImg");
            backdropArea12.style.display = "none";
            const backdropArea012 = document.getElementById("templatesImg");
            backdropArea012.style.display = "none";
            const backdropArea013 = document.getElementById("appsImg");
            backdropArea013.style.display = "none";
        })
        let hamburgerArea2 = document.getElementById("graphics");
        hamburgerArea2.addEventListener("click", function () {
            const hamburgerMenuArea2 = document.getElementById("graphicsImg");
            hamburgerMenuArea2.style.display = "block";
            const backdropArea2 = document.getElementById("webImg");
            backdropArea2.style.display = "none";
            const backdropArea021 = document.getElementById("allImg");
            backdropArea021.style.display = "none";
            const backdropArea022 = document.getElementById("templatesImg");
            backdropArea022.style.display = "none";
            const backdropArea023 = document.getElementById("appsImg");
            backdropArea023.style.display = "none";

        })
        let hamburgerArea3 = document.getElementById("templates");
        hamburgerArea3.addEventListener("click", function () {
            const hamburgerMenuArea3 = document.getElementById("templatesImg");
            hamburgerMenuArea3.style.display = "block";
            const backdropArea3 = document.getElementById("webImg");
            backdropArea3.style.display = "none";
            const backdropArea31 = document.getElementById("graphicsImg");
            backdropArea31.style.display = "none";
            const backdropArea031 = document.getElementById("allImg");
            backdropArea031.style.display = "none";
            const backdropArea033 = document.getElementById("appsImg");
            backdropArea033.style.display = "none";

        })
        let hamburgerArea4 = document.getElementById("apps");
        hamburgerArea4.addEventListener("click", function () {
            const hamburgerMenuArea4 = document.getElementById("appsImg");
            hamburgerMenuArea4.style.display = "block";
            const backdropArea4 = document.getElementById("webImg");
            backdropArea4.style.display = "none";
            const backdropArea41 = document.getElementById("graphicsImg");
            backdropArea41.style.display = "none";
            const backdropArea041 = document.getElementById("allImg");
            backdropArea041.style.display = "none";
            const backdropArea043 = document.getElementById("templatesImg");
            backdropArea043.style.display = "none";

        })

    }

    return (
        < div className="portfolioBody" >
            <div className="portfolioContent">
                <div className="portfolioText">
                    <div className="portfolioHeader">
                        <div className="portfolioHeaderText">
                            <h1 >WHAT WE</h1>
                            <h1 className="headerColor">DONE SO FAR</h1>
                        </div>
                        <div className="portfolioHeaderLink">
                            <Link to="/home">Get PRICEING -></Link>
                        </div>
                    </div>
                    <article>
                        What we have done is not important to us ; the BIGGER
                        think is what we can do for you and what we should do that make us more efficient . we are committed
                        to serve the best as your expectation.
                        We have so much more that we want and need to do for you all.
			    </article>
                </div>
                <div className="port-btn">
                    <span data-aos="zoom-in-up" data-aos-duration="4000" id="all">All</span>
                    <span data-aos="slide-left" data-aos-duration="4000" id="web">Web Design</span>
                    <span data-aos="slide-right" data-aos-duration="4000" id="graphics">Print Graphics</span>
                    <span data-aos="slide-down" data-aos-duration="4000" id="templates">Templates</span>
                    <span data-aos="slide-up" data-aos-duration="4000" id="apps">Apps</span>
                </div>
                <div data-aos="slide-up" data-aos-duration="4000" className="all" id="allImg">
                    <div className="portfolioFirstRow">
                        <div className="portfolioFirstColumn">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <div className="portfolioSecondColumn">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="portfolioSecondRow">
                        <div className="portfolioFirstColumnNew">
                            <img src={img6} alt="" />
                        </div>
                        <div className="portfolioSecondColumnNew">
                            <img src={img5} alt="" />
                            <img src={img4} alt="" />
                        </div>
                    </div>

                    {/* <img src={img7} alt="" />
                    <img src={img8} alt="" /> */}

                </div>
                <div data-aos="slide-up" data-aos-duration="4000" className="web" id="webImg" >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>
                <div className="graphics" id="graphicsImg">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />

                </div>
                <div className="templates" id="templatesImg">
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />

                </div>
                <div className="apps" id="appsImg">
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />

                </div>


            </div>

        </div >
    );
};

export default Portfolio;