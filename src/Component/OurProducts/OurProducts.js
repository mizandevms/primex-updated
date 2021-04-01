import React from 'react';
import './OurProducts.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import slider2nd from '../Images/Untitled-1-01 1.png';
import ecManager from '../Images/Frame.png'

const OurProducts = () => {
    return (
        <div id="Products" className="ourProductsBody">
            <div className="ourProductsContent">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <div className="carouselBody">
                            <div className="carouselContent">
                                <div className="carouselImgSecond">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={slider2nd}
                                            alt="First slide1"
                                        />
                                        {/* <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        /> */}
                                    </div>
                                </div>
                                <div className="carouselTextSecond">
                                    <div className="carouselTextHeader">
                                        <h1>Our Products</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <img src={ecManager} alt="ecManager" />
                                    <article>
                                        <b>E- Commerce site With Admin & Pos</b><br />
                                        We provide E-commerce site with fully Customizable admin panel & Offer management long With inventory & Pos . We Provide both delivery & pick-up systems.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
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
                                <div className="carouselImgSecond">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={slider2nd}
                                            alt="First slide1"
                                        />
                                        {/* <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        /> */}
                                    </div>
                                </div>
                                <div className="carouselTextSecond">
                                    <div className="carouselTextHeader">
                                        <h1>Our Products</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <img src={ecManager} alt="ecManager" />
                                    <article>
                                        <b>E- Commerce site With Admin & Pos</b><br />
                                        We provide E-commerce site with fully Customizable admin panel & Offer management long With inventory & Pos . We Provide both delivery & pick-up systems.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselBody">
                            <div className="carouselContent">
                                <div className="carouselImgSecond">
                                    <div className="carouselImgContent">
                                        <img
                                            className="slide1 d-block w-100"
                                            src={slider2nd}
                                            alt="First slide1"
                                        />
                                        {/* <img
                                            className="slide2 d-block "
                                            src={landing2}
                                            alt="First slide2"
                                        /> */}
                                    </div>
                                </div>
                                <div className="carouselTextSecond">
                                    <div className="carouselTextHeader">
                                        <h1>Our Products</h1>
                                        <h1 className="colorText">For You</h1>
                                    </div>
                                    <img src={ecManager} alt="ecManager" />
                                    <article>
                                        <b>E- Commerce site With Admin & Pos</b><br />
                                        We provide E-commerce site with fully Customizable admin panel & Offer management long With inventory & Pos . We Provide both delivery & pick-up systems.
                                    </article>
                                    <Link to="/home">GET PRICING <GrLinkNext /></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default OurProducts;