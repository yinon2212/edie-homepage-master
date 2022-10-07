import React from "react";
import '../css/Text.css';

const Text = ({text, classes}) => {
    return <p className={`text ${classes}`}>{text}</p>
}


export default Text;