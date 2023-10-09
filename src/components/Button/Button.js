import "./Button.css";
import React from "react";

function Button({ onClick }) {
  return (
    <button type="submit" className="btn">
      Login
    </button>
  );
}

export default Button;
