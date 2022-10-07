import React from "react";
import NavbarLink from "./NavbarLink";

const generateLink = (link, id) => {
    return <NavbarLink id={id} link={link} />;
}

const NavbarLinks = (props) => {
    const links = props.links.map((link, id) => {
        return generateLink(link, id);
    })

    return (
        <div className="navbar-links">
            {links}
        </div>
    );  
}

export default NavbarLinks;