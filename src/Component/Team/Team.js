import React from 'react';
import './Team.css'
import Asif from '../Images/92874895_2906229149491851_3734807907384950784_o.jpg';
import Udhvob from '../Images/Udhvob.png';
import Mizan from '../Images/Mizan.png';
import Russel from '../Images/138719776_226714722344591_5169889791912608121_o.jpg';
import Himel from '../Images/0560d236-ea81-4b44-967a-307c24f3b70a.jpg';

const Team = () => {

    return (
        <div id="Team" className="teamBody">
            <div className="teamContent">
                <h1>Meet The Team</h1>
                <article>
                    A team Sunday morning mee ting known as the ‘addabaazi’ followed by a free breakfast is a grea t start to the week. An open plan office and our own “addakhana”(we named our meeting room) are just a few reasons why we think PRIMEX is a great pl ace to work. The team were asked how they would describe the PRIMEX culture, ans wers were: ‘fun, sociable, friendly, collaborative, upbeat, innovative, a community and dynamic’ - we think that speaks for itself...
                </article>
                <div className="team-img">
                    <div className="member">
                        <img src={Mizan} alt="" />
                        <label>Mizanur Rahman Mizan</label>
                        <label>Junior Web Developer</label>
                    </div>
                    <div className="member himel">
                        <img src={Himel} alt="" />
                        <label>Fazle Chisty Himel</label>
                        <label>Front End Developer</label>
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