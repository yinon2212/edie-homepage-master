import React from "react";
import Text from "./Text";
import '../css/Link.css';

const Link = ({linkTxt}) => {
    return (
        <div className="link">
            <Text classes="txt-blue" text={linkTxt} />
            <i class="fas fa-arrow-right"></i>
        </div>
    );
}

export default Link;