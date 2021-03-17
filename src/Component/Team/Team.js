import React from 'react';
import './Team.css'
import Asif from '../Images/29432173_1646182772163168_428414277582323712_o.jpg';
import Udhvob from '../Images/Udhvob.png';
import Mizan from '../Images/Mizan.png';
import Russel from '../Images/138719776_226714722344591_5169889791912608121_o.jpg';
const Team = () => {

    return (
        <div className="teamBody">
            <div className="teamContent">
                <h1>MEET THE TEAM</h1>
                <article>
                    A team Sunday morning mee ting known as the ‘addabaazi’ followed by a free breakfast is a grea t start to the week. An open plan office and our own “addakhana”(we named our meeting room) are just a few reasons why we think PRIMEX is a great pl ace to work. The team were asked how they would describe the PRIMEX culture, ans wers were: ‘fun, sociable, friendly, collaborative, upbeat, innovative, a community and dynamic’ - we think that speaks for itself...
                </article>
                <div className="team-img">
                    <div className="member">
                        <img src={Mizan} alt="" />
                        <label>Mizanur Rahman Mizan</label>
                        <label>Junior Web Devloper</label>
                    </div>
                    <div className="member">
                        <img src={Udhvob} alt="" />
                        <label>Ragib Ekhowan</label>
                        <label>UI/UX Designer</label>
                    </div>
                    <div className="member">
                        <img src={Asif} alt="" />
                        <label>Asif Anam Khan</label>
                        <label>Senior Software Engineer</label>
                    </div>
                    <div className="member">
                        <img src={Russel} alt="" />
                        <label>Russell Abdullah Al Mamun</label>
                        <label>CEO</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;