import React from "react";
import Logo from "./Logo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import ContactUsInput from "./ContactUsInput";
import '../css/Footer.css';

const socialLinks = ["fab fa-instagram", "fab fa-linkedin", "fab fa-twitter"]

const Footer = ({footerLinks}) => {
    return (
        <div className="footer">
            <FooterLinks links={footerLinks} />

            <div className="socail-links">
                <Logo color="logo-cl-white" />
                <SocialLinks socialLinks={socialLinks} />
            </div>

            <ContactUsInput />
        </div>
    );
}

export default Footer;