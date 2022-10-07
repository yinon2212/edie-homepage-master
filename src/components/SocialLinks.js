import React from "react";
import SocialLink from "./SocialLink";

const SocialLinks = ({socialLinks}) => {
    const allSocialLinks = socialLinks.map((sLink, id) => {
        return <SocialLink id={id} iconName={sLink} />;
    });

    return (
        <div className="social-links-container">
            {allSocialLinks}
        </div>
    );
}

export default SocialLinks;