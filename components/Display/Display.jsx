import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Display.css"

const Display = () => {

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = () => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

        if(!pattern.test(email)){
            setError("Please enter a valid email address");
            return false;
        }

        setError("");
        return true;
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if(value === ""){
            setError("");
        } else {
            validateEmail();
        }
    };

    return(
        <div className="data">

            <h2 className={
                    mode === "signup"
                    ? "title signup"
                    : mode === "forgot"
                    ? "title forgot"
                    : "title login"}
            >
                {mode === "signup"
                ? "Signup"
                : mode === "forgot"
                ? "Forgot Password"
                : "Login"}
            </h2>
            
            {mode === "signup" && (
                <Input type="text" placeholder="Name"/>
            )}

            <Input 
                type="email" 
                placeholder="Email id"
                value={email}
                onChange={handleEmailChange}
            />

            {error && <p className="error">{error}</p>}

            {mode !== "forgot" && (
                <Input type="password" placeholder="Password"/>
            )}
            
            {mode === "login" && (
                <p 
                    className="forgot" 
                    onClick={()=> setMode("forgot")}
                >
                    Forgot Password?
                </p>
            )}
            
            <div className="buttons">

                {mode === "forgot" ? (
                  <Button 
                    text ="Send reset link" 
                    type="primary"
                    onClick={()=> validateEmail()}
                  />
                ):(

                    <>
                        <Button 
                            text="Sign Up" 
                            type= {mode === "signup" ? "primary" : "secondary" } 
                            onClick={()=> setMode("signup")}
                        />

                        <Button 
                            text="Login" 
                            type= {mode === "login" ? "primary" : "secondary" } 
                            onClick={() => setMode("login")}
                        />                      
                    </>  

                )}

            </div>
            
            {mode === "forgot" && (
                <p 
                    className="back" 
                    onClick={()=> setMode("login")}
                >
                    Back to Login
                </p>
            )}

        </div>
    );
};

export default Display;