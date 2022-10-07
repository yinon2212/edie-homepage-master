import React from "react";
import Text from "./Text";
import DesignCard from "./DesignCard";
import Link from "./Link";
import '../css/DesginsSection.css';


const DesginsSection = () => {
    return (
        <div className="section designs-section">
            <Text classes="medium bold section-topic" text="Good design means good business" />
            <div className="design-cards-container">
                <DesignCard
                    cardImage={require('../res/smarthome.jpg')}
                    projectTopic="Full stack application"
                    projectName="Smart home dashboard"
                />
                <DesignCard
                    cardImage={require('../res/onboard.png')}
                    projectTopic="UI/UX design"
                    projectName="Onboard application"
                />
                <DesignCard
                    cardImage={require('../res/booking.png')}
                    projectTopic="Mobile application"
                    projectName="Booking system"
                />
                <DesignCard
                    cardImage={require('../res/juice-product.png')}
                    projectTopic="Front End application"
                    projectName="Juice product homepage"
                />
                <Link linkTxt="see more" />
            </div>
            
        </div>
    );
}

export default DesginsSection;