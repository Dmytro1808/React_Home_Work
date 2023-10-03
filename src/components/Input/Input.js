import React from 'react';
import './Input.css';
import {FaUserAlt} from "react-icons/fa";


function Input() {
  return (
    <>
      <input type='text' id='username' placeholder='Username' autoComplete="current-password" required />
      <FaUserAlt className="FaUserAlt" />
    </>
  );
}

export default Input;