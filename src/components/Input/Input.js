import React from "react";
import "./Input.css";
import { FaUserAlt } from "react-icons/fa";

function Input({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        id="username"
        placeholder="Username"
        autoComplete="current-password"
        value={value}
        onChange={onChange}
      />
      <FaUserAlt className="FaUserAlt" />
    </>
  );
}

export default Input;
