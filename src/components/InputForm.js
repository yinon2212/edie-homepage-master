import React from "react";
import Button from "./Button";
import '../css/InputForm.css';

const InputForm = ({placeholder}) => {
    return (
        <div className="input-form">
            <input type="text" className="input" placeholder={placeholder} />
            <Button text="Join" color="btn-blue" />
        </div>
    );
}

export default InputForm;