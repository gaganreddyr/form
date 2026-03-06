import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Display.css"

const Display = () => {
    const [mode, setMode] = useState("login");
    return(
        <div className="data">
            <h2>
                {mode === "signup"
                ? "Signup"
                : mode === "forgot"
                ? "Reset Password"
                : "Login"}
            </h2>
            
            {mode === "signup" && (<Input type="text" placeholder="Name"/>)}

            <Input type="email" placeholder="Email id"/>

            {mode !== "forgot" && (<Input type="password" placeholder="Password"/>)}
            
            {mode === "login" && (
                <p className="forgot" onClick={()=> setMode("forgot")}>Forgot Password?</p>
            )}
            
            <div className="buttons">
                {mode === "forgot" ? (
                    <Button text ="Send reset link" type="primary"/>
                ):(
                 <>
                    <Button text="Sign Up" type= {mode === "signup"?"primary":"secondary"} onClick={()=> setMode("signup")}/>
                    <Button text="Login" type= {mode === "login"?"primary":"secondary"} onClick={()=> setMode("login")}/>                      
                 </>  
                )}
            </div>
            
            {mode === "forgot" && (
                <p className="back" onClick={()=> setMode("login")}>Back to Login</p>
            )}
        </div>
    );
};
export default Display;

