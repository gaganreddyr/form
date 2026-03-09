import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import "./Display.css";

const Display = () => {

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");

  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const regions = ["Bangalore", "Hyderabad", "Chennai", "Mumbai", "Delhi"];

  const validateEmail = (value) => {
    const pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!pattern.test(value)) {
      setError("Enter a valid email address");
      return false;
    }

    setError("");
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setError("");
    } else {
      validateEmail(value);
    }
  };

  const handleLogin = () => {

    let valid = true;

    if (!email) {
      setError("Enter a valid email");
      valid = false;
    }

    if (!password) {
      setPassError("Enter a valid password");
      valid = false;
    }

    if (!valid) return;

    console.log("Login success", { email, password });

  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setEmail("");
    setPassword("");
    setRegion("");
    setError("");
    setPassError("");
  };

  return (

    <div className="data">

      <h2 className="title">
        {mode === "signup"
          ? "Signup"
          : mode === "forgot"
          ? "Forgot Password"
          : "Login"}
      </h2>

      {mode === "signup" && (
        <Input type="text" placeholder="Name" />
      )}

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />

      {error && <p className="error">{error}</p>}

      {mode !== "forgot" && (
        <>
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value); setPassError("");}}
            />

          {passError && <p className="error">{passError}</p>}
        </>
      )}

      {mode === "signup" && (
        <>
            <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Dropdown
                options={regions}
                label="Select Region"
                onSelect={setRegion}
            />
        </>
      )}

      {mode === "login" && (
        <p
          className="forgot"
          onClick={() => changeMode("forgot")}
        >
          Forgot Password?
        </p>
      )}

      <div className="buttons">

        {mode === "forgot" ? (

          <Button
            text="Send reset link"
            type="primary"
          />

        ) : (

          <>
            <Button
              text="Sign Up"
              type={mode === "signup" ? "primary" : "secondary"}
              onClick={() => changeMode("signup")}
            />

            <Button
              text="Login"
              type={mode === "login" ? "primary" : "secondary"}
              onClick={
                mode === "login"
                  ? handleLogin
                  : () => changeMode("login")
              }
            />
          </>

        )}

      </div>

      {mode === "forgot" && (
        <p
          className="back"
          onClick={() => changeMode("login")}
        >
          Back to Login
        </p>
      )}

    </div>
  );
};

export default Display;