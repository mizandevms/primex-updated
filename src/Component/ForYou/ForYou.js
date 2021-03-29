import React from 'react';
import { Link } from 'react-router-dom';
import './ForYou.css';
import { GrLinkNext } from "react-icons/gr";

const ForYou = () => {
    return (
        <div className="forYoyBody">
            <div className="forYouContent">
                <div className="forYoyHeader">
                    <h1>WHAT WE CARE</h1>
                    <h1 className="colorHeader">FOR YOU</h1>
                </div>
                <article>
                    Based on your requirement, you can choose from hourly, fully dedicated and partly dedicated engagement models and spend accordingly. Our developers use W3C standard of coding to create clean and beautiful websites which will increase its ranking on the search engine results page.
                </article>
                <Link to="/home">GET PRICING  <GrLinkNext/></Link>
            </div>

        </div>
    );
};

export default ForYou;