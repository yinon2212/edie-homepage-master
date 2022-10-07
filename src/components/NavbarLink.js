import React from "react";
import '../css/NavbarLinks.css';

const NavbarLink = ({link, id}) => {
    return (
        <a key={id} href="#" className="navbar-link">{link}</a>
    );
}

export default NavbarLink;