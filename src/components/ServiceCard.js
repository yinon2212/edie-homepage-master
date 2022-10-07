import React from "react";
import Text from "./Text";
import Button from "./Button";
import '../css/ServiceCard.css';

const ServiceCard = ({iconName, iconBgColor, topic, text}) => {
    return (
        <div className="service-card">
            <i className={`card-icon ${iconName} ${iconBgColor}`}></i>
            <Text classes="bold small-plus card-topic" text={topic} />
            <Text classes="card-text" text={text} />
            <Button color="" text="Get started" />
        </div>
    );
}

export default ServiceCard;