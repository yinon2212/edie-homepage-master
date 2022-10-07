import React from "react";
import Text from "./Text";
import InputForm from './InputForm';
import '../css/ContactUsInput.css';

const ContactUsInput = () => {
    return (
        <div className="contact-us-input">
            <Text classes="small input-top" text="Want us to contact you?" />
            <InputForm placeholder="Email" />
        </div>
    );
}

export default ContactUsInput;