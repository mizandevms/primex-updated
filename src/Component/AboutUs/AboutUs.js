import React, { useEffect } from 'react';
import './AboutUs.css';
import lottie from 'lottie-web';
import { useRef } from 'react';

const AboutUs = () => {

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/Charactor ani.json')
        })
    }, [])


    
    return (
        <div className="aboutUsBody">
            <div className="aboutUsContent">
                <div className="aboutAnimation">
                    <div className="container" ref={container}></div>
                </div>
                <div className="aboutText">
                    <h1>ABOUT US</h1>
                    <article>
                        Who Are We? PRIMEX Infos ys is a technology driven and customer focused company that provides UI/UX design, mobile app development, app and responsive website development to global cust omers across all industries. We never stop at improving our services including e ngineering techniques, management practices and developmental methods. Our app d evelopers can offer you customized solutions to suit your needs. They are aware about the latest app versions and can ensure good performance of the apps. Our d esigners, too, are experts in creating themes and icons for smart phones and tou ch screen devices. Websites are designed in user-friendly manner making navigati on simple and faster.
                    </article>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;