import React, { useEffect } from 'react';
import './OtherServices.css';
import lottie from 'lottie-web';
import { useRef } from 'react';

const OtherServices = () => {

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/primex 3 image.json')
        })
    }, [])

    return (
        <div className="otherServicesBody">
            <div className="otherServicesContent">
                <div className="OtherServicesHeader">
                    <h1>OUR OTHER SERVICES ARE</h1>
                    <article>
                        We started our team w ork as a conceptional and creative designing firm. But after a certain time we i nclude some more activity as per our client push . and this are the service we a dd … hope this kinda service add more value to you and me.
                    </article>
                </div>
                <div className="services">
                    <div className="service A">
                        <div className="serviceDetails">
                            <h3>Advertisement</h3>
                            <article>
                                Are you another ACME or a true original? We thought so. Now let’s work together to figure out what that sounds like in as short and catchy a manner as possible.
                            </article>
                        </div>
                        <div className="serviceDetails">
                            <h3>Branding</h3>
                            <article>
                                Where do you stand in the eyes of the marketplace? Sure you're great at w hat you do, but how do people know that? Let’s dig in and develop a comprehensive positioning strategy that will guide you out of the shadows and into the limelight.
                            </article>
                        </div>
                        <div className="serviceDetails">
                            <h3>Printing / Graphics</h3>
                            <article>
                                The conversation with your audience goes beyond the digital space, and tactile communications certainly still have relevance. From brochures to billboards to boxes and everywhere in-between, we’re well-versed in bringing your story to life no matter the medium.

                            </article>
                        </div>
                    </div>
                    <div className="service B">
                        <div className="serviceDetails">
                            <div className="container" ref={container}></div>
                        </div>
                        <div className="serviceDetails">
                            <h3>Audio Visual Production</h3>
                            <article>
                                The term identity says it all: a distilled representation of who you are. Whether you’re a new player on the field or a seasoned vet looking for a reboot, we live to designed your identity systems in sync with long-term vision and big-picture strategy. Visual storytelling at it’s finest… and most succinct. We have vest experienced team to support your strategy.
                            </article>
                        </div>
                    </div>
                    <div className="service C">
                        <div className="serviceDetails">
                            <h3>Business Automation</h3>
                            <article>
                                Automation software is being used by businesses to reduce the costs associate d with completing particular process. It is a way of reducing labour intensive activities. Manual triggers are being replaced by software which integrates disparate systems to enable an end to end business process. Costs are saved by the reduced need for people. We serve you from access control, CCTV IP cam , to all y ou need for your swift workflow .
                            </article>
                        </div>
                        <div className="serviceDetails">
                            <h3> Event Management</h3>
                            <article>
                                With a team of young creative dynamic & dedicated professionals we Have pushed AI areas of event management to new frontiers, Whether it is artists management, product launch, exhibition, road show , fashion show celebrity management as well as corporate indoor outdoor event. We are committed to deliver more then the client expectation.

                            </article>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OtherServices;