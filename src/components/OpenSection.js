import React from "react";
import Navbar from "./Navbar";
import Text from './Text';
import ContactUsInput from "./ContactUsInput";
import '../css/OpenSection.css';

const OpenSection = ({links}) => {
    return (
        <div className="open-section">
            <Navbar links={links} />
            <div className="text-block">
                <Text classes="txt-blue" text="Unhappy with your website?"  />
                <Text classes="large bold" text="We create beautiful and fast web services"  />
            </div>

            <img className="open-section-img" src={require('../res/heroImage.jpg')}  />

            <div className="text-block">
                <Text classes="large bold" text="Story, emotion and purpose"  />
                <Text classes="about-us-paragraph" text="We help transform your ideas into real worl applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time."  />
            </div>
            <ContactUsInput />
        </div>
    );
}

export default OpenSection;