import './Card.css';
import React from 'react';
import Input from "../../components/Input/Input.js";
import InputPassword from "../../components/InputPassword/InputPassword.js";
import Button from "../../components/Button/Button.js";

function Card() {
  return (
    <form>
      <h1 className='logo-name'>Harvey Norman</h1>
      <div className="input-box">
        <Input />
      </div>
      <div className="input-box">
        <InputPassword />
      </div>
      <Button />
    </form>
  );
}

export default Card;


