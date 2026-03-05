import React from "react";
import "./Button.css";

const Button = ({text, onClick, Type}) => {
    return(
        <button className={'btn $(type)'} onClick={onClick}>
            {text}
        </button>
    );
};
export default Button; 