import "./Card.css";
import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input.js";
import InputPassword from "../../components/InputPassword/InputPassword.js";
import Button from "../../components/Button/Button.js";
import { useNavigate } from "react-router-dom";

function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoginClicked(true);

    if (username === "Дмитрий" && password === "181994") {
      localStorage.setItem("token", "Dmytro");
      navigate("/ProductTable");
      setErrorMessage("");
    } else if (username === "Олег" && password === "221991") {
      localStorage.setItem("token", "Oleg");
      navigate("/ProductTable");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid user name or password");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
  };
  //Эффекты с очищением
  useEffect(() => {
    if (!errorMessage) {
      if (!(username || password)) {
        setUsername("");
        setPassword("");
        setTimeout(() => {
          setIsLoginClicked(false);
        }, 1000);
      } else {
      }
    }
  }, [errorMessage, username, password]);
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="logo-name">Harvey Norman</h1>

      <div
        className={`input-box ${
          isLoginClicked && username === "" ? "empty" : "not-empty"
        }`}
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div
        className={`input-box ${
          isLoginClicked && password === "" ? "empty" : "not-empty"
        }`}
      >
        <InputPassword
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button type="submit" />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}

export default Card;
