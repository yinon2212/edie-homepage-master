import React from "react";
import Text from "./Text";
import '../css/OurTeamSection.css';

const OurTeamSection = () => {
    return (
        <div className="section our-team-section">
            <div className="container-left">
                <Text classes="small txt-red" text="Meet the team" />
                <Text classes="large topic" text="We are chilled and a laidback team" />
                <Text classes="small team-desc" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>

            <div className="container-right">
                <img className="person-img person3" src={require('../res/person3.png')} alt="person-img" />
                <div className="vertical-images">
                    <img className="person-img person1" src={require('../res/person1.png')} alt="person-img" />
                    <img className="person-img person2" src={require('../res/person2.png')} alt="person-img" />
                </div>
            </div>
        </div>
    );
}

export default OurTeamSection;