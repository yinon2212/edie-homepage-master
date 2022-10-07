import React from "react";
import Logo from "./Logo";
import NavbarLinks from './NavbarLinks';
import '../css/Navbar.css';

const Navbar = (props) => {

    return (
        <div className="navbar">
            <Logo color="black" />
            <input type="checkbox" id="items-toggle" name="items-toggle" />
            <NavbarLinks links={props.links} />
            <label htmlFor="items-toggle" className="label-items-toggle"><i class="fas fa-bars"></i></label>
        </div>
    );
}

export default Navbar;