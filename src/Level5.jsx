
import React, { useState } from "react";
import ReturnToHome from "./ReturnToHome";
import NextLevel from "./NextLevel";

const Level5 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    if (/[A-Z]/.test(pwd) && /\d/.test(pwd) && /[@$!%*?&]/.test(pwd))
      return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setStrength(checkPasswordStrength(e.target.value));
  };

  const completed = username.trim() !== "" && password.trim() !== "";

  return (
    <div className="level4-container">
      <ReturnToHome />
      <style>
        {`
          body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background: linear-gradient(to right, #ffccff, #ff99ff, #ffff66);
            text-align: center;
            color: #333;
          }
          // .level5-container {
          //   padding: 20px;
          //   border-radius: 10px;
          //   background: #ffccff;
          //   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
          //   max-width: 700px;
          //   margin: auto;
          //   position: relative;
          // }
          .chat-bubble {
            background: #ffffff;
            padding: 10px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            margin-bottom: 20px;
          }
          .input-field {
            margin: 10px;
            padding: 8px;
            border: 2px solid #ff66b2;
            border-radius: 5px;
            font-size: 16px;
            width: 80%;
          }
          .password-strength {
            font-weight: bold;
          }
          .insta-ui {
            background: #ffffff;
            padding: 20px;
            border-radius: 15px;
            text-align: left;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            max-width: 400px;
            margin: auto;
          }
          .info-box {
            position: absolute;
            top: 10px;
            right: 0;
            border: 2px solid red;
            background: #ffffff;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            max-width: 220px;
          }
          .button {
            background-color: #ff66b2;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }
        `}
      </style>
      <div className="chat-bubble">
        <p>
          Kid: I want to create an Instagram account! But I need a strong
          password!
        </p>
      </div>
      <div className="insta-ui">
        <h2>Sign Up</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="password-strength">Password Strength: {strength}</p>
        <button className="button">Oh, you are right!</button>
      </div>
      <div className="info-box">
        <h4>Password Info</h4>
        <p>
          Passwords should be strong with a mix of uppercase, lowercase,
          numbers, and symbols.
        </p>
        <p>
          <strong>Doâ€™s:</strong> Use long, complex passwords. Enable two-factor
          authentication.
        </p>
        <p>
          <strong>Donâ€™ts:</strong> Donâ€™t use common words or personal
          information.
        </p>
        <p>
          <strong>How to store passwords:</strong> Use a password manager
          instead of writing them down.
        </p>
      </div>
      <NextLevel completed={completed} next={6} />
    </div>
  );
};

export default Level5;
