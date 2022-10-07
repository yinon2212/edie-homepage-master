import React from "react";


const SocialLink = ({id, iconName}) => {
    return (
        <i key={id} className={`social-link ${iconName}`}></i>
    );
}

export default SocialLink;