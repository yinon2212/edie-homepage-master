import React from "react";
import Text from "./Text";
import '../css/DesignCard.css';


const DesignCard = ({cardImage, projectTopic, projectName}) => {
    return (
        <div className="design-card">
            <img src={cardImage} className="design-card-img" alt="design-card-img" />
            <Text classes="small txt-gray project-topic" text={projectTopic} />
            <Text classes="medium project-name" text={projectName} />
        </div>
    );
}

export default DesignCard;