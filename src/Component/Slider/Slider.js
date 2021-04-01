import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import landing1 from '../Images/Landing 1.png';
import landing2 from '../Images/Landing m 1.png';
import second_slider from '../Images/second_slide_img.png';
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";


const Slider = () => {
    return (
        <section id="features" className="sliderBody">
            <div className="sliderContent">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <div className="carouselBody">
                            <div className="carouselContent">
                                <div className="carouselText">
                                    <div className="carouselTextHeader">
                                        <h1>What Can We Do</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <article>
                                        <b>Web & APP Development</b><br />
                                        With right strategies and technolo gies, our web & app (iOS & android) design and development team gives yo ur business the required boost through visually appealing and interactive websit es, which ensures greater conversion and genuine business leads.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
                                </div>
                                <div className="carouselImg">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={landing1}
                                            alt="First slide1"
                                        />
                                        <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <div className="carouselBody">
                            <div className="carouselContent">
                                <div className="carouselText">
                                    <div className="carouselTextHeader">
                                        <h1>What Can We Do</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <article>
                                        <b>Web & APP Development</b><br />
                                        With right strategies and technolo gies, our web & app (iOS & android) design and development team gives yo ur business the required boost through visually appealing and interactive websit es, which ensures greater conversion and genuine business leads.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
                                </div>
                                <div className="carouselImg">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={second_slider}
                                            alt="First slide1"
                                        />
                                        {/* <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselBody">
                            <div className="carouselContent">
                                <div className="carouselText">
                                    <div className="carouselTextHeader">
                                        <h1>What Can We Do</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <article>
                                        <b>Web & APP Development</b><br />
                                        With right strategies and technolo gies, our web & app (iOS & android) design and development team gives yo ur business the required boost through visually appealing and interactive websit es, which ensures greater conversion and genuine business leads.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
                                </div>
                                <div className="carouselImg">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={landing1}
                                            alt="First slide1"
                                        />
                                        <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Slider;