import React from "react";
import NavbarLink from "./NavbarLink";

const generateLink = (link, id) => {
    return <NavbarLink id={id} link={link} />
}

const FooterLinks = ({links}) => {
    const allLinks = links.map((link, id) => {
        return generateLink(link, id);
    })
    
    return (
        <div className="footer-links">
            {allLinks}
        </div>
    );
}

export default FooterLinks;