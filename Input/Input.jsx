import React from "react";
import "./Input.css"

const Input = ({type, placeholder}) =>{
    return (
        <div className="inputBox">
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;  
